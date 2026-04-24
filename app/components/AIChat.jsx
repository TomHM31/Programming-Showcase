"use client";

import { useEffect, useRef, useState } from "react";

const SUGGESTED = [
  "What's Tom's strongest skill?",
  "Describe a project he built",
  "Is he available for work?",
  "What makes him different?",
];
//    get a polite deflection instead of a hallucinated answer.
function buildSystemPrompt(resumeText) {
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

function extractStreamText(json) {
  if (!json || typeof json !== "object") return "";

  // Shape A: proxy-simplified  { text: "..." }
  if (typeof json.text === "string") return json.text;

  // Shape B: proxy-simplified  { delta: "..." }
  if (typeof json.delta === "string") return json.delta;

  // Shape C: raw Gemini  { candidates: [{ content: { parts: [{ text }] } }] }
  try {
    const parts = json?.candidates?.[0]?.content?.parts;
    if (Array.isArray(parts)) {
      return parts
        .map((p) => (typeof p.text === "string" ? p.text : ""))
        .join("");
    }
  } catch {
    // fall through
  }

  // Shape D: OpenAI-compatible  { choices: [{ delta: { content: "..." } }] }
  try {
    const content = json?.choices?.[0]?.delta?.content;
    if (typeof content === "string") return content;
  } catch {
    // fall through
  }

  return "";
}

export default function AIChat({
  resumeText = "[paste your resume text here]",
  accent = "#00e5ff",
}) {
  const [messages, setMessages] = useState(() => [
    {
      role: "assistant",
      content:
        "Ask me anything about Tom—skills, projects, availability, or how he thinks.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [error, setError] = useState("");

  const messagesRef = useRef(null);

  useEffect(() => {
    const el = messagesRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, streamingText]);

  useEffect(() => {
    if (error && input.trim().length > 0) setError("");
  }, [input, error]);

  const canSend = !isThinking && input.trim().length > 0;

  async function streamAnswer(nextMessages, systemPrompt) {
    setIsThinking(true);
    setStreamingText("");
    setError("");

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages
            .filter(
              (m) => m.role !== "assistant" || m.content.trim().length > 0,
            )
            .map((m) => ({ role: m.role, content: m.content })),
          systemPrompt,
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
        const parts = buffer.split("\n\n");
        buffer = parts.pop() || "";

        for (const part of parts) {
          const lines = part.split("\n");
          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            const data = trimmed.slice(5).trim();
            if (!data || data === "[DONE]") continue;

            let json = null;
            try {
              json = JSON.parse(data);
            } catch {
              // plain-text chunk — use it directly
              acc += data;
              setStreamingText(acc);
              continue;
            }

            const delta = extractStreamText(json);
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

  async function handleSubmit(forcedText) {
    const text = typeof forcedText === "string" ? forcedText : input;
    const q = text.trim();
    if (!q || isThinking) return;

    setInput("");
    const nextMessages = [
      ...messages.filter(
        (m) => m.role !== "assistant" || m.content.trim().length > 0,
      ),
      { role: "user", content: q },
    ];
    setMessages(nextMessages);

    const systemPrompt = buildSystemPrompt(resumeText);
    await streamAnswer(nextMessages, systemPrompt);
  }

  return (
    <section
      id="ai-chat"
      className="aiChat__wrap"
      aria-label="AI recruiter chat"
      style={{ ["--accent"]: accent }}
    >
      <div className="aiChat__card" role="region" aria-label="Chat card">
        <div className="aiChat__header">
          <div>
            <div className="aiChat__title">Chat with Tom's AI</div>
            <div className="aiChat__subtitle">
              Recruiter mode: concise, confident, friendly
            </div>
          </div>
          <div className="aiChat__thinking">
            {isThinking ? <span className="aiChat__pulseDot" /> : null}
          </div>
        </div>

        <div className="aiChat__suggested">
          {SUGGESTED.map((q) => (
            <button
              key={q}
              type="button"
              className="aiChat__chip"
              disabled={isThinking}
              onClick={() => handleSubmit(q)}
            >
              {q}
            </button>
          ))}
        </div>

        <div
          ref={messagesRef}
          className="aiChat__messages"
          aria-live="polite"
        >
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={[
                "aiChat__msg",
                m.role === "user" ? "aiChat__userMsg" : "aiChat__aiMsg",
              ].join(" ")}
            >
              <div className="aiChat__msgRole">
                {m.role === "user" ? "You" : "Tom's AI"}
              </div>
              <div className="aiChat__msgText">{m.content}</div>
            </div>
          ))}

          {streamingText ? (
            <div className="aiChat__msg aiChat__aiMsg">
              <div className="aiChat__msgRole">Tom's AI</div>
              <div className="aiChat__msgText">
                {streamingText}
                <span className="aiChat__cursor">▋</span>
              </div>
            </div>
          ) : null}

          {error ? <div className="aiChat__error">{error}</div> : null}
        </div>

        <form
          className="aiChat__inputRow"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            className="aiChat__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a recruiter-style question…"
            disabled={isThinking}
            aria-label="Chat input"
          />
          <button
            className="aiChat__send"
            type="submit"
            disabled={!canSend}
            aria-label="Send"
          >
            Send
          </button>
        </form>

        <div className="aiChat__powered">Powered by Gemini</div>
      </div>
    </section>
  );
}
