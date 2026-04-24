import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ClientMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing ANTHROPIC_API_KEY on server." },
      { status: 500 }
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
      { status: 400 }
    );
  }

  const upstream = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 320,
      system: systemPrompt,
      messages,
      stream: true,
    }),
  });

  if (!upstream.ok || !upstream.body) {
    const text = await upstream.text().catch(() => "");
    return NextResponse.json(
      {
        error: "Upstream error from Anthropic.",
        status: upstream.status,
        details: text.slice(0, 2000),
      },
      { status: 500 }
    );
  }

  return new Response(upstream.body, {
    status: 200,
    headers: {
      "content-type": "text/event-stream; charset=utf-8",
      "cache-control": "no-cache, no-transform",
      connection: "keep-alive",
    },
  });
}

