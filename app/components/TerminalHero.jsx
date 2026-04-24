"use client";

import { useEffect, useRef, useState } from "react";

export default function TerminalHero({
  name = "Tom",
  onViewWorkHref = "/project",
  onChatHref = "#ai-chat",
}) {
  const script = useRef([
    { text: "$ initializing portfolio...", speed: 20, kind: "cmd" },
    {
      text: "$ loading modules: ML · NLP · LLM pipelines · Full Stack",
      speed: 20,
      kind: "cmd",
    },
    { text: "$ status: open_to_opportunities = TRUE", speed: 20, kind: "cmd" },
    { text: `$ Hello, I'm Tom.`, speed: 60, kind: "name" },
    { text: "> AI Engineer & Full Stack Developer", speed: 20, kind: "role" },
  ]);

  const [lines, setLines] = useState(() =>
    script.current.map((l) => ({ kind: l.kind, text: "" })),
  );
  const [activeIdx, setActiveIdx] = useState(0);
  const [showCtas, setShowCtas] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timeoutId = null;

    const typeLine = async (idx) => {
      const { text, speed } = script.current[idx];
      for (let i = 0; i <= text.length; i++) {
        if (cancelled) return;
        setLines((prev) => {
          const next = prev.slice();
          next[idx] = { ...next[idx], text: text.slice(0, i) };
          return next;
        });
        await new Promise((r) => {
          timeoutId = setTimeout(r, speed);
        });
      }
    };

    const run = async () => {
      for (let i = 0; i < script.current.length; i++) {
        if (cancelled) return;
        setActiveIdx(i);
        await typeLine(i);
        await new Promise((r) => {
          timeoutId = setTimeout(r, 140);
        });
      }
      if (!cancelled) {
        setActiveIdx(script.current.length - 1);
        setShowCtas(true);
      }
    };

    run();

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [name]);

  return (
    <section className="terminalHero__wrap" aria-label="Terminal hero">
      <div
        className="terminalHero__terminal"
        role="region"
        aria-label="Terminal window"
      >
        <div className="terminalHero__scanlines" aria-hidden="true" />

        <div className="terminalHero__topbar" aria-hidden="true">
          <div className="terminalHero__dots">
            <span className="terminalHero__dot terminalHero__dotRed" />
            <span className="terminalHero__dot terminalHero__dotYellow" />
            <span className="terminalHero__dot terminalHero__dotGreen" />
          </div>
          <div className="terminalHero__title">portfolio — zsh</div>
          <div className="terminalHero__spacer" />
        </div>

        <div className="terminalHero__body">
          {lines.map((l, idx) => {
            const isActive = idx === activeIdx && !showCtas;
            return (
              <div
                key={idx}
                className={[
                  "terminalHero__line",
                  l.kind === "name" ? "terminalHero__nameLine" : "",
                  l.kind === "role" ? "terminalHero__roleLine" : "",
                ].join(" ")}
              >
                <span className="terminalHero__lineText">{l.text}</span>
                {isActive ? <span className="terminalHero__cursor">▋</span> : null}
              </div>
            );
          })}

          <div
            className={[
              "terminalHero__ctas",
              showCtas ? "terminalHero__ctasVisible" : "terminalHero__ctasHidden",
            ].join(" ")}
          >
            <a
              className="terminalHero__btn terminalHero__btnSolid"
              href={onViewWorkHref}
            >
              View My Work
            </a>
            <a
              className="terminalHero__btn terminalHero__btnOutline"
              href={onChatHref}
            >
              Chat with My Assistant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
