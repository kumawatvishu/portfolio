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
} from "react-icons/fa";

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

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
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="About"
      className="relative py-16 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Floating Tech Icons */}
        <motion.div
          className="absolute top-10 right-10 text-blue-300 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <FaReact size={30} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-10 text-green-300 opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          <FaServer size={25} />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-20 text-purple-300 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <FaDatabase size={35} />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="relative rounded-full shadow-2xl overflow-hidden border-4 border-white dark:border-gray-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={PROFILE.avatar}
                  alt="about"
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover object-top"
                  width={160}
                  height={160}
                />
                {/* Glowing Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-blue-500 opacity-0"
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
                className="absolute -top-2 -right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg"
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
            <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 relative overflow-hidden">
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
                className="mb-6 text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative z-10"
              >
                About Me
              </motion.h1>

              {/* About Content */}
              <motion.div
                variants={textItem}
                className="relative z-10 space-y-6"
              >
                <motion.p
                  className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Hello, I&apos;m{" "}
                  <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {PROFILE.name}
                  </span>
                  , a passionate MERN stack developer with expertise in building
                  modern, scalable web applications. I specialize in creating
                  seamless user experiences and robust backend solutions using
                  cutting-edge technologies.
                </motion.p>

                <motion.p
                  className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-100"
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
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
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    What I Bring to the Table:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "🚀 Full-stack development with MERN stack",
                      "⚡ Performance optimization & SEO",
                      "📱 Responsive & mobile-first design",
                      "🔒 Secure authentication & data handling",
                      "🎨 Modern UI/UX with Tailwind CSS",
                      "🔄 RESTful APIs & database design",
                    ].map((strength, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center text-sm md:text-base text-gray-600 dark:text-gray-300 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <span className="mr-3">{strength}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Call to Action Buttons */}
              <motion.div
                variants={textItem}
                className="flex flex-col sm:flex-row justify-center gap-4 mt-8 relative z-10"
              >
                <motion.a
                  href="/#Contact"
                  className="flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaRocket className="mr-2" />
                  Let&apos;s Work Together
                  <FaArrowRight className="ml-2 text-xs" />
                </motion.a>
                <motion.a
                  href="#Projects"
                  className="flex items-center justify-center px-6 py-3 text-base font-semibold text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaCode className="mr-2" />
                  View My Work
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
