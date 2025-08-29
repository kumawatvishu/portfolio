import { SKILLS } from "@/utils/data";
import { motion } from "framer-motion";

export default function Skills({
  prefersDark = false,
}: {
  prefersDark?: boolean;
}) {
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

  return (
    <section
      id="Skills"
      className="max-w-full dark:bg-gray-900 dark:text-white "
    >
      <div className="px-6 py-12 mx-auto ml-28 mr-28">
        <h2 className="mb-6 text-2xl font-bold text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {allSkills.map((skill) => (
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
        </div>
      </div>
    </section>
  );
}

{
  /* <section className="max-w-4xl px-6 py-12 mx-auto">
      <h2 className="mb-6 text-2xl font-bold text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {SKILLS.map((skill, idx) => (
          <motion.span
            key={idx}
            variants={getSkillHover(prefersDark)}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="px-4 py-2 font-medium rounded-full shadow"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section> */
}
