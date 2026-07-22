"use client";

import type { KeyboardEvent } from "react";
import type { Project } from "./projectsData";

type Props = {
  project: Project;
  isSelected: boolean;
  isPinned: boolean;
  onHoverIn: () => void;
  onHoverOut: () => void;
  onTogglePin: () => void;
};

export default function ProjectCard({
  project,
  isSelected,
  isPinned,
  onHoverIn,
  onHoverOut,
  onTogglePin,
}: Props) {
  const borderClass = isPinned
    ? "border-cyan-400/90"
    : isSelected
      ? "border-cyan-400/45"
      : "border-[#1e1e1e]";

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onTogglePin();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={isPinned}
      aria-label={`${project.name} — ${isPinned ? "unpin" : "pin"} preview`}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      onFocus={onHoverIn}
      onBlur={onHoverOut}
      onClick={onTogglePin}
      onKeyDown={handleKeyDown}
      className={`cursor-pointer rounded-[14px] border bg-[#111] p-[22px] transition-[border-color,transform] duration-150 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400/70 ${borderClass}`}
    >
      <div className="mb-3 flex items-center justify-between gap-2.5">
        <h3 className="text-[15px] font-bold text-neutral-50">
          {project.name}
        </h3>
        <div className="flex items-center gap-1.5">
          {isPinned && (
            <span className="whitespace-nowrap rounded border border-cyan-400/40 px-2 py-[3px] text-[10px] font-bold tracking-[0.06em] text-cyan-400">
              📌 PINNED
            </span>
          )}
          {project.isNew && (
            <span className="rounded bg-cyan-400 px-2 py-[3px] text-[10px] font-bold tracking-[0.06em] text-[#0a0a0a]">
              NEW
            </span>
          )}
        </div>
      </div>
      <p className="home-sans mb-3.5 text-[13px] leading-[1.55] text-neutral-400">
        {project.tagline}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.topStack.map((tech) => (
          <span
            key={tech}
            className="rounded-[5px] border border-cyan-400/20 bg-cyan-400/[0.07] px-[9px] py-[3px] text-[11px] text-cyan-400"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-3.5 flex items-center justify-between gap-2.5">
        <div className="text-[11px] text-neutral-600">{project.statusLine}</div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()}
          onKeyDown={(event) => event.stopPropagation()}
          className="whitespace-nowrap text-[11px] text-cyan-400 hover:underline"
        >
          repo →
        </a>
      </div>
    </div>
  );
}
