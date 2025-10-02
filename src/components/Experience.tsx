import { EXPERIENCE } from "@/utils/data";
import { motion } from "framer-motion";
// Removed individual icon imports as they are now in BackgroundAnimation
import BackgroundAnimation from "./BackgroundAnimation"; // Import the new component

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

  // Removed vibrantColors as it's now handled by BackgroundAnimation

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
        className="relative py-12 dark:bg-gray-900 md:py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >
        {/* Use the new BackgroundAnimation component */}
        <BackgroundAnimation
          opacity={0.3}
          iconCount={80}
          particleCount={30}
          parallaxMultiplier={0.6}
        />

        {/* Content Wrapper for proper alignment */}
        <div className="relative z-10 max-w-4xl px-6 mx-auto">
          <motion.div
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="mb-3 text-4xl font-extrabold text-transparent md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
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
              My Professional Journey
            </motion.h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 md:text-xl">
              Explore my work history and contributions, highlighting my growth
              and expertise in web development.
            </p>
          </motion.div>
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
        </div>
      </section>
    </motion.div>
  );
}
