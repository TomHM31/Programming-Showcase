const STATUS_ITEMS = [
  { label: "location", value: "Melbourne, AU", isAccent: false },
  { label: "focus", value: "LLM pipelines · agents", isAccent: false },
  { label: "education", value: "B. of AI — Deakin '26", isAccent: false },
  { label: "status", value: "open_to_opportunities", isAccent: true },
];

// Cell borders: on mobile (2×2) the left column gets a right border and the
// top row a bottom border; from lg (1×4) the first three get right borders.
const CELL_BORDERS = [
  "border-b border-r lg:border-b-0",
  "border-b lg:border-b-0 lg:border-r",
  "border-r",
  "",
];

export default function StatusBar() {
  return (
    <div className="mx-auto max-w-[1120px] px-6 pb-16 md:px-12 md:pb-[88px]">
      <dl className="grid grid-cols-2 overflow-hidden rounded-xl border border-[#1e1e1e] bg-[#111] lg:grid-cols-4">
        {STATUS_ITEMS.map((item, idx) => (
          <div
            key={item.label}
            className={`border-[#1e1e1e] p-5 md:px-6 ${CELL_BORDERS[idx]}`}
          >
            <dt className="mb-1.5 text-[11px] text-neutral-600">
              {item.label}
            </dt>
            <dd
              className={`text-sm ${item.isAccent ? "text-cyan-400" : "text-neutral-200"}`}
            >
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
