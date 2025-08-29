import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Project } from "@/types";
import Image from "next/image";

export default function ProjectModal({
  project,
  open,
  onClose,
  dark,
}: {
  project: Project;
  open: boolean;
  onClose: () => void;
  dark: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioCtx.createMediaElementSource(video);
    const gainNode = audioCtx.createGain();
    gainNode.gain.value = 0;
    source.connect(gainNode).connect(audioCtx.destination);
  }, [project]);

  if (!project) return null;

  const isVideo = project.demo?.endsWith(".mp4");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={`relative w-full max-w-xl max-h-full p-6 overflow-auto shadow-2xl rounded-xl ${
              dark ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
            }`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className={`absolute p-2 rounded-full shadow top-4 right-4 ${
                dark
                  ? "bg-gray-700 text-gray-100 hover:bg-gray-900"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
              aria-label="Close"
            >
              ✕
            </button>

            {project.demo && (
              <div className="flex flex-col items-center">
                {isVideo ? (
                  <video
                    ref={videoRef}
                    src={project.demo}
                    controls
                    className="w-full max-h-[50vh] mb-4 rounded-lg"
                    loop
                    autoPlay
                    playsInline
                  />
                ) : (
                  <Image
                    src={project.demo}
                    alt={project.title}
                    className="object-contain w-full max-h-[50vh] mb-4 rounded-lg"
                    width={500}
                    height={500}
                  />
                )}
              </div>
            )}

            <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t: string, i: number) => (
                <span
                  key={i}
                  className={`px-3 py-1 text-sm rounded-full ${
                    dark
                      ? "bg-gray-700 text-gray-100"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              {project.code && (
                <Link
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:underline"
                >
                  <FaGithub /> Code
                </Link>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
