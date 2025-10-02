import { PROFILE } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import {
  FaCode,
  FaRocket,
  FaHeart,
  FaDatabase,
  FaServer,
  FaReact,
  FaArrowRight,
  FaLightbulb,
  FaUsers,
  FaChartLine,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaNpm,
  FaDocker,
  FaLinux,
  FaTerminal,
  FaDownload,
  FaCheckCircle,
  FaMobileAlt,
  FaShieldAlt,
  FaPalette,
  FaExchangeAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useScroll, useTransform } from "framer-motion";
import BackgroundAnimation from "./BackgroundAnimation"; // Import the new component

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  // Removed useScroll and parallaxOffset as they will be handled by BackgroundAnimation

  const [text] = useTypewriter({
    words: ["About Me"],
    loop: 1,
    typeSpeed: 70,
    delaySpeed: 1000,
  });

  // Define a palette of vibrant, tech-themed colors
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
    "dark:text-green-300",
    "dark:text-red-300",
    "dark:text-indigo-300",
    "dark:text-yellow-300",
    "dark:text-teal-300",
    "dark:text-pink-300",
  ];

  // Parent container variants for stagger animation
  const textContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Children variants (slide from top)
  const textItem: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring", // Changed to spring for a bouncy effect
        damping: 10, // Adjust damping for more or less bounce
        stiffness: 100, // Adjust stiffness for speed
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="About"
      className="relative py-16 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900"
    >
      <BackgroundAnimation opacity={0.1} parallaxMultiplier={0.3} />{" "}
      {/* Use the new component */}
      {/* Removed Tailwind CSS hack for dynamic color classes as it's now in BackgroundAnimation */}
      <div className="relative z-10 max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Small Profile Photo */}
          <motion.div
            className="mb-8"
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="relative overflow-hidden border-4 border-white rounded-full shadow-2xl dark:border-gray-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={PROFILE.avatar}
                  alt="about"
                  className="object-cover object-top w-32 h-32 sm:w-40 sm:h-40"
                  width={160}
                  height={160}
                />
                {/* Glowing Effect */}
                <motion.div
                  className="absolute inset-0 border-4 border-blue-500 rounded-full opacity-0"
                  animate={{
                    opacity: [0, 0.3, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Small Floating Badge */}
              <motion.div
                className="absolute px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full shadow-lg -top-2 -right-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                MERN
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full max-w-4xl"
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative p-6 overflow-hidden border border-gray-200 shadow-xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl md:p-8 dark:border-gray-700">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-500 rounded-full"
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random(),
                      repeat: Infinity,
                      delay: Math.random() * 3,
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              <motion.h1
                variants={textItem}
                className="relative z-10 mb-6 text-3xl font-extrabold text-transparent md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 100%",
                }}
              >
                {text}
                <Cursor />
              </motion.h1>

              {/* About Content */}
              <motion.div
                variants={textItem}
                className="relative z-10 space-y-6"
              >
                <motion.p
                  className="text-base leading-relaxed text-gray-700 md:text-lg dark:text-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Hello, I&apos;m{" "}
                  <span className="font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                    {PROFILE.name}
                  </span>
                  , a passionate MERN stack developer with expertise in building
                  modern, scalable web applications. I specialize in creating
                  seamless user experiences and robust backend solutions using
                  cutting-edge technologies.
                </motion.p>

                <motion.p
                  className="text-base leading-relaxed text-gray-700 md:text-lg dark:text-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  With a strong foundation in JavaScript and modern web
                  technologies, I love turning complex problems into simple,
                  beautiful, and intuitive solutions. I&apos;m always eager to
                  learn new technologies and take on challenging projects that
                  push the boundaries of what&apos;s possible.
                </motion.p>

                {/* MERN Stack Highlights */}
                <div className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-4">
                  {[
                    {
                      icon: <FaReact />,
                      text: "React & Next.js",
                      color: "text-blue-500",
                      bg: "bg-blue-50 dark:bg-blue-900/20",
                    },
                    {
                      icon: <FaServer />,
                      text: "Node.js & Express",
                      color: "text-green-500",
                      bg: "bg-green-50 dark:bg-green-900/20",
                    },
                    {
                      icon: <FaDatabase />,
                      text: "MongoDB",
                      color: "text-green-600",
                      bg: "bg-green-50 dark:bg-green-900/20",
                    },
                    {
                      icon: <FaCode />,
                      text: "Clean Code",
                      color: "text-purple-500",
                      bg: "bg-purple-50 dark:bg-purple-900/20",
                    },
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      className={`text-center p-4 ${skill.bg} rounded-xl border border-gray-200 dark:border-gray-600`}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                      }}
                      transition={{ duration: 0.2 }}
                      onHoverStart={() => setHoveredSkill(index)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      <motion.div
                        className={`text-2xl mb-2 ${skill.color}`}
                        animate={
                          hoveredSkill === index
                            ? {
                                rotate: [0, -10, 10, 0],
                                scale: [1, 1.1, 1],
                              }
                            : {}
                        }
                        transition={{ duration: 0.5 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {skill.text}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Key Strengths */}
                <div className="mt-8">
                  <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    What I Bring to the Table:
                  </h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {[
                      {
                        icon: <FaRocket />,
                        text: "Full-stack development with MERN stack",
                      },
                      {
                        icon: <FaChartLine />,
                        text: "Performance optimization & SEO",
                      },
                      {
                        icon: <FaMobileAlt />,
                        text: "Responsive & mobile-first design",
                      },
                      {
                        icon: <FaShieldAlt />,
                        text: "Secure authentication & data handling",
                      },
                      {
                        icon: <FaPalette />,
                        text: "Modern UI/UX with Tailwind CSS",
                      },
                      {
                        icon: <FaExchangeAlt />,
                        text: "RESTful APIs & database design",
                      },
                    ].map((strength, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center p-3 text-sm text-gray-600 transition-colors duration-300 rounded-lg md:text-base dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <span
                          className={`mr-3 text-lg ${
                            vibrantColors[index % vibrantColors.length]
                          }`}
                        >
                          {strength.icon}
                        </span>
                        <span>{strength.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Call to Action Buttons */}
              <motion.div
                variants={textItem}
                className="relative z-10 flex flex-col justify-center gap-4 mt-8 sm:flex-row"
              >
                <motion.a
                  href="#Contact"
                  className="flex items-center justify-center px-6 py-3 text-base font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaRocket className="mr-2" />
                  Let&apos;s Work Together
                  <FaArrowRight className="ml-2 text-xs" />
                </motion.a>
                <motion.a
                  href="#Projects"
                  className="flex items-center justify-center px-6 py-3 text-base font-semibold text-blue-600 transition-all duration-300 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaCode className="mr-2" />
                  View My Work
                </motion.a>
                {/* Download Resume Button */}
                <motion.a
                  href={PROFILE.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 text-base font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload className="mr-2" />
                  Download Resume
                  <motion.span
                    className="ml-2 text-xs"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
