import { SKILLS } from "@/utils/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Skills({
  prefersDark = false,
}: {
  prefersDark?: boolean;
}) {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size on mount and resize
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const skillVariants = (dark: boolean) => ({
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const }, // FIXED
    },
    rest: {
      scale: 1,
      backgroundColor: dark ? "#f1f5f9" : "#1f2937",
      color: dark ? "#0f172a" : "#f8fafc",
    },
    hover: {
      scale: 1.1,
      backgroundColor: dark ? "#1f2937" : "#0f172a",
      color: dark ? "#ffffff" : "#f8fafc",
      transition: { duration: 0.3, ease: "easeOut" as const }, // FIXED
    },
  });

  const allSkills = Object.values(SKILLS).flat();
  const visibleSkills = isMobile ? allSkills.slice(0, 5) : allSkills;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="Skills"
      className="max-w-full dark:bg-gray-900 dark:text-white"
    >
      <div className="px-6 py-12 mx-auto lg:ml-28 lg:mr-28">
        <h2 className="mb-6 text-2xl font-bold text-center">Skills</h2>

        <motion.div
          className="
            grid grid-cols-3 gap-3 text-[10px]
            sm:flex sm:flex-wrap sm:justify-center sm:text-base
          "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {visibleSkills.map((skill) => (
            <motion.span
              key={skill.name}
              variants={skillVariants(prefersDark)}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              animate="rest"
              className="flex items-center gap-2 px-4 py-2 font-medium rounded-full shadow"
            >
              <span className="text-lg">{skill.icon}</span>
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
