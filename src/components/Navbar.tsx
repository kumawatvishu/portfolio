"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle"; // Import the new ThemeToggle component

export default function Navbar() {
  // Removed darkMode and toggleTheme state/functions as they are now in ThemeToggle
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  useEffect(() => {
    // Removed theme initialization logic as it's now in ThemeToggle
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      let current = "Home";
      links.forEach((link) => {
        const section = document.getElementById(link);
        if (section) {
          const sectionTop = section.offsetTop - 70; // Use the same offset as handleLinkClick
          const sectionBottom = sectionTop + section.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            current = link;
          }
        }
      });
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Removed toggleTheme as it's now in ThemeToggle

  const handleLinkClick = (link: string) => {
    setMenuOpen(false);
    const element = document.getElementById(link);
    if (element) {
      const offsetTop = element.offsetTop - 70; // Adjusted offset for better scroll alignment
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center h-16 sm:h-18 px-4 sm:px-6 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Enhanced Logo with Better Design */}
      <motion.div
        whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href="#Home"
          className="flex items-center"
          onClick={() => handleLinkClick("Home")}
        >
          <div className="relative group">
            {/* Logo Container with Compact Design */}
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1.5 rounded-lg shadow-md">
              <div className="bg-white dark:bg-gray-900 p-1.5 rounded-md">
                <div className="flex items-center space-x-2">
                  {/* Custom Logo Icon - Compact */}
                  <div className="relative">
                    <div className="flex items-center justify-center rounded-lg shadow-sm w-7 h-7 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                      <FaCode className="text-sm text-white" />
                    </div>
                    {/* Small decorative dot */}
                    <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  {/* Logo Text - Compact */}
                  <div className="relative">
                    <motion.div
                      className="text-base font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{ backgroundSize: "200% 100%" }}
                    >
                      Bhanwar
                    </motion.div>
                    {/* Subtle underline */}
                    <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-50"></div>
                  </div>
                </div>
              </div>

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 opacity-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl group-hover:opacity-100"
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
              />
            </div>

            {/* Floating Tech Icons - Compact */}
            <motion.div
              className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full shadow-md opacity-0 -top-1 -right-1 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:opacity-100"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 360, 0],
                y: [0, -2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
              }}
            >
              <span className="text-xs">⚡</span>
            </motion.div>

            {/* Glow Effect */}
            {scrolled && (
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-sm -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
        </Link>
      </motion.div>

      {/* Desktop Menu */}
      <ul className="hidden space-x-6 lg:space-x-8 md:flex">
        {links.map((link, index) => (
          <motion.li
            key={link}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.button
              onClick={() => handleLinkClick(link)}
              className={`relative uppercase font-semibold text-sm lg:text-base py-2 px-3 rounded-full transition-all duration-300 group hover:scale-105 ${
                // Added group for hover effects
                activeLink === link
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              // Removed whileHover and whileTap to resolve linter error
            >
              {link}
              {activeLink === link && (
                <motion.div
                  className="absolute inset-0 rounded-full -z-10 bg-gradient-to-r from-blue-500 to-purple-500"
                  layoutId="activeTab"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              {/* Subtle hover effect for non-active links */}
              {activeLink !== link && (
                <motion.span className="absolute inset-0 transition-opacity duration-200 bg-blue-500 rounded-full opacity-0 group-hover:opacity-10" />
              )}
            </motion.button>
          </motion.li>
        ))}
      </ul>

      {/* Theme Toggle + Mobile Menu Button */}
      <div className="flex items-center space-x-4">
        {/* Use the new ThemeToggle component */}
        <ThemeToggle />

        {/* Mobile Menu Button */}
        <motion.button
          className="p-2 text-2xl text-gray-700 transition-colors duration-200 rounded-lg dark:text-gray-300 md:hidden hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaTimes />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaBars />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Enhanced Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            className="absolute w-64 mt-2 overflow-hidden border border-gray-200 top-full right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-3xl dark:border-gray-700 md:hidden"
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="p-4">
              <div className="space-y-2">
                {links.map((link, index) => (
                  <motion.div
                    key={link}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: index * 0.05,
                    }}
                  >
                    <motion.button
                      onClick={() => handleLinkClick(link)}
                      className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 group relative overflow-hidden ${
                        activeLink === link
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {link}
                      {activeLink !== link && (
                        <motion.span className="absolute inset-0 transition-opacity duration-200 bg-blue-500 opacity-0 group-hover:opacity-10" />
                      )}
                    </motion.button>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Theme Toggle */}
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between px-4">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Dark Mode
                  </span>
                  <ThemeToggle /> {/* Use the new ThemeToggle component */}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
