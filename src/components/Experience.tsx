import { EXPERIENCE } from "@/utils/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-full dark:bg-gray-900 dark:text-white"
    >
      <section
        id="Experience"
        className="max-w-4xl px-6 py-12 mx-auto dark:bg-gray-900 "
      >
        <h2 className="mb-6 text-2xl font-bold text-center">Experience</h2>
        <div className="space-y-6">
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.company + exp.period}
              className="p-6 bg-white shadow rounded-xl dark:text-gray-200 dark:bg-gray-600"
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
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
