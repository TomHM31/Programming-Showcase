import Link from "next/link";

const CONTACT_EMAIL = "hoangminhkhoi3108@gmail.com";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]
          from-stone-600 via-slate-600 to-gray-600
          opacity-50
          blur-2xl
        "
      ></div>
      <div
        className="
          relative flex w-full flex-wrap items-center justify-between
          gap-x-6 gap-y-3
          rounded-lg border border-zinc-700
          bg-zinc-900/80 p-4
        "
      >
        <Link
          href="/"
          className="order-1 flex items-center gap-2.5 font-mono text-sm tracking-wider"
        >
          <span className="text-cyan-400">~/</span>
          <span className="font-semibold text-neutral-200">tom.hoang</span>
          <span className="home-blink text-cyan-400" aria-hidden="true">
            ▊
          </span>
        </Link>
        <nav className="order-3 block w-full md:order-2 md:w-auto">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-1 font-mono text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/project" className="hover:text-white">
                Project
              </Link>
            </li>
            <li>
              <Link href="/changelog" className="hover:text-white">
                Changelog
              </Link>
            </li>
          </ul>
        </nav>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="order-2 flex items-center gap-2 rounded-md border border-cyan-400/35 px-3.5 py-[7px] font-mono text-xs text-cyan-400 hover:bg-cyan-400/10 md:order-3"
        >
          <span
            className="home-pulse-dot h-[7px] w-[7px] rounded-full bg-cyan-400"
            aria-hidden="true"
          />
          open to work
        </a>
      </div>
    </header>
  );
}
