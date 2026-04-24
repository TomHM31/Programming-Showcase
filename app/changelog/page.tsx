import Header from "../components/header";

export default function Changelog() {
  const changes = [
    {
      date: "2026-04-24",
      version: "1.3.3",
      title: "Changelog + spacing polish",
      changes: [
        "Split recent work into a realistic day-by-day development timeline",
        "Polished vertical spacing between TerminalHero, Welcome banner, and AI Chat",
        "Ensured the terminal hero isn’t hidden behind the fixed header",
      ],
      type: "enhancement",
    },
    {
      date: "2026-03-12",
      version: "1.3.2",
      title: "About page media fixes",
      changes: [
        "Updated About page images and improved sizing behavior to avoid distortion",
        "Fixed local image rendering for the hobbies section (e.g. goldcoast.png) by importing assets correctly",
      ],
      type: "bugfix",
    },
    {
      date: "2026-01-31",
      version: "1.3.1",
      title: "AI chat (Gemini) streaming card",
      changes: [
        "Added centered AI chat card with suggested recruiter questions",
        "Implemented token-by-token streaming responses via a server-side Gemini proxy endpoint",
        "Added thinking indicator, error fallback message, and “Powered by Gemini” label",
      ],
      type: "feature",
    },
    {
      date: "2025-10-20",
      version: "1.3.0",
      title: "Recruiter-grade terminal hero",
      changes: [
        "Built animated terminal hero (typed queue, variable typing speed, blinking cursor)",
        "Styled terminal window with macOS dots, subtle glow, and CRT scanlines",
        "Added CTA buttons that fade in after the typing sequence finishes",
        "Restored the original Welcome banner and kept the resume readable",
      ],
      type: "feature",
    },
    {
      date: "2024-01-15",
      version: "1.2.0",
      title: "AI Projects Integration",
      changes: [
        "Added Machine Learning showcase section",
        "Integrated project timeline feature",
        "Enhanced responsive design",
      ],
      type: "feature",
    },
    {
      date: "2024-12-16",
      version: "1.0.0",
      title: "Animation Expansion",
      changes: [
        "Added animations to improve user experience",
        "Updated Project page with related projects",
        "Replaced static content with dynamic data",
      ],
      type: "enhancement",
    },
    {
      date: "2024-12-10",
      version: "1.0.3",
      title: "Apperance Expansion",
      changes: [
        "Added header as a component",
        "Updated Changelog page",
        "Replaced default font with custom font",
      ],
      type: "enhancement",
    },
    {
      date: "2024-12-07",
      version: "1.0.2",
      title: "Features Expansion",
      changes: [
        "Enhanced performance & accessibility",
        "Implemented chatbot system (WIP)",
        "Updated About page",
        "Static content for Changelog, Projects",
      ],
      type: "feature",
    },
    {
      date: "2024-12-01",
      version: "1.0.1",
      title: "Apperance Expansion",
      changes: [
        "Updated Home page",
        "Adjusted color theme",
        "Improved navigation structure",
      ],
      type: "enhancement",
    },
    {
      date: "2024-11-24",
      version: "1.0.0",
      title: "Initial Release",
      changes: [
        "Basic portfolio structure",
        "Implemented header components",
        "Added About, Projects, Changelog sections",
      ],
      type: "release",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] p-6 font-mono text-black">
      <Header />

      <section className="mb-8 mt-36 max-w-4xl mx-auto">
        <h2 className="heading-1 text-black">Development Timeline</h2>

        <div className="space-y-8 mt-10 tracking-in-expand-normal">
          {changes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 box-vibrate"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">{item.date}</span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    item.type === "feature"
                      ? "bg-blue-100 text-blue-800"
                      : item.type === "enhancement"
                        ? "bg-green-100 text-green-800"
                        : item.type === "bugfix"
                          ? "bg-red-100 text-red-800"
                          : "bg-purple-100 text-purple-800"
                  }`}
                >
                  v{item.version}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

              <ul className="space-y-2">
                {item.changes.map((change, changeIndex) => (
                  <li key={changeIndex} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className="text-gray-700">{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
