"use client";

import { useEffect, useState } from "react";

const ROLES = ["AI Engineer", "Full Stack Developer", "LLM Pipeline Builder"];
const TYPE_INTERVAL_MS = 90;
// Extra ticks past the full word so each role holds on screen before deleting.
const HOLD_TICKS = 14;

export default function TypedRole() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(ROLES[0]);
      return;
    }

    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    const timer = setInterval(() => {
      const word = ROLES[roleIdx];
      if (!isDeleting) {
        charIdx++;
        if (charIdx >= word.length + HOLD_TICKS) isDeleting = true;
      } else {
        charIdx--;
        if (charIdx <= 0) {
          isDeleting = false;
          roleIdx = (roleIdx + 1) % ROLES.length;
        }
      }
      setTyped(word.slice(0, Math.min(charIdx, word.length)));
    }, TYPE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return <>{typed}</>;
}
