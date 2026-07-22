"use client";

import { useEffect, useState } from "react";

const COMMAND = "ls projects/ --preview --sort=newest";
const TYPE_INTERVAL_MS = 38;
// Keeps the cursor visible briefly after the command finishes typing.
const CURSOR_HOLD_MS = 900;

export default function TypedCommand() {
  const [typed, setTyped] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(COMMAND);
      setIsTyping(false);
      return;
    }

    let charIdx = 0;
    let holdTimer: ReturnType<typeof setTimeout> | undefined;
    const typeTimer = setInterval(() => {
      charIdx++;
      setTyped(COMMAND.slice(0, charIdx));
      if (charIdx >= COMMAND.length) {
        clearInterval(typeTimer);
        holdTimer = setTimeout(() => setIsTyping(false), CURSOR_HOLD_MS);
      }
    }, TYPE_INTERVAL_MS);

    return () => {
      clearInterval(typeTimer);
      if (holdTimer) clearTimeout(holdTimer);
    };
  }, []);

  return (
    <>
      {typed}
      {isTyping && (
        <span className="home-blink text-cyan-400" aria-hidden="true">
          ▊
        </span>
      )}
    </>
  );
}
