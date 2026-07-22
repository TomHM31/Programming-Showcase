const CONTACT_EMAIL = "hoangminhkhoi3108@gmail.com";
const HEADLINE = "Let's build something.";
const SUBLINE = "Melbourne · internships & grad roles · AI/ML + full stack";

export default function HomeFooter() {
  return (
    <footer className="border-t border-[#1a1a1a] bg-[#0e0e0e]">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-6 px-6 py-12 md:px-12 md:py-14">
        <div>
          <div className="mb-1.5 text-[15px] font-semibold text-neutral-50">
            {HEADLINE}
          </div>
          <div className="text-[13px] text-neutral-600">{SUBLINE}</div>
        </div>
        <div className="flex flex-wrap gap-3.5">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-lg border border-cyan-400/35 px-[18px] py-2.5 text-[13px] text-cyan-400 hover:bg-cyan-400/10"
          >
            email me
          </a>
          <a
            href="https://www.linkedin.com/in/tom-hoang3108/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#333] px-[18px] py-2.5 text-[13px] text-neutral-200 hover:border-[#666]"
          >
            linkedin
          </a>
          <a
            href="https://github.com/TomHM31"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#333] px-[18px] py-2.5 text-[13px] text-neutral-200 hover:border-[#666]"
          >
            github
          </a>
        </div>
      </div>
    </footer>
  );
}
