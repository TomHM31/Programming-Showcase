"use client";

import { useEffect, useRef, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type Props = {
  resumeText?: string;
};

const SUGGESTIONS = [
  "What's Tom's strongest skill?",
  "Describe a project he built",
  "Is he available for work?",
  "What makes him different?",
];

const WELCOME_MESSAGE =
  "Hi! I'm Tom's AI. Ask me anything about his skills, projects, or availability — I'll answer the way he would.";

function buildSystemPrompt(resumeText: string): string {
  return `You are Tom's personal AI assistant embedded in his portfolio website.
Your ONLY job is to answer questions about Tom Hoang — his skills, experience, projects, education, and availability for work.

Here is everything you know about Tom:
${resumeText}

Rules you must follow without exception:
1. Only answer questions that are directly related to Tom — his background, work, skills, personality, or availability.
2. If a question is not about Tom (e.g. general coding help, world events, math, opinions on other people), respond with exactly: "I'm only here to tell you about Tom! Feel free to ask about his skills, projects, or availability."
3. Answer in a confident, concise, friendly tone. Max 3 sentences per answer.
4. Never reveal you are Claude or any AI model — you are simply "Tom's Assistant".
5. Never make up information not present in the resume text above.
6. Use emojis to make the conversation more engaging😶‍🌫️. But do not overuse them.`;
}

function extractStreamText(json: unknown): string {
  if (!json || typeof json !== "object") return "";
  const obj = json as Record<string, unknown>;

  // Shape A/B: proxy-simplified { text } or { delta }
  if (typeof obj.text === "string") return obj.text;
  if (typeof obj.delta === "string") return obj.delta;

  // Shape C: raw Gemini { candidates: [{ content: { parts: [{ text }] } }] }
  const candidates = obj.candidates as
    | { content?: { parts?: { text?: unknown }[] } }[]
    | undefined;
  const parts = candidates?.[0]?.content?.parts;
  if (Array.isArray(parts)) {
    return parts
      .map((p) => (typeof p.text === "string" ? p.text : ""))
      .join("");
  }

  // Shape D: OpenAI-compatible { choices: [{ delta: { content } }] }
  const choices = obj.choices as
    | { delta?: { content?: unknown } }[]
    | undefined;
  const content = choices?.[0]?.delta?.content;
  if (typeof content === "string") return content;

  return "";
}

export default function HomeChat({
  resumeText = "[paste your resume text here]",
}: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: WELCOME_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [error, setError] = useState("");

  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = messagesRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, streamingText, isThinking]);

  const canSend = !isThinking && input.trim().length > 0;

  async function streamAnswer(nextMessages: ChatMessage[]) {
    setIsThinking(true);
    setStreamingText("");
    setError("");

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages,
          systemPrompt: buildSystemPrompt(resumeText),
        }),
      });

      if (!res.ok || !res.body) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Request failed (${res.status})`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let acc = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const events = buffer.split("\n\n");
        buffer = events.pop() ?? "";

        for (const event of events) {
          for (const line of event.split("\n")) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            const data = trimmed.slice(5).trim();
            if (!data || data === "[DONE]") continue;

            let delta = "";
            try {
              delta = extractStreamText(JSON.parse(data));
            } catch {
              // plain-text chunk — use it directly
              delta = data;
            }
            if (delta) {
              acc += delta;
              setStreamingText(acc);
            }
          }
        }
      }

      const finalText = acc.trim()
        ? acc.trim()
        : "Hmm, I didn't get a response. There may be a configuration issue — please try again shortly.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: finalText },
      ]);
      setStreamingText("");
    } catch {
      setError(
        "Something went wrong reaching Tom's AI right now. Please try again in a moment.",
      );
      setStreamingText("");
    } finally {
      setIsThinking(false);
    }
  }

  async function handleSubmit(forcedText?: string) {
    const text = typeof forcedText === "string" ? forcedText : input;
    const question = text.trim();
    if (!question || isThinking) return;

    setInput("");
    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: question },
    ];
    setMessages(nextMessages);
    await streamAnswer(nextMessages);
  }

  return (
    <section
      id="ai-chat"
      aria-label="AI recruiter chat"
      className="mx-auto max-w-[760px] scroll-mt-28 px-6 pb-24 md:px-12 md:pb-[104px]"
    >
      <div className="overflow-hidden rounded-2xl border border-[#1e1e1e] bg-[#111] shadow-[0_0_80px_rgba(34,211,238,0.05)]">
        <div className="flex items-center justify-between border-b border-[#1e1e1e] bg-[#141414] px-5 py-4">
          <div className="flex items-center gap-3">
            <div
              className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-sm font-bold text-cyan-400"
              aria-hidden="true"
            >
              T
            </div>
            <div>
              <div className="text-sm font-semibold text-neutral-50">
                tom.ai — recruiter mode
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-neutral-600">
                <span
                  className="home-pulse-dot h-1.5 w-1.5 rounded-full bg-cyan-400"
                  aria-hidden="true"
                />
                knows my skills, projects &amp; availability
              </div>
            </div>
          </div>
          <div className="text-[11px] text-neutral-600">powered by Gemini</div>
        </div>

        <div
          ref={messagesRef}
          aria-live="polite"
          className="flex max-h-[340px] min-h-[200px] flex-col gap-3.5 overflow-y-auto p-[22px]"
        >
          {messages.map((message, idx) => (
            <div
              key={idx}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`home-sans max-w-[78%] rounded-xl border px-4 py-3 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "border-cyan-400/30 bg-cyan-400/[0.12] text-[#d8f7fc]"
                    : "border-[#262626] bg-[#1a1a1a] text-neutral-300"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}

          {streamingText ? (
            <div className="flex justify-start">
              <div className="home-sans max-w-[78%] rounded-xl border border-[#262626] bg-[#1a1a1a] px-4 py-3 text-sm leading-relaxed text-neutral-300">
                {streamingText}
                <span className="home-blink text-cyan-400" aria-hidden="true">
                  ▊
                </span>
              </div>
            </div>
          ) : null}

          {isThinking && !streamingText ? (
            <div className="text-xs text-neutral-600">
              tom.ai is typing<span className="home-blink">…</span>
            </div>
          ) : null}

          {error ? (
            <div className="rounded-xl border border-red-400/25 bg-red-400/10 px-4 py-3 text-xs text-neutral-200">
              {error}
            </div>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2 px-[22px] pb-4">
          {SUGGESTIONS.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              disabled={isThinking}
              onClick={() => handleSubmit(suggestion)}
              className="rounded-full border border-[#262626] bg-transparent px-[13px] py-[7px] text-xs text-[#8a8a8a] hover:border-cyan-400 hover:text-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {suggestion}
            </button>
          ))}
        </div>

        <form
          className="flex gap-2.5 border-t border-[#1e1e1e] bg-[#141414] px-5 py-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="ask a recruiter-style question…"
            disabled={isThinking}
            aria-label="Chat input"
            className="flex-1 rounded-lg border border-[#262626] bg-[#0e0e0e] px-[15px] py-[11px] text-[13px] text-neutral-200 outline-none focus:border-cyan-400/50"
          />
          <button
            type="submit"
            disabled={!canSend}
            className="rounded-lg bg-cyan-400 px-5 py-[11px] text-[13px] font-bold text-[#0a0a0a] hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            send
          </button>
        </form>
      </div>
    </section>
  );
}
