"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaBars, FaMoon, FaSun, FaX, FaCode } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
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
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      let current = "Home";
      links.forEach((link) => {
        const section = document.getElementById(link);
        if (section) {
          const sectionTop = section.offsetTop - 100;
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
  }, []);

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

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const handleLinkClick = (link: string) => {
    setMenuOpen(false);
    const element = document.getElementById(link);
    if (element) {
      const offsetTop = element.offsetTop - 80;
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
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                    <div className="w-7 h-7 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-sm">
                      <FaCode className="text-white text-sm" />
                    </div>
                    {/* Small decorative dot */}
                    <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  {/* Logo Text - Compact */}
                  <div className="relative">
                    <div className="text-base font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Bhanwar
                    </div>
                    {/* Subtle underline */}
                    <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-50"></div>
                  </div>
                </div>
              </div>

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100"
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
              className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 shadow-md"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0],
                y: [0, -1, 0],
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
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 rounded-lg blur-sm -z-10"
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
            <button
              onClick={() => handleLinkClick(link)}
              className={`relative uppercase font-semibold text-sm lg:text-base transition-all duration-300 hover:text-blue-500 dark:hover:text-blue-400 ${
                activeLink === link
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {link}
              {activeLink === link && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  layoutId="activeTab"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          </motion.li>
        ))}
      </ul>

      {/* Theme Toggle + Mobile Menu Button */}
      <div className="flex items-center space-x-4">
        {/* Enhanced Dark Mode Toggle */}
        <motion.button
          onClick={toggleTheme}
          className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center"
            animate={{
              x: darkMode ? 24 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
          >
            {darkMode ? (
              <FaMoon className="text-blue-600 text-xs" />
            ) : (
              <FaSun className="text-yellow-500 text-xs" />
            )}
          </motion.div>
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          className="text-xl text-gray-700 dark:text-gray-300 md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaX />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
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
            className="absolute top-full right-4 mt-2 w-64 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 md:hidden overflow-hidden"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-4">
              <div className="space-y-2">
                {links.map((link, index) => (
                  <motion.div
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => handleLinkClick(link)}
                      className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeLink === link
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {link}
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Theme Toggle */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between px-4">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Dark Mode
                  </span>
                  <motion.button
                    onClick={toggleTheme}
                    className="relative w-10 h-5 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center"
                      animate={{
                        x: darkMode ? 20 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    >
                      {darkMode ? (
                        <FaMoon className="text-blue-600 text-xs" />
                      ) : (
                        <FaSun className="text-yellow-500 text-xs" />
                      )}
                    </motion.div>
                  </motion.button>
                </div>
              </div>
        </div>
          </motion.div>
      )}
      </AnimatePresence>
    </motion.nav>
  );
}
