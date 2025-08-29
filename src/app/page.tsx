"use client";

import FadeIn from "@/components/FadeIn";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FloatingEmail from "@/components/FloatingEmail";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import ScrollTop from "@/components/ScrollTop";
import Skills from "@/components/Skills";
import { useEffect, useState } from "react";

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <FadeIn>
      <Header />
      <About />
      <Skills prefersDark={darkMode} />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <FloatingEmail />
      <ScrollTop />
    </FadeIn>
  );
}
