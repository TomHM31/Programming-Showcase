import Header from "../components/header";

export default function Changelog() {
  const changes = [
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
    <div className="min-h-screen bg-gray p-6 font-mono">
      <Header />

      <section className="mb-8 mt-36 max-w-4xl mx-auto">
        <h2 className="heading-1">Development Timeline</h2>

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
