"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

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
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Active link by scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "Home";
      links.forEach((link) => {
        const section = document.getElementById(link);
        if (section) {
          const sectionTop = section.offsetTop - 80; // navbar height
          if (window.scrollY >= sectionTop) {
            current = link;
          }
        }
      });
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="fixed w-full flex justify-between items-center bg-[#111] h-16 px-6 z-50">
      <Link href="#Home">
        <Image
          src={"/assets/logo.png"}
          alt="Logo"
          width={150}
          height={40}
          className="w-[150px] cursor-pointer text-white"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden space-x-6 md:flex">
        {links.map((link) => (
          <li key={link} className="inline-block m-2.5">
            <Link
              href={`#${link}`}
              className={`uppercase font-semibold text-[18px] font-sans hover:text-[#E78610] ${
                activeLink === link ? "text-[#E78610]" : "text-[#adadad]"
              }`}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="text-xl text-gray-400 dark:text-gray-200"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button
          className="text-xl text-gray-400 md:hidden dark:text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute left-0 flex flex-col w-full p-6 space-y-4 top-16 bg-gray-50 dark:bg-gray-900 md:hidden">
          {links.map((link) => (
            <li key={link}>
              <Link
                href={`#${link}`}
                className={`font-semibold hover:text-orange-500 ${
                  activeLink === link
                    ? "text-orange-500"
                    : "text-gray-600 dark:text-gray-200"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
