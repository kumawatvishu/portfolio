"use client";
import { useEffect, useMemo, useState } from "react";
import { FILTERS, PROJECTS } from "@/utils/data";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Project, Filter } from "@/types";
import { motion } from "framer-motion";

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

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const inputVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="Projects"
      className="min-h-screen px-6 py-12 text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white"
    >
      <h2 className="mb-6 text-2xl font-bold text-center">Projects</h2>

      {/* Search Input Animation */}
      <motion.div
        className="max-w-lg mx-auto mb-6"
        variants={inputVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
        />
      </motion.div>

      {/* Filter Buttons Animation */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {FILTERS.map((f) => (
          <motion.button
            key={f}
            variants={itemVariants}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
              }`}
          >
            {f}
          </motion.button>
        ))}
      </motion.div>

      {/* Project Cards Animation */}
      <motion.div
        className="grid max-w-6xl gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
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

      <ProjectModal
        project={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
        dark={dark}
      />
    </section>
  );
}
