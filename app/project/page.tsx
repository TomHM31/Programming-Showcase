import type { Metadata } from "next";
import Header from "../components/header";
import HomeFooter from "../components/home/HomeFooter";
import ProjectsExplorer from "../components/project/ProjectsExplorer";
import TypedCommand from "../components/project/TypedCommand";

export const metadata: Metadata = {
  title: "Tom Hoang — Projects",
  description:
    "Projects by Tom Hoang — AI/ML pipelines, multi-agent systems, and full-stack builds, from local MVPs to shipped production systems.",
};

export default function ProjectsPage() {
  return (
    <div className="home-root min-h-screen bg-[#0a0a0a] pt-32 text-neutral-200 md:pt-24">
      <Header />
      <main>
        <section className="mx-auto max-w-[1440px] px-6 pb-7 pt-14 md:px-12">
          <div className="mb-3.5 text-[13px] text-[#8a8a8a]">
            <span className="text-cyan-400">$</span> <TypedCommand />
          </div>
          <h1 className="mb-2.5 text-[40px] font-bold tracking-[-0.02em] text-neutral-50">
            Projects
          </h1>
          <p className="home-sans max-w-[560px] text-[15px] leading-[1.7] text-neutral-400">
            Hover any project to preview it in motion. Every build here runs —
            from local MVPs to shipped production systems.
          </p>
        </section>
        <ProjectsExplorer />
      </main>
      <HomeFooter />
    </div>
  );
}
