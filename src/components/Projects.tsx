"use client";
import { useEffect, useMemo, useState } from "react";
import { FILTERS, PROJECTS } from "@/utils/data";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Project, Filter } from "@/types";

export default function Projects() {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const filtered = useMemo(() => {
    const t = search.toLowerCase();
    return PROJECTS.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(t) ||
        p.description.toLowerCase().includes(t) ||
        p.tech.some((x) => x.toLowerCase().includes(t));

      const matchesFilter = filter === "All" || p.tech.includes(filter);
      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <section
      id="Projects"
      className="min-h-screen px-6 py-12 text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white"
    >
      <h2 className="mb-6 text-2xl font-bold text-center">Projects</h2>

      <div className="max-w-lg mx-auto mb-6">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid max-w-6xl gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            dark={dark}
            onOpen={() => setSelected(project)}
          />
        ))}
      </div>

      <ProjectModal
        project={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
        dark={dark}
      />
    </section>
  );
}
