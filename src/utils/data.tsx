import { ReactNode } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaGithub,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPrisma,
  SiFigma,
  SiWebstorm,
  SiAdobephotoshop,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { Experience, Project } from "@/types";

type Skill = {
  name: string;
  icon: ReactNode;
};

export const PROFILE = {
  name: "Bhanwar lal Kumawat",
  role: "MERN Stack Developer",
  tagline: [
    "Building seamless user experiences and robust backend solutions.",
    "Passionate about creating innovative web applications.",
    "Turning ideas into reality with clean and efficient code.",
  ],
  location: "Bikaner, Rajasthan, India",
  email: "bhanwarlalkumawat846@gmail.com",
  phone: "+91 6376736945",
  whatsapp: "https://wa.me/916376736945",
  github: "https://github.com/kumawatvishu/",
  linkedin: "https://www.linkedin.com/in/bhanwar-lal-kumawat/",
  resume: "/assets/Resume.pdf",
  avatar: "/assets/profile.jpeg",
};

export const SKILLS = {
  Frontend: [
    { name: "JavaScript", icon: <RiJavascriptFill /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Typescript", icon: <BiLogoTypescript /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <FaNodeJs /> },
    { name: "REST APIs", icon: <FaNodeJs /> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ],
  Tools: [
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <VscVscodeInsiders /> },
    { name: "Webstorm", icon: <SiWebstorm /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop /> },
  ],
};

export const PROJECTS: Project[] = [
  {
    title: "HeroUI Blocks",
    description:
      "A Next.js + React template showcasing pre-built UI blocks using HeroUI, TailwindCSS, and Framer Motion. Includes form validation with React Hook Form & Zod, theme support, Google Maps integration, and ready-to-use components for modern web apps.",
    tech: [
      "Next",
      "React",
      "Tailwind",
      "Framer Motion",
      "React Hook Form",
      "Zod",
    ],
    demo: "/assets/heroui-blocks.mp4",
    code: "https://github.com/kumawatvishu/heroui-blocks",
    image: "/assets/heroui-blocks.gif",
  },
  {
    title: "React Multi-Step Form",
    description:
      "A multi-step form built with React where all steps are managed within a single form instance using React Hook Form and Zod validation.",
    tech: ["React", "Express", "Tailwind", "React Hook Form", "Zod"],
    demo: "/assets/react-form.mp4",
    code: "https://github.com/kumawatvishu/react-form",
    image: "/assets/multi-step-form.png",
  },
  {
    title: "Multi Admin Example Backend",
    description:
      "Role-based backend system for a multi-blogging platform with authentication, email, Redis queue, and MongoDB integration.",
    tech: ["Node", "Express", "MongoDB", "Tailwind", "TypeScript"],
    demo: "/assets/multi-admin-backend.png",
    code: "https://github.com/kumawatvishu/multi-admin-example-backend",
    image: "/assets/multi-admin-backend.png",
  },
  {
    title: "Multiblog Admin Example",
    description:
      "Admin dashboard template for managing multiple blogs with forms, API integration, and modern UI components.",
    tech: ["React", "Tailwind", "TypeScript", "Axios"],
    demo: "/assets/multiblog-admin.png",
    code: "https://github.com/kumawatvishu/multiblog-admin-example",
    image: "/assets/multiblog-admin.png",
  },
  {
    title: "OTT Starter Kit",
    description:
      "Frontend starter kit for building OTT platforms with authentication, forms, validation, UI components, and responsive design.",
    tech: ["React", "Next", "Tailwind", "React Hook Form", "Zod", "Axios"],
    demo: "/assets/ott-starter-kit.mp4",
    code: "https://github.com/kumawatvishu/ott-starter-kit",
    image: "/assets/ott-starter-kit.png",
  },
  {
    title: "School Management Systems With Charts",
    description:
      "Comprehensive frontend starter kit for school management systems with charts, forms, QR codes, authentication, and responsive UI components.",
    tech: [
      "React",
      "Next",
      "Tailwind",
      "React Hook Form",
      "Zod",
      "Redux Toolkit",
      "Axios",
    ],
    demo: "/assets/school-kit.mp4",
    code: "https://github.com/kumawatvishu/school-kit",
    image: "/assets/school-kit.jpg",
  },
  {
    title: "School Management System",
    description:
      "Modern school management system built with React, Redux, TailwindCSS, and organizational charts for managing staff and students.",
    tech: [
      "React",
      "Next",
      "Tailwind",
      "Redux Toolkit",
      "React Hook Form",
      "React Router",
    ],
    demo: "/assets/school-Management.mp4",
    code: "https://github.com/kumawatvishu/iwebSchoolManagementSysterm",
    image: "/assets/iWeb.png",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "G-Axon Tech Pvt. Ltd.",
    role: "Mern Stack Developer",
    period: "Mar 2025  – Jun 2025",
    location: "Remote",
    tech: ["React", "Node.js", "MongoDB"],
    bullets: [
      "Built responsive UI components & connected them with APIs.",
      "Optimized performance & UI/UX with team collaboration.",
      "Delivered scalable Mern-stack features on time.",
    ],
  },
  {
    company: "iWebwiser Pvt. Ltd",
    role: "Frontend Developer",
    period: "July 2025 – August 2025",
    bullets: [
      "Built high-performance landing pages & dashboards with 95+ Lighthouse scores.",
      "Developed and optimized multi-step forms with dynamic validation & smooth navigation.",
      "Delivered scalable, maintainable TypeScript/JavaScript code for production use.",
    ],
  },
  {
    company: "Unpod",
    role: "Frontend Developer",
    period: "October 2025 – Present",
    bullets: [
      "Developing scalable UI features for Unpod’s AI-powered voice & chat automation platform.",
      "Building reusable React/Next.js components integrated with Ant Design & Tailwind for consistency.",
      "Collaborating with backend/AI teams to design seamless API integrations & real-time updates.",
      "Improving performance, accessibility & Lighthouse scores across dashboards and landing pages.",
      "Contributing to design system & component library for faster development across multiple apps.",
    ],
  },
];

export const FILTERS = [
  { label: "All", value: "" },
  { label: "React", value: "React" },
  { label: "Next.js", value: "Next" },
  { label: "Node.js", value: "Node" },
  { label: "MongoDB", value: "MongoDB" },
  { label: "Tailwind", value: "Tailwind" },
  { label: "Express", value: "Express" },
];
