import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import youtoShortsImg from "../../images/youtoshorts.png";
import socialNotebookImg from "../../images/social-notebook.png";
import multiAgentImg from "../../images/multiagent-game.png";

type Project = {
  name: string;
  desc: string;
  img: StaticImageData;
  url: string;
  stack: string[];
};

const PROJECTS: Project[] = [
  {
    name: "YoutoShorts",
    desc: "Turns any YouTube video into ranked viral Shorts — LLM clip picking, face tracking, and karaoke captions, fully automated.",
    img: youtoShortsImg,
    url: "https://github.com/TomHM31",
    stack: ["Python", "Whisper", "ffmpeg"],
  },
  {
    name: "Social Notebook",
    desc: "NotebookLM for your social feeds — paste Reels, FB, Insta or YouTube links and chat with cited answers grounded in your content.",
    img: socialNotebookImg,
    url: "https://github.com/TomHM31",
    stack: ["Next.js", "FastAPI", "Gemini"],
  },
  {
    name: "Multi-Agent Game Generator",
    desc: "Deep learning-based game environment synthesis — generates playable Pacman & Snake games with statistical boards.",
    img: multiAgentImg,
    url: "https://github.com/TomHM31/Multi-Agent-Game-Generator",
    stack: ["Python", "CrewAI", "Gemini"],
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      aria-label="Featured projects"
      className="mx-auto max-w-[1120px] scroll-mt-28 px-6 py-20 md:px-12 md:py-24"
    >
      <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3">
        <div className="text-[13px] text-[#8a8a8a]">
          <span className="text-cyan-400">$</span> cat projects/featured.md
        </div>
        <Link
          href="/project"
          className="text-[13px] text-cyan-400 hover:underline"
        >
          all 8 projects →
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col overflow-hidden rounded-[14px] border border-[#1e1e1e] bg-[#111] transition-[border-color,transform] duration-150 hover:-translate-y-[3px] hover:border-cyan-400/50"
          >
            <div className="h-[170px] overflow-hidden bg-[#161616]">
              <Image
                src={project.img}
                alt={project.name}
                className="block h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2.5 p-[22px]">
              <div className="text-base font-bold text-neutral-50">
                {project.name}
              </div>
              <p className="home-sans flex-1 text-[13px] leading-relaxed text-neutral-400">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-[5px] border border-cyan-400/20 bg-cyan-400/[0.07] px-[9px] py-[3px] text-[11px] text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
