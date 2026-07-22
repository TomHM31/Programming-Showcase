"use client";

import Image from "next/image";
import type { Project } from "./projectsData";

type Props = {
  project: Project;
  isPinned: boolean;
  onUnpin: () => void;
  slideFlip: boolean;
};

export default function PreviewPanel({
  project,
  isPinned,
  onUnpin,
  slideFlip,
}: Props) {
  return (
    <div
      aria-live="polite"
      className={`overflow-hidden rounded-2xl border border-[#1e1e1e] bg-[#111] shadow-[0_0_80px_rgba(34,211,238,0.05)] ${
        slideFlip ? "projects-slide-b" : "projects-slide-a"
      }`}
    >
      <div className="relative h-[248px] overflow-hidden border-b border-[#1e1e1e] bg-[#161616]">
        {project.img ? (
          <Image
            src={project.img}
            alt={project.name}
            fill
            sizes="(min-width: 1280px) 440px, 380px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2.5 bg-[repeating-linear-gradient(45deg,#141414,#141414_12px,#181818_12px,#181818_24px)]">
            <div className="text-[26px] text-[#333]" aria-hidden="true">
              ▶
            </div>
            <div className="text-center text-[11px] leading-[1.7] text-[#666]">
              demo recording coming soon
              <br />
              <span className="text-[#444]">drop file → {project.videoHint}</span>
            </div>
          </div>
        )}
        <div className="absolute left-3 top-3 flex items-center gap-[7px] rounded-full border border-[#2a2a2a] bg-[#0a0a0a]/75 px-2.5 py-[5px] text-[10px] text-neutral-200 backdrop-blur-sm">
          <span
            className="home-pulse-dot h-1.5 w-1.5 rounded-full bg-cyan-400"
            aria-hidden="true"
          />
          preview
        </div>
        {isPinned && (
          <button
            type="button"
            onClick={onUnpin}
            className="absolute right-3 top-3 rounded-full border border-cyan-400/40 bg-[#0a0a0a]/75 px-2.5 py-[5px] font-[inherit] text-[10px] text-cyan-400 backdrop-blur-sm hover:bg-cyan-400/10"
          >
            📌 pinned — click to unpin
          </button>
        )}
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div>
          <div className="flex items-baseline justify-between gap-2.5">
            <h2 className="text-lg font-bold text-neutral-50">
              {project.name}
            </h2>
            <div className="whitespace-nowrap text-[11px] text-neutral-600">
              {project.year}
            </div>
          </div>
          <div className="mt-1 text-xs text-cyan-400">{project.category}</div>
        </div>
        <p className="home-sans m-0 text-[13.5px] leading-[1.65] text-[#b3b3b3]">
          {project.desc}
        </p>
        <ul className="home-sans m-0 flex list-disc flex-col gap-1.5 pl-[18px] text-[13px] leading-[1.55] text-[#8f8f8f]">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div>
          <div className="mb-2 text-[11px] text-neutral-600">
            $ cat stack.txt
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-[5px] border border-cyan-400/20 bg-cyan-400/[0.07] px-2.5 py-1 text-[11px] text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 rounded-lg bg-cyan-400 py-[11px] text-center text-[13px] font-bold text-[#0a0a0a] hover:bg-cyan-300"
        >
          view on github →
        </a>
      </div>
    </div>
  );
}
