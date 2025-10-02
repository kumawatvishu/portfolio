import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Project } from "@/types";
import Image from "next/image";
import {
  FaCode, // Added back FaCode
  FaGithub, // Added back FaGithub
} from "react-icons/fa";
import BackgroundAnimation from "./BackgroundAnimation"; // Import the new component

const MotionLink = motion(Link); // Create a motion-enabled Link component

export default function ProjectModal({
  project,
  open,
  onClose,
  dark,
}: {
  project: Project | null;
  open: boolean;
  onClose: () => void;
  dark: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Removed vibrantColors as it's now handled by BackgroundAnimation

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
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={`relative w-full max-w-xl p-8 shadow-2xl rounded-2xl transition-all duration-300 ${
              dark ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
            }`}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            style={{}} // Removed maxHeight: "90vh" to allow dynamic sizing
          >
            <BackgroundAnimation
              opacity={0.1}
              iconCount={60}
              particleCount={20}
              parallaxMultiplier={0.2}
            />{" "}
            {/* Use the new component */}
            <motion.button
              onClick={onClose}
              className={`absolute p-3 rounded-full shadow-lg z-10 top-4 right-4 transition-all duration-300 ${
                dark
                  ? "bg-gray-700 text-gray-100 hover:bg-gray-900 border border-gray-600"
                  : "bg-white text-gray-900 hover:bg-gray-100 border border-gray-300"
              }`}
              aria-label="Close"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: open ? 0 : 90 }} // Rotate 'X' on open/close
                transition={{ duration: 0.3 }}
              >
                ✕
              </motion.span>
            </motion.button>
            {project.demo && (
              <div className="relative z-10 flex flex-col items-center mb-6">
                {isVideo ? (
                  <video
                    ref={videoRef}
                    src={project.demo}
                    controls
                    className="w-full h-auto max-h-[60vh] rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                    loop
                    autoPlay
                    playsInline
                  />
                ) : (
                  <Image
                    src={project.demo}
                    alt={project.title}
                    className="object-contain w-full h-auto max-h-[60vh] rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                    width={800} // Increased width for better display
                    height={450} // Adjusted height to maintain aspect ratio with new width
                  />
                )}
              </div>
            )}
            <h3 className="relative z-10 mb-3 text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              {project.title}
            </h3>
            <p className="relative z-10 mb-5 text-lg text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
            <div className="relative z-10 flex flex-wrap gap-2 mt-4">
              {project.tech.map((t: string, i: number) => (
                <span
                  key={i}
                  className={`px-4 py-1.5 text-sm rounded-full font-medium shadow-md transition-all duration-200 ${
                    dark
                      ? "bg-gray-700 text-gray-100 border border-gray-600"
                      : "bg-gray-100 text-gray-900 border border-gray-200"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="relative z-10 flex flex-wrap gap-4 mt-8">
              {project.code && (
                <MotionLink
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-lg" /> View Code
                </MotionLink>
              )}
              {project.demo && project.demo !== project.image && (
                <MotionLink
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 font-semibold text-gray-700 transition-all duration-300 border border-gray-400 rounded-full shadow-md dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-blue-500 hover:text-blue-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaCode className="text-lg" /> Live Demo
                </MotionLink>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
