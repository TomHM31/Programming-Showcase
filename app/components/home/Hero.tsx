import TypedRole from "./TypedRole";
import PixelAvatar from "./PixelAvatar";

type Props = {
  name?: string;
};

const INTRO =
  "I build AI systems that ship — from LLM pipelines and multi-agent tooling to the full-stack products around them. First-year Master of AI at Deakin University, with production experience at FPT Software and Twin.";

export default function Hero({ name = "Hoang Minh Khoi" }: Props) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto grid max-w-[1120px] items-center gap-12 px-6 pb-16 pt-14 md:px-12 md:pb-[72px] md:pt-[88px] lg:grid-cols-[1fr_300px] lg:gap-16"
    >
      <div>
        <div className="mb-5 text-[13px] text-[#8a8a8a]">
          <span className="text-cyan-400">$</span> whoami
        </div>
        <h1
          id="hero-heading"
          className="mb-4 text-4xl font-bold leading-[1.05] tracking-tight text-neutral-50 md:text-[56px]"
        >
          {name}
        </h1>
        <div className="mb-6 flex items-center gap-2.5 text-xl text-cyan-400">
          <span className="text-neutral-600" aria-hidden="true">
            &gt;
          </span>
          <span>
            <TypedRole />
            <span className="home-blink" aria-hidden="true">
              ▊
            </span>
          </span>
        </div>
        <p className="home-sans mb-9 max-w-[520px] text-base leading-[1.7] text-neutral-400 [text-wrap:pretty]">
          {INTRO}
        </p>
        <div className="flex flex-wrap items-center gap-3.5">
          <a
            href="#projects"
            className="inline-block rounded-lg bg-cyan-400 px-[26px] py-[13px] text-sm font-bold text-[#0a0a0a] hover:bg-cyan-300"
          >
            view my work →
          </a>
          <a
            href="#ai-chat"
            className="inline-block rounded-lg border border-[#333] px-[26px] py-[13px] text-sm text-neutral-200 hover:border-cyan-400 hover:text-cyan-400"
          >
            chat with my AI
          </a>
        </div>
      </div>
      <PixelAvatar />
    </section>
  );
}
