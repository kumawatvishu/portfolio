import { SKILLS } from "@/utils/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Skills({
  prefersDark = false,
}: {
  prefersDark?: boolean;
}) {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getSkillHover = (dark: boolean) => ({
    rest: {
      scale: 1,
      backgroundColor: dark ? "#f1f5f9" : "#1f2937",
      color: dark ? "#0f172a" : "#f8fafc",
    },
    hover: {
      scale: 1.1,
      backgroundColor: dark ? "#1f2937" : "#0f172a",
      color: dark ? "#ffffff" : "#f8fafc",
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  });

  const allSkills = Object.values(SKILLS).flat();
  const visibleSkills = isMobile
    ? showAll
      ? allSkills
      : allSkills.slice(0, 5)
    : allSkills;

  return (
    <section
      id="Skills"
      className="max-w-full dark:bg-gray-900 dark:text-white"
    >
      <div className="px-6 py-12 mx-auto lg:ml-28 lg:mr-28">
        <h2 className="mb-6 text-2xl font-bold text-center">Skills</h2>

        {/* Skills Grid */}
        <div
          className="
            grid grid-cols-3 gap-3 text-[10px]
            sm:flex sm:flex-wrap sm:justify-center sm:text-base
          "
        >
          {visibleSkills.map((skill) => (
            <motion.span
              key={skill.name}
              variants={getSkillHover(prefersDark)}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="flex items-center gap-2 px-4 py-2 font-medium rounded-full shadow"
            >
              <span className="text-lg">{skill.icon}</span>
              {skill.name}
            </motion.span>
          ))}

          {/* More/Less Button only for mobile */}
          {isMobile && allSkills.length > 5 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center justify-center px-4 py-2 text-white transition bg-blue-600 rounded-full shadow hover:bg-blue-700"
            >
              {showAll ? "Less" : "+ More"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
