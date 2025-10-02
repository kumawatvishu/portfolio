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
import BackgroundAnimation from "./BackgroundAnimation"; // Import the new component

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
  const rotateX = useTransform(mouseY, [0, windowSize.height || 1], [10, -10]);
  const rotateY = useTransform(mouseX, [0, windowSize.width || 1], [-10, 10]);

  return (
    <header
      id="Home"
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Use the new BackgroundAnimation component */}
      <BackgroundAnimation
        opacity={0.15} // Reverted to subtle opacity
        iconCount={100}
        particleCount={30}
        parallaxMultiplier={0.8} // Reverted to subtle parallax effect
      />

      <Navbar />

      <div className="relative z-10 flex flex-col items-center gap-6 px-4 py-8 pt-20 mx-auto max-w-7xl sm:gap-8 md:gap-12 sm:py-10 sm:pt-24 md:pt-28 md:flex-row justify-evenly sm:px-6">
        <motion.div
          className="font-nunito flex flex-col w-[90%] sm:w-[70%] md:w-1/2 items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced Status Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-green-800 border border-green-200 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 dark:text-green-200 dark:border-green-700"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="w-2 h-2 mr-2 bg-green-500 rounded-full"
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
            className="m-3 text-4xl font-extrabold leading-tight sm:m-5 sm:text-5xl lg:text-6xl dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hey, I&apos;m{" "}
            <motion.span
              className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text"
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
          <motion.p
            className="max-w-lg p-4 mt-2 text-base border border-gray-200 rounded-lg sm:text-lg dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {PROFILE.role}
          </motion.p>

          {/* Enhanced Typewriter with Better Styling */}
          <motion.div
            className="max-w-lg p-4 mt-2 text-base border border-gray-200 rounded-lg sm:text-lg dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm dark:border-gray-700"
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
            className="flex flex-col justify-center gap-4 mt-8 sm:flex-row md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={PROFILE.resume}
                download
                className="flex items-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 transform shadow-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 hover:shadow-2xl hover:-translate-y-1"
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
                className="flex items-center px-8 py-4 text-base font-semibold text-gray-700 transition-all duration-300 transform bg-white border-2 border-gray-300 shadow-xl rounded-xl hover:border-blue-500 hover:text-blue-500 hover:shadow-2xl hover:-translate-y-1 dark:text-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:hover:border-blue-500"
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
              className="p-3 transition-all duration-300 rounded-full hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              whileHover={{ scale: 1.2, y: -3, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href={PROFILE.github}
              target="_blank"
              className="p-3 transition-all duration-300 rounded-full hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              whileHover={{ scale: 1.2, y: -3, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href={`https://wa.me/${PROFILE.whatsapp}`}
              className="p-3 transition-all duration-300 rounded-full hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20"
              target="_blank"
              whileHover={{ scale: 1.2, y: -3, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaWhatsapp />
            </motion.a>
            <motion.a
              href={`mailto:${PROFILE.email}`}
              className="p-3 transition-all duration-300 rounded-full hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
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
              className="absolute inset-0 scale-110 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-40"
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
            <div className="relative flex items-center justify-center w-48 overflow-hidden transition-transform duration-300 transform bg-white border-4 border-white shadow-2xl dark:border-gray-700 h-60 sm:w-52 sm:h-64 md:w-60 md:h-72 lg:w-72 lg:h-88 xl:w-80 xl:h-96 rounded-3xl dark:bg-gray-800 hover:scale-105">
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
              className="absolute flex items-center justify-center w-12 h-12 text-sm font-bold text-white border-2 border-white rounded-full shadow-2xl -top-4 -right-4 sm:-top-6 sm:-right-6 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 sm:text-lg sm:border-4 dark:border-gray-800"
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
              className="absolute flex items-center justify-center w-12 h-12 text-sm font-bold text-white border-2 border-white rounded-full shadow-2xl -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-green-600 sm:text-lg sm:border-4 dark:border-gray-800"
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
              className="absolute flex items-center justify-center w-12 h-12 text-sm font-bold text-white border-4 border-white rounded-full shadow-2xl top-1/2 -left-10 bg-gradient-to-r from-purple-500 to-purple-600 dark:border-gray-800"
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
              className="absolute flex items-center justify-center w-10 h-10 text-xs font-bold text-white border-2 border-white rounded-full shadow-xl top-4 -right-12 bg-gradient-to-r from-yellow-400 to-orange-500 dark:border-gray-800"
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
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex justify-center w-8 h-12 border-2 border-gray-400 rounded-full bg-white/20 backdrop-blur-sm">
          <motion.div
            className="w-1 h-4 mt-2 rounded-full bg-gradient-to-b from-blue-500 to-purple-500"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <motion.p
          className="mt-2 text-xs text-center text-gray-500 dark:text-gray-400"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll Down
        </motion.p>
      </motion.div>
    </header>
  );
}
