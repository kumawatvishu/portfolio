import { SKILLS } from "@/utils/data";
import { motion, useScroll, useTransform } from "framer-motion";
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
import BackgroundAnimation from "./BackgroundAnimation"; // Import the new component

export default function Skills() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  // Removed mousePosition, useScroll, and parallaxOffset as they are handled by BackgroundAnimation

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

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Removed handleMouseMove as it's handled by BackgroundAnimation

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    // Removed window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      // Removed window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const skillCategories = Object.entries(SKILLS);
  const allSkills = Object.values(SKILLS).flat();

  const filteredSkills =
    selectedCategory === "All"
      ? allSkills
      : SKILLS[selectedCategory as keyof typeof SKILLS] || [];

  const visibleSkills = isMobile
    ? showAll
      ? filteredSkills
      : filteredSkills.slice(0, 12)
    : filteredSkills;

  const skillLevels: { [key: string]: number } = {
    JavaScript: 95,
    "React.js": 90,
    "Next.js": 85,
    "Node.js": 88,
    "Express.js": 85,
    MongoDB: 80,
    "Tailwind CSS": 92,
    TypeScript: 75,
    HTML5: 95,
    CSS3: 90,
    "Git & GitHub": 85,
    "VS Code": 90,
    Figma: 70,
    Prisma: 75,
    "REST APIs": 85,
  };

  return (
    <section
      id="Skills"
      className="relative py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <BackgroundAnimation
        opacity={0.15}
        parallaxMultiplier={0.5}
        iconCount={150}
        particleCount={50}
      />{" "}
      {/* Use the new component */}
      {/* Removed Tailwind CSS hack for dynamic color classes as it's now in BackgroundAnimation */}
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          className="mb-8 text-center md:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-3 text-4xl font-extrabold text-transparent text-gray-800 md:text-5xl dark:text-white md:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            My Technical Skills & Expertise
          </h2>
          <p className="max-w-3xl px-4 mx-auto text-lg text-gray-600 md:text-xl dark:text-gray-300">
            A robust toolkit of modern web technologies, honed to build dynamic,
            efficient, and visually stunning applications across the MERN stack.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 px-4 mb-8 md:gap-5 md:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {["All", ...Object.keys(SKILLS)].map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 md:px-6 py-2.5 md:py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300 relative group overflow-hidden shadow-lg ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl transform scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md"
              }`}
              whileHover={{
                scale: 1.07,
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              {category}
              {selectedCategory !== category && (
                <motion.span className="absolute inset-0 transition-opacity duration-200 bg-blue-500 opacity-0 group-hover:opacity-15" />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid - Reverted to previous preferred styling */}
        <motion.div
          className="grid grid-cols-3 gap-2 px-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 md:gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {visibleSkills.map((skill, index) => {
            const proficiency = skillLevels[skill.name] || 80;
            const isHovered = hoveredSkill === skill.name;

            return (
              <motion.div
                key={skill.name}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.02,
                }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <motion.div
                  className="flex flex-col items-center p-2 md:p-3 rounded-lg md:rounded-xl border border-gray-200 dark:border-gray-600 transition-all duration-300 cursor-pointer group-hover:border-blue-500 group-hover:shadow-lg bg-white dark:bg-gray-800 h-full min-h-[70px] md:min-h-[80px]"
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    boxShadow: "0 8px 20px rgba(59, 130, 246, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Skill Icon */}
                  <motion.div
                    className="mb-1 text-lg transition-transform duration-300 md:text-xl md:mb-2 group-hover:scale-110"
                    animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {skill.icon}
                  </motion.div>

                  {/* Skill Name */}
                  <span className="text-xs font-medium leading-tight text-center text-gray-700 transition-colors duration-300 md:text-sm dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {skill.name}
                  </span>

                  {/* Progress Bar (appears on hover) */}
                  <motion.div
                    className="w-full mt-1 h-0.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      height: isHovered ? 2 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: isHovered ? `${proficiency}%` : 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </motion.div>

                  {/* Proficiency Percentage (appears on hover) */}
                  <motion.span
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {proficiency}%
                  </motion.span>
                </motion.div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 md:rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 group-hover:opacity-20 blur-lg -z-10"
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                    opacity: isHovered ? 0.2 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Show More/Less Button */}
        {isMobile && filteredSkills.length > 12 && (
          <motion.div
            className="mt-4 text-center md:mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="px-4 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-full shadow-lg md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll
                ? "Show Less"
                : `Show More (${filteredSkills.length - 12} more)`}
            </motion.button>
          </motion.div>
        )}

        {/* Skills Summary with Animation */}
        <motion.div
          className="px-4 mt-8 text-center md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="p-4 border border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl md:p-6 dark:border-blue-800">
            <motion.h3
              className="mb-2 text-base font-semibold text-gray-800 md:text-lg dark:text-white md:mb-3"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              🚀 Ready to Build Something Amazing?
            </motion.h3>
            <p className="mb-3 text-sm text-gray-600 md:text-base dark:text-gray-300 md:mb-4">
              I&apos;m always excited to work on new projects and learn new
              technologies. Let&apos;s discuss how we can bring your ideas to
              life with modern web development.
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
              {[
                { label: "Technologies", value: allSkills.length, suffix: "+" },
                {
                  label: "Categories",
                  value: skillCategories.length,
                  suffix: "",
                },
                { label: "Experience", value: "8", suffix: "+ Months" },
                { label: "Projects", value: "10", suffix: "+" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-2 text-center rounded-lg md:p-3 bg-white/50 dark:bg-gray-800/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="text-lg font-bold text-blue-600 md:text-xl dark:text-blue-400"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    {stat.value}
                    {stat.suffix}
                  </motion.div>
                  <div className="text-xs text-gray-600 md:text-sm dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
