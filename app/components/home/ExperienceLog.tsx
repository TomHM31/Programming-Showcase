const COMMITS = [
  {
    hash: "f4a2c91",
    date: "Oct 2024 — Jan 2025",
    title: "AI Prompt & Chatbot Engineer",
    org: "Twin",
    points: [
      "Developed and integrated AI-driven chatbots using Gemini with vector DB and BigQuery",
      "Shipped conversation-based features that boosted overall efficiency by 20%",
    ],
  },
  {
    hash: "b7e3d02",
    date: "Oct 2024 — Jan 2025",
    title: "AI Prompt Engineer (EBS)",
    org: "FPT Software",
    points: [
      "Created and optimized AI prompts for email automation, translation, and data analysis",
      "Implemented data pipelines for more efficient processing and analytics",
    ],
  },
  {
    hash: "a3f9e21",
    date: "Oct 2023 — Jan 2024",
    title: "Full Stack Developer & AI Researcher (STU)",
    org: "FPT Software",
    points: [
      "Built regression, classification, and clustering models for research and product development",
      "Collaborated with senior DevOps, achieving a 15% boost in coding efficiency",
    ],
  },
];

export default function ExperienceLog() {
  return (
    <section
      aria-label="Experience"
      className="border-y border-[#1a1a1a] bg-[#0e0e0e]"
    >
      <div className="mx-auto max-w-[1120px] px-6 py-16 md:px-12 md:py-20">
        <div className="mb-9 text-[13px] text-[#8a8a8a]">
          <span className="text-cyan-400">$</span> git log --career{" "}
          <span className="text-neutral-600">--oneline=false</span>
        </div>
        <div className="ml-1.5 flex flex-col border-l border-[#262626]">
          {COMMITS.map((commit) => (
            <div key={commit.hash} className="relative pb-11 pl-9">
              <div
                className="absolute -left-1.5 top-1 h-[11px] w-[11px] rounded-full border-2 border-cyan-400 bg-[#0e0e0e]"
                aria-hidden="true"
              />
              <div className="mb-2 flex flex-wrap items-baseline gap-3">
                <span className="text-xs text-yellow-500">
                  commit {commit.hash}
                </span>
                <span className="text-xs text-neutral-600">{commit.date}</span>
              </div>
              <div className="mb-1 text-[17px] font-semibold text-neutral-50">
                {commit.title}
              </div>
              <div className="mb-3 text-[13px] text-cyan-400">{commit.org}</div>
              <ul className="home-sans flex list-disc flex-col gap-1.5 pl-[18px] text-sm leading-relaxed text-neutral-400">
                {commit.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
