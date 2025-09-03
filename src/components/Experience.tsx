import { EXPERIENCE } from "@/utils/data";
import { motion } from "framer-motion";

export default function Experience() {
  // Container Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // Card Variants (zig-zag for all screens)
  const cardVariants = (index: number) => ({
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.85,
      x: index % 2 === 0 ? -40 : 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="max-w-full dark:bg-gray-900 dark:text-white"
    >
      <section
        id="Experience"
        className="max-w-4xl px-6 py-12 mx-auto dark:bg-gray-900"
      >
        <h2 className="mb-6 text-2xl font-bold text-center">Experience</h2>
        <div className="space-y-6">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.company + exp.period}
              variants={cardVariants(index)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              }}
              className="p-6 transition-transform bg-white shadow rounded-xl dark:text-gray-200 dark:bg-gray-600"
            >
              <h3 className="text-lg font-semibold dark:text-white">
                {exp.role} -{" "}
                <span className="text-blue-600 dark:text-orange-500">
                  {exp.company}
                </span>
              </h3>
              <p className="mb-3 text-sm text-gray-500 dark:text-gray-200">
                {exp.period}
              </p>
              <ul className="pl-5 space-y-1 text-sm text-gray-700 list-disc dark:text-gray-200">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
