"use client";

import Typewriter from "typewriter-effect";
import { PROFILE } from "@/utils/data";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaWhatsapp,
  FaCode,
  FaServer,
  FaDatabase,
  FaRocket,
  FaStar,
  FaHeart,
} from "react-icons/fa";
import Image from "next/image";
import Navbar from "./Navbar";
import { BsEye } from "react-icons/bs";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // sirf client par chalega
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize(); // initial set
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // agar windowSize abhi 0 hai to fallback rakho
  const rotateX = useTransform(
    mouseY,
    [0, windowSize.height || 1],
    [10, -10]
  );
  const rotateY = useTransform(
    mouseX,
    [0, windowSize.width || 1],
    [-10, 10]
  );

  return (
    <header
      id="Home"
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Enhanced Floating Tech Icons - Mobile Responsive */}
        <motion.div
          className="absolute top-16 right-4 sm:top-20 sm:right-20 text-blue-400 opacity-20"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <FaCode size={40} className="w-6 h-6 sm:w-10 sm:h-10" />
        </motion.div>
        <motion.div
          className="absolute top-32 left-4 sm:top-40 sm:left-20 text-green-400 opacity-20"
          animate={{
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <FaServer size={35} className="w-5 h-5 sm:w-9 sm:h-9" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-4 sm:bottom-40 sm:right-40 text-purple-400 opacity-20"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <FaDatabase size={45} className="w-7 h-7 sm:w-11 sm:h-11" />
        </motion.div>

        {/* Additional Floating Elements - Mobile Responsive */}
        <motion.div
          className="absolute top-1/3 left-2 sm:left-10 text-yellow-400 opacity-15"
          animate={{
            rotate: 360,
            x: [0, 30, 0],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <FaStar size={25} className="w-4 h-4 sm:w-6 sm:h-6" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-1/4 text-pink-400 opacity-15"
          animate={{
            rotate: -360,
            y: [0, -15, 0],
          }}
          transition={{
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
            y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <FaHeart size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.div>
      </div>

      <Navbar />

      <div className="relative flex flex-col items-center max-w-7xl gap-6 sm:gap-8 md:gap-12 px-4 py-8 sm:py-10 pt-20 sm:pt-24 md:pt-28 mx-auto md:flex-row justify-evenly sm:px-6 z-10">
        <motion.div
          className="font-nunito flex flex-col w-[90%] sm:w-[70%] md:w-1/2 items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced Status Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 dark:from-green-900/30 dark:to-emerald-900/30 dark:text-green-200 mb-6 border border-green-200 dark:border-green-700"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="w-2 h-2 bg-green-500 rounded-full mr-2"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.span>
            <FaRocket className="mr-2 text-xs" />
            Available for Projects
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.h1
            className="m-3 text-4xl font-extrabold sm:m-5 sm:text-5xl lg:text-6xl dark:text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hey, I&apos;m{" "}
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              {PROFILE.name}
            </motion.span>
          </motion.h1>

          {/* Enhanced Role with Animation */}
          <motion.div
            className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="mr-3"
            >
              <FaCode />
            </motion.div>
            {PROFILE.role}
          </motion.div>

          {/* Enhanced Typewriter with Better Styling */}
          <motion.div
            className="mt-2 text-base sm:text-lg dark:text-gray-300 max-w-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Typewriter
              options={{
                strings: PROFILE.tagline,
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </motion.div>

          {/* Enhanced Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8 md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
            <Link
              href={PROFILE.resumeUrl}
              download
                className="flex items-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
                <FaDownload className="mr-3" />
                Download Resume
            </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
            <Link
              href="/assets/Resume.pdf"
                className="flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:border-blue-500 hover:text-blue-500 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 dark:text-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:hover:border-blue-500"
            >
                <BsEye className="mr-3" />
              Preview Resume
            </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            className="flex justify-center gap-8 mt-8 text-3xl text-gray-600 md:justify-start dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.a
              href={PROFILE.linkedin}
              target="_blank"
              className="hover:text-blue-600 transition-all duration-300 p-3 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20"
              whileHover={{ scale: 1.2, y: -3, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href={PROFILE.github}
              target="_blank"
              className="hover:text-gray-800 dark:hover:text-white transition-all duration-300 p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              whileHover={{ scale: 1.2, y: -3, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href={`https://wa.me/${PROFILE.whatsapp}`}
              className="hover:text-green-500 transition-all duration-300 p-3 rounded-full hover:bg-green-50 dark:hover:bg-green-900/20"
              target="_blank"
              whileHover={{ scale: 1.2, y: -3, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaWhatsapp />
            </motion.a>
            <motion.a
              href={`mailto:${PROFILE.email}`}
              className="hover:text-blue-500 transition-all duration-300 p-3 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20"
              whileHover={{ scale: 1.2, y: -3, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Enhanced Profile Image with 3D Effect */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative">
            {/* Enhanced Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-40 scale-110"
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1.1, 1.2, 1.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main Image Container with Enhanced Styling */}
            <div className="relative border-4 border-white dark:border-gray-700 w-48 h-60 sm:w-52 sm:h-64 md:w-60 md:h-72 lg:w-72 lg:h-88 xl:w-80 xl:h-96 flex justify-center items-center rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 transform hover:scale-105 transition-transform duration-300">
          <Image
            src={PROFILE.avatar}
            alt={PROFILE.name}
                className="object-cover object-top w-full h-full"
            height={500}
            width={400}
            priority
          />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Enhanced Floating Tech Badges */}
            <motion.div
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-2xl border-2 sm:border-4 border-white dark:border-gray-800"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.1 }}
            >
              <FaCode />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-2xl border-2 sm:border-4 border-white dark:border-gray-800"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              whileHover={{ scale: 1.1 }}
            >
              <FaServer />
            </motion.div>

            <motion.div
              className="absolute top-1/2 -left-10 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-2xl border-4 border-white dark:border-gray-800"
              animate={{
                x: [0, -8, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              whileHover={{ scale: 1.1 }}
            >
              <FaDatabase />
            </motion.div>

            {/* Additional Floating Elements */}
            <motion.div
              className="absolute top-4 -right-12 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-xl border-2 border-white dark:border-gray-800"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <FaStar />
            </motion.div>
          </div>
        </motion.div>
        </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center bg-white/20 backdrop-blur-sm">
          <motion.div
            className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
      </div>
        <motion.p
          className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll Down
        </motion.p>
      </motion.div>
    </header>
  );
}
