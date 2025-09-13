import { SKILLS } from "@/utils/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Skills() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const skillCategories = Object.entries(SKILLS);
  const allSkills = Object.values(SKILLS).flat();

  // Filter skills based on selected category
  const filteredSkills =
    selectedCategory === "All"
      ? allSkills
      : SKILLS[selectedCategory as keyof typeof SKILLS] || [];

  const visibleSkills = isMobile
    ? showAll
      ? filteredSkills
      : filteredSkills.slice(0, 12)
    : filteredSkills;

  // Skill proficiency levels (for visual effect)
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
      className="relative py-12 md:py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.02'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2 md:mb-3">
            Technical Skills
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Proficient in modern web technologies with a focus on the MERN
            stack. Here are the tools and technologies I work with to bring
            ideas to life.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4 md:mb-6 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {["All", ...Object.keys(SKILLS)].map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid - More Compact */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 md:gap-3 px-4"
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
                    className="text-lg md:text-xl mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300"
                    animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {skill.icon}
                  </motion.div>

                  {/* Skill Name */}
                  <span className="text-xs md:text-sm font-medium text-center text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
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
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
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
                  className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-lg -z-10"
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
            className="text-center mt-4 md:mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
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
          className="mt-8 md:mt-12 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-4 md:p-6 border border-blue-200 dark:border-blue-800">
            <motion.h3
              className="text-base md:text-lg font-semibold text-gray-800 dark:text-white mb-2 md:mb-3"
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
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3 md:mb-4">
              I&apos;m always excited to work on new projects and learn new
              technologies. Let&apos;s discuss how we can bring your ideas to
              life with modern web development.
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
              {[
                { label: "Technologies", value: allSkills.length, suffix: "+" },
                {
                  label: "Categories",
                  value: skillCategories.length,
                  suffix: "",
                },
                { label: "Experience", value: "2", suffix: "+ Years" },
                { label: "Projects", value: "10", suffix: "+" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-2 md:p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400"
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
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
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
