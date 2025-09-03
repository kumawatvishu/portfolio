"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  // Theme load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Scroll active link
  useEffect(() => {
    const handleScroll = () => {
      let current = "Home";
      links.forEach((link) => {
        const section = document.getElementById(link);
        if (section) {
          const sectionTop = section.offsetTop - 90;
          if (window.scrollY >= sectionTop) {
            current = link;
          }
        }
      });
      setActiveLink(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
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

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center h-16 px-4 md:px-8 bg-[#111] dark:bg-gray-900 text-white z-50 shadow-lg">
      {/* Logo */}
      <Link href="#Home">
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={140}
          height={40}
          className="cursor-pointer w-[120px] md:w-[150px]"
          priority
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden space-x-6 md:flex">
        {links.map((link) => (
          <li key={link}>
            <Link
              href={`#${link}`}
              className={`uppercase font-semibold text-[16px] transition-colors duration-200 hover:text-[#E78610] ${
                activeLink === link ? "text-[#E78610]" : "text-gray-300"
              }`}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Theme + Mobile Toggle */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="text-xl text-gray-400 transition-colors duration-200 dark:text-gray-200"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button
          className="text-2xl text-gray-300 md:hidden dark:text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute transition-all duration-300 ease-in-out rounded-lg shadow-lg right-4 top-16 md:hidden bg-gray-50 dark:bg-gray-900"
        >
          <ul className="flex flex-col min-w-[160px] px-4 py-3 space-y-3">
            {links.map((link) => (
              <li key={link}>
                <Link
                  href={`#${link}`}
                  className={`block text-base font-medium transition-colors duration-200 ${
                    activeLink === link
                      ? "text-orange-500"
                      : "text-gray-600 dark:text-gray-200 hover:text-orange-500"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
