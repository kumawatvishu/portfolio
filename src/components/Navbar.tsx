"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    } else {
      document.documentElement.classList.remove("dark");
    }
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
      <a href="#Home">
        <Image
          src={"/assets/logo.png"}
          alt="Logo"
          width={150}
          height={40}
          className="w-[150px] cursor-pointer text-white"
        />
      </a>

      <ul className="hidden space-x-6 md:flex">
        {links.map((link) => (
          <li key={link} className="inline-block m-2.5">
            <a
              href={`#${link}`}
              className="uppercase text-[#adadad] font-semibold text-[18px] hover:text-[#E78610] hover:cursor-pointer font-sans"
            >
              {link}
            </a>
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

      {menuOpen && (
        <ul className="absolute left-0 flex flex-col w-full p-6 space-y-4 top-16 bg-gray-50 dark:bg-gray-900 md:hidden">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="font-semibold text-gray-600 dark:text-gray-200 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
