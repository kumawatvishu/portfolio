import { Project } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const cardVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const buttonVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.3 },
  },
};

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
  project: Project;
  dark: boolean;
  onOpen: () => void;
}) {
  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      animate="rest"
      viewport={{ once: true }}
      className={`relative overflow-hidden shadow rounded-xl bg-gray-200 dark:bg-gray-700 dark:text-gray-50`}
    >
      {/* Top Button Animation */}
      <motion.button
        variants={buttonVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
      </motion.button>

      <Image
        src={project.image}
        alt={project.title}
        className="object-cover w-full h-48"
        width={500}
        height={500}
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
            <Link
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
            >
              <FaGithub /> Code
            </Link>
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
