const SKILL_GROUPS = [
  {
    dir: "ai-ml/",
    items: [
      "PyTorch",
      "scikit-learn",
      "Deep Learning",
      "NLP",
      "RAG",
      "Vector DBs",
      "CrewAI",
      "Gemini API",
    ],
  },
  {
    dir: "full-stack/",
    items: [
      "Next.js",
      "TypeScript",
      "React",
      "Python",
      "Java Spring",
      "PostgreSQL",
      "BigQuery",
    ],
  },
  {
    dir: "tooling/",
    items: [
      "Git",
      "Docker",
      "CI/CD",
      "Prompt Engineering",
      "Data Pipelines",
      "C++",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      aria-label="Skills"
      className="mx-auto max-w-[1120px] px-6 pb-20 md:px-12 md:pb-24"
    >
      <div className="mb-7 text-[13px] text-[#8a8a8a]">
        <span className="text-cyan-400">$</span> ls skills/{" "}
        <span className="text-neutral-600">
          — what I work with, not percentages
        </span>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.dir}
            className="rounded-xl border border-[#1e1e1e] bg-[#111] p-6 hover:border-[#2e2e2e]"
          >
            <div className="mb-4 text-xs tracking-[0.08em] text-cyan-400">
              {group.dir}
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-[#262626] bg-[#1a1a1a] px-[11px] py-[5px] text-xs text-neutral-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
