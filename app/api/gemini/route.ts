import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";

type ClientMessage = { role: "user" | "assistant"; content: string };

function toGeminiPrompt(messages: ClientMessage[]) {
  return messages
    .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
    .join("\n");
}

export async function POST(req: Request) {
  // ✅ CHANGE 1: Removed NEXT_PUBLIC fallback — secrets must NEVER use
  //    NEXT_PUBLIC_ prefix (that exposes them in the browser bundle).
  //    Your .env.local must have exactly: GEMINI_API_KEY=your_key_here
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    // ✅ CHANGE 2: Log server-side so you can see this in your terminal
    console.error(
      "[/api/gemini] Missing GEMINI_API_KEY in environment variables.",
    );
    return NextResponse.json(
      { error: "Missing GEMINI_API_KEY on server." },
      { status: 500 },
    );
  }

  let payload: { messages?: ClientMessage[]; systemPrompt?: string } | null =
    null;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const messages = Array.isArray(payload?.messages) ? payload!.messages : [];
  const systemPrompt =
    typeof payload?.systemPrompt === "string" ? payload!.systemPrompt : "";

  if (!messages.length) {
    return NextResponse.json(
      { error: "No messages provided." },
      { status: 400 },
    );
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-lite",
    systemInstruction: systemPrompt,
  });

  const prompt = toGeminiPrompt(messages);

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const encoder = new TextEncoder();
      const send = (obj: unknown) => {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(obj)}\n\n`));
      };

      try {
        const result = await model.generateContentStream(prompt);
        for await (const chunk of result.stream) {
          const text = chunk.text();
          if (text) send({ text });
        }
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      } catch (err) {
        // ✅ CHANGE 3: Actually log the real Gemini error so you can see it
        //    in your terminal / Vercel function logs. This is the key fix —
        //    before, errors were silently swallowed and you had no idea why
        //    the stream returned nothing.
        console.error("[/api/gemini] Gemini upstream error:", err);

        // ✅ CHANGE 4: Send the error message as a { text } chunk so the
        //    frontend can display it in the chat bubble instead of showing
        //    the generic "configuration issue" fallback.
        const message =
          err instanceof Error ? err.message : "Upstream error from Gemini.";
        send({ text: `⚠️ ${message}` });

        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    status: 200,
    headers: {
      "content-type": "text/event-stream; charset=utf-8",
      "cache-control": "no-cache, no-transform",
      connection: "keep-alive",
    },
  });
}
