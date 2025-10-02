import { PROFILE } from "@/utils/data";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import BackgroundAnimation from "./BackgroundAnimation"; // Import the new component

export default function Footer() {
  return (
    <motion.footer
      className="relative py-4 text-gray-700 bg-gradient-to-br from-gray-50 to-indigo-100 dark:from-gray-900 dark:to-gray-950 dark:text-gray-300 shadow-inner-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Use the new BackgroundAnimation component */}
      <BackgroundAnimation
        opacity={0.08}
        iconCount={50}
        particleCount={20}
        parallaxMultiplier={0.2}
      />

      <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl gap-4 mx-auto">
        <motion.p
          className="text-lg font-extrabold tracking-wide text-transparent sm:text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            type: "spring",
            stiffness: 120,
          }}
          viewport={{ once: true }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            transition: {
              // Nested transition for backgroundPosition animation
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          style={{ backgroundSize: "200% 100%" }}
          // Removed the problematic second transition prop
        >
          © {new Date().getFullYear()} {PROFILE.name} • All Rights Reserved
        </motion.p>

        <div className="flex items-center gap-6 sm:gap-8">
          <motion.a
            href={PROFILE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center overflow-hidden text-green-500 transition-all duration-300 bg-white border border-gray-200 rounded-full shadow-xl w-14 h-14 dark:bg-gray-800 hover:text-green-400 group dark:border-gray-700"
            whileHover={{
              scale: 1.25,
              rotate: 20,
              boxShadow: "0 10px 30px rgba(34, 197, 94, 0.5)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FaWhatsapp className="z-10 text-3xl" />
            <motion.div className="absolute inset-0 transition-opacity duration-300 bg-green-500 rounded-full opacity-0 group-hover:opacity-30 blur-sm" />
            {/* Ripple effect on click */}
            <motion.span
              className="absolute w-full h-full bg-green-500 rounded-full opacity-0"
              whileTap={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>

          <motion.a
            href={`tel:${PROFILE.phone}`}
            className="relative flex items-center justify-center overflow-hidden text-blue-500 transition-all duration-300 bg-white border border-gray-200 rounded-full shadow-xl w-14 h-14 dark:bg-gray-800 hover:text-blue-400 group dark:border-gray-700"
            whileHover={{
              scale: 1.25,
              rotate: -20,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FaPhoneAlt className="z-10 text-3xl" />
            <motion.div className="absolute inset-0 transition-opacity duration-300 bg-blue-500 rounded-full opacity-0 group-hover:opacity-30 blur-sm" />
            {/* Ripple effect on click */}
            <motion.span
              className="absolute w-full h-full bg-blue-500 rounded-full opacity-0"
              whileTap={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>

          <motion.a
            href={`mailto:${PROFILE.email}`}
            className="relative flex items-center justify-center overflow-hidden text-red-500 transition-all duration-300 bg-white border border-gray-200 rounded-full shadow-xl w-14 h-14 dark:bg-gray-800 hover:text-red-400 group dark:border-gray-700"
            whileHover={{
              scale: 1.25,
              rotate: 10,
              boxShadow: "0 10px 30px rgba(239, 68, 68, 0.5)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope className="z-10 text-3xl" />
            <motion.div className="absolute inset-0 transition-opacity duration-300 bg-red-500 rounded-full opacity-0 group-hover:opacity-30 blur-sm" />
            {/* Ripple effect on click */}
            <motion.span
              className="absolute w-full h-full bg-red-500 rounded-full opacity-0"
              whileTap={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
