"use client";

import { useEffect, useState } from "react";
import { PROJECTS } from "@/utils/data";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";
import { Project } from "@/types";

const FILTERS = [
  { label: "All", value: "" },
  { label: "React", value: "React" },
  { label: "Next.js", value: "Next" },
  { label: "Node.js", value: "Node" },
  { label: "MongoDB", value: "MongoDB" },
  { label: "Tailwind", value: "Tailwind" },
  { label: "Express", value: "Express" },
];

export default function Projects() {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>(""); // filter value
  const [selected, setSelected] = useState<Project | null>(null);
  const [dark, setDark] = useState(false);

  // Detect Dark Mode
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

  // Filtered Projects
  const filtered = PROJECTS.filter((p) => {
    const term = search.toLowerCase();
    const matchesSearch =
      p.title.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term) ||
      p.tech.some((t) => t.toLowerCase().includes(term));

    const matchesFilter = filter === "" || p.tech.includes(filter);

    return matchesSearch && matchesFilter;
  });

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="Projects"
      className="min-h-screen px-4 py-10 text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white"
    >
      <h2 className="mb-6 text-2xl font-bold text-center sm:text-3xl">
        Projects
      </h2>

      {/* Search Input */}
      <motion.div
        className="max-w-lg mx-auto mb-6"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
      >
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
        />
      </motion.div>

      {/* Filter Buttons */}
      <motion.div className="flex flex-wrap justify-center gap-2 mb-6">
        {FILTERS.map((f) => (
          <motion.button
            key={f.label}
            onClick={() => setFilter(f.value)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filter === f.value
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
            }`}
          >
            {f.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Project Cards */}
      <motion.div className="grid max-w-6xl grid-cols-1 gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <motion.div key={project.title} variants={itemVariants}>
            <ProjectCard
              project={project}
              dark={dark}
              onOpen={() => setSelected(project)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        project={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
        dark={dark}
      />
    </section>
  );
}
