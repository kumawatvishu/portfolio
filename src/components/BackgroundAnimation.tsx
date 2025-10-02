"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaNpm,
  FaDocker,
  FaLinux,
  FaTerminal,
  FaStar,
  FaMicrochip,
  FaPuzzlePiece,
  FaCloud,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiGraphql,
  SiRedux,
} from "react-icons/si";

interface BackgroundAnimationProps {
  opacity?: number;
  iconCount?: number;
  particleCount?: number;
  parallaxMultiplier?: number;
}

const vibrantColors = [
  "text-blue-500",
  "text-purple-500",
  "text-green-500",
  "text-red-500",
  "text-indigo-500",
  "text-yellow-500",
  "text-teal-500",
  "text-pink-500",
  "dark:text-blue-300",
  "dark:text-purple-300",
  "dark:text-green-600",
  "dark:text-red-300",
  "dark:text-indigo-300",
  "dark:text-yellow-300",
  "dark:text-teal-300",
  "dark:text-pink-300",
];

const programmingSymbols = [
  "{",
  "}",
  "<",
  ">",
  "/",
  "#",
  ";",
  "=",
  "&",
  "|",
  "[",
  "]",
  "~",
  "^",
  "!",
  "?",
  "$",
  "%",
  "*",
  "-",
  "+",
];

const techIcons = [
  <FaCode key="FaCode" />,
  <FaReact key="FaReact" />,
  <FaServer key="FaServer" />,
  <FaDatabase key="FaDatabase" />,
  <FaJs key="FaJs" />,
  <FaNodeJs key="FaNodeJs" />,
  <SiMongodb key="SiMongodb" />,
  <SiExpress key="SiExpress" />,
  <SiNextdotjs key="SiNextdotjs" />,
  <SiTailwindcss key="SiTailwindcss" />,
  <SiTypescript key="SiTypescript" />,
  <FaGitAlt key="FaGitAlt" />,
  <FaHtml5 key="FaHtml5" />,
  <FaCss3Alt key="FaCss3Alt" />,
  <FaNpm key="FaNpm" />,
  <FaDocker key="FaDocker" />,
  <FaLinux key="FaLinux" />,
  <FaTerminal key="FaTerminal" />,
  <FaStar key="FaStar" />,
  <FaMicrochip key="FaMicrochip" />,
  <FaPuzzlePiece key="FaPuzzlePiece" />,
  <FaCloud key="FaCloud" />,
  <SiGraphql key="SiGraphql" />,
  <SiRedux key="SiRedux" />,
];

export default function BackgroundAnimation({
  opacity = 0.1,
  iconCount = 50, // Re-apply aggressive icon count
  particleCount = 50,
  parallaxMultiplier = 0.8, // Temporarily remove parallax effect
}: BackgroundAnimationProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const parallaxOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -200 * parallaxMultiplier]
  );

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div className="absolute inset-0 z-0" style={{ y: parallaxOffset }}>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.1 }} // Force full opacity for debugging
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }} // Force full opacity for debugging
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        {[...Array(iconCount)].map((_, i) => {
          const randomVal = Math.random(); // Re-introduce randomVal
          let content;
          let fontSizeClass = "text-3xl"; // Force giant font size for debugging
          let colorClass =
            vibrantColors[Math.floor(Math.random() * vibrantColors.length)];

          if (randomVal < 0.7) {
            content =
              programmingSymbols[
                Math.floor(Math.random() * programmingSymbols.length)
              ];
          } else {
            const TechIconComponent =
              techIcons[Math.floor(Math.random() * techIcons.length)];
            content = TechIconComponent; // Render the component directly
          }

          const duration = 10 + Math.random() * 15; // Increased duration for smoother, slower animation
          const delay = Math.random() * 15; // Adjusted delay for more continuous appearance
          const startY = Math.random() * 100; // Constrain startY to visible range
          const endY = Math.random() * 100; // Constrain endY to visible range
          const startX = Math.random() * 100;
          const endX = startX + (Math.random() - 0.5) * 120; // Increased horizontal movement

          const iconParallaxX = useTransform(
            scrollYProgress,
            [0, 1],
            [0, (Math.random() - 0.5) * 250 * parallaxMultiplier] // Increased parallax effect
          );
          const iconParallaxY = useTransform(
            scrollYProgress,
            [0, 1],
            [0, (Math.random() - 0.5) * 250 * parallaxMultiplier] // Increased parallax effect
          );

          return (
            <motion.span
              key={i} // Ensure unique key for each icon
              className={`absolute font-mono ${colorClass} ${fontSizeClass}`}
              style={{
                left: `${startX}%`,
                top: `${startY}%`,
                x: iconParallaxX,
                y: iconParallaxY,
                opacity: 1, // Force full opacity for debugging
              }}
              animate={{
                y: [startY, endY],
                x: [startX, endX],
                rotate: [0, Math.random() * 360 * 1.5, 0],
                opacity: [1, 1, 1], // Keep full opacity during animation
                scale: [0.7, 1.1, 0.7],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
                repeatDelay: Math.random() * 4,
              }}
            >
              {content}
            </motion.span>
          );
        })}
      </motion.div>

      {/* Interactive particle effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          x: (mousePosition.x - window.innerWidth / 2) * 0.04,
          y: (mousePosition.y - window.innerHeight / 2) * 0.04,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 25 }}
      >
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-br from-white to-blue-200 rounded-full opacity-60 shadow-md"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.6, 1, 0.6],
              rotate: [0, Math.random() * 360, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
          />
        ))}
      </motion.div>

      {/* Animated Corner Blobs - COMMENTED OUT */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20">
          <motion.div
            className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-600/40 to-purple-600/40 blur-3xl opacity-90"
            animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="absolute -bottom-20 -right-20">
          <motion.div
            className="rounded-full w-72 h-72 bg-gradient-to-tr from-indigo-600/40 to-pink-600/40 blur-3xl opacity-90"
            animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1.1, 0.9, 1.1] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div> */}
    </motion.div>
  );
}
