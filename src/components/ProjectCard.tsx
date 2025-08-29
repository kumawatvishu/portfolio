// src/components/ProjectCard.tsx
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const cardHover = {
  rest: { scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" },
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export default function ProjectCard({
  project,
  dark,
  onOpen,
}: {
  project: any;
  dark: boolean;
  onOpen: () => void;
}) {
  return (
    <motion.article
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`relative overflow-hidden shadow rounded-xl bg-gray-200 dark:bg-gray-700 dark:text-gray-50`}
    >
      <button
        onClick={onOpen}
        className="absolute p-2 transition rounded-full shadow top-2 right-2 bg-white/70 hover:scale-105"
        aria-label="Open project"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 8V4h4M20 16v4h-4M4 16v4h4M20 8V4h-4"
          />
        </svg>
      </button>

      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full h-48"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold dark:text-white">{project.title}</h3>
        <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tech.slice(0, 4).map((t: string, i: number) => (
            <span
              key={i}
              className={`px-3 py-1 text-sm rounded-full ${
                dark
                  ? "bg-gray-700 text-gray-100 hover:bg-gray-900"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-400"
              }`}
            >
              {t}
            </span>
          ))}

          {project.tech.length > 4 && (
            <span
              className={`px-3 py-1 text-sm rounded-full ${
                dark
                  ? "bg-gray-700 text-gray-100 hover:bg-gray-900"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-400"
              }`}
            >
              +{project.tech.length - 4}
            </span>
          )}
        </div>
        <div className="flex gap-3">
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
            >
              <FaGithub /> Code
            </a>
          )}
          {project.demo && (
            <button
              onClick={onOpen}
              className="flex items-center gap-1 text-sm text-green-600 hover:underline"
            >
              <FaExternalLinkAlt /> Demo
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
