"use client";

import { useEffect, useRef, useState } from "react";
import { FILTERS, PROJECTS, type FilterKey } from "./projectsData";
import ProjectCard from "./ProjectCard";
import PreviewPanel from "./PreviewPanel";

// Small delay so quickly sweeping the cursor across cards doesn't thrash the panel.
const HOVER_SELECT_DELAY_MS = 140;

function visibleFor(filter: FilterKey) {
  return PROJECTS.filter(
    (project) => filter === "all" || project.cats.includes(filter),
  );
}

export default function ProjectsExplorer() {
  const [filter, setFilter] = useState<FilterKey>("all");
  // Selection and slide direction live together so a single pure updater
  // can flip the panel animation exactly once per selection change.
  const [panel, setPanel] = useState({ id: PROJECTS[0].id, flip: false });
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const visible = visibleFor(filter);
  const selected =
    visible.find((project) => project.id === panel.id) ??
    visible[0] ??
    PROJECTS[0];

  const clearHoverTimer = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  };

  useEffect(() => () => clearHoverTimer(), []);

  const selectProject = (id: string) => {
    setPanel((prev) => (prev.id === id ? prev : { id, flip: !prev.flip }));
  };

  const handleHoverIn = (id: string) => {
    if (pinnedId) return;
    clearHoverTimer();
    hoverTimer.current = setTimeout(
      () => selectProject(id),
      HOVER_SELECT_DELAY_MS,
    );
  };

  const handleTogglePin = (id: string) => {
    if (pinnedId === id) {
      setPinnedId(null);
      return;
    }
    clearHoverTimer();
    setPinnedId(id);
    selectProject(id);
  };

  const handleFilter = (key: FilterKey) => {
    const nextVisible = visibleFor(key);
    setFilter(key);
    setPanel((prev) => {
      const id = nextVisible.some((project) => project.id === prev.id)
        ? prev.id
        : (nextVisible[0]?.id ?? prev.id);
      return { id, flip: !prev.flip };
    });
  };

  return (
    <>
      <section className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div
          role="group"
          aria-label="Filter projects"
          className="flex flex-wrap gap-2"
        >
          {FILTERS.map(({ key, label }) => {
            const isActive = filter === key;
            return (
              <button
                key={key}
                type="button"
                aria-pressed={isActive}
                onClick={() => handleFilter(key)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 font-[inherit] text-xs transition-all duration-150 ${
                  isActive
                    ? "border-cyan-400 bg-cyan-400 font-bold text-[#0a0a0a]"
                    : "border-[#262626] text-[#8a8a8a] hover:border-cyan-400/50 hover:text-cyan-300"
                }`}
              >
                {key === "all" ? `all (${PROJECTS.length})` : label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] items-start gap-7 px-6 pb-24 pt-7 md:px-12 lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_440px]">
        <div className="projects-cards-in grid gap-[18px] md:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isSelected={project.id === selected.id}
              isPinned={project.id === pinnedId}
              onHoverIn={() => handleHoverIn(project.id)}
              onHoverOut={clearHoverTimer}
              onTogglePin={() => handleTogglePin(project.id)}
            />
          ))}
        </div>

        <aside className="sticky top-24 hidden lg:block">
          <PreviewPanel
            project={selected}
            isPinned={pinnedId === selected.id}
            onUnpin={() => setPinnedId(null)}
            slideFlip={panel.flip}
          />
        </aside>
      </section>
    </>
  );
}
