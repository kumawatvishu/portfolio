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
import { Experience, Filter, Project } from "@/types";

type Skill = {
  name: string;
  icon: ReactNode;
};

export const PROFILE = {
  name: "Bhanwar Kumawat",
  role: "Mern Stack Developer",
  tagline: [
    " A JavaScript enthusiast, I craft seamless user experiences and  efficient server-side solutions. Explore my work to see how I can help turn your ideas into powerful, functional web applications.",
    "Building clean, scalable web apps with React, Next.js & MongoDB.",
    "Freelance & Full-time Developer",
    "React • Next.js • Node • MongoDB",
  ],
  location: "Bikaner, Rajasthan",
  email: "bhanwarlalkumawat846@gmail.com",
  phone: "916376736945",
  whatsapp: "916376736945",
  github: "https://github.com/kumawatvishu",
  linkedin: "https://www.linkedin.com/in/bhanwar-lal-878b08375/",
  resumeUrl: "/assets/Resume.jpg",
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
      "A Next.js 15 + React 18 template showcasing pre-built UI blocks using HeroUI, TailwindCSS, and Framer Motion. Includes form validation with React Hook Form & Zod, theme support, Google Maps integration, and ready-to-use components for modern web apps.",
    tech: [
      "Next.js 15",
      "React 18",
      "HeroUI",
      "TailwindCSS",
      "Framer Motion",
      "React Hook Form",
      "Zod",
      "React Icons",
      "Swiper",
      "Google Maps API",
    ],
    demo: "/assets/heroui-blocks.mp4",
    code: "https://github.com/kumawatvishu/heroui-blocks",
    image: "/assets/heroui-blocks.gif",
  },
  {
    title: "React Multi-Step Form",
    description:
      "A multi-step form built with React where all steps are managed within a single form instance using React Hook Form and Zod validation. Includes error handling, reusable UI components, and modern styling.",
    tech: [
      "React",
      "TypeScript",
      "Express.js",
      "React Hook Form",
      "React Toastify",
      "CSS",
      "Bootstrap",
    ],
    demo: "/assets/react-form.mp4",
    code: "https://github.com/kumawatvishu/react-form",
    image: "/assets/multi-step-form.png",
  },
  {
    title: "Multi Admin Example Backend",
    description:
      "Role-based backend system for a multi-blogging platform with authentication, email, Redis queue, and MongoDB integration.",
    tech: [
      "Node.js",
      "Express",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Redis",
      "BullMQ",
      "Nodemailer",
      "Bcrypt",
      "Dotenv",
    ],
    demo: "/assets/multi-admin-backend.png",
    code: "https://github.com/kumawatvishu/multi-admin-example-backend",
    image: "/assets/multi-admin-backend.png",
  },
  {
    title: "Multiblog Admin Example",
    description:
      "Admin dashboard template for managing multiple blogs with forms, API integration, and modern UI components.",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "TailwindCSS",
      "Radix UI",
      "Lucide React",
      "React Router",
      "React Hook Form",
      "TanStack Query",
      "Axios",
    ],
    demo: "/assets/multiblog-admin.png",
    code: "https://github.com/kumawatvishu/multiblog-admin-example",
    image: "/assets/multiblog-admin.png",
  },
  {
    title: "OTT Starter Kit",
    description:
      "Frontend starter kit for building OTT platforms with authentication, forms, validation, UI components, and responsive design.",
    tech: [
      "React",
      "React Router",
      "Vite",
      "TailwindCSS",
      "NextUI",
      "React Hook Form",
      "Zod",
      "Axios",
      "Framer Motion",
    ],
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
      "Vite",
      "TailwindCSS",
      "HeroUI",
      "NextUI",
      "React Router",
      "Redux Toolkit",
      "React Hook Form",
      "Zod",
      "Axios",
      "Framer Motion",
      "Chart.js",
      "React-Chartjs-2",
      "QR Code",
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
      "Vite",
      "TailwindCSS",
      "Redux Toolkit",
      "React Router",
      "React Hook Form",
      "React Icons",
      "React Toastify",
      "Reactstrap",
      "React Organizational Chart",
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
    period: "Mar 2025  – Presen",
    location: "Remote",
    tech: ["React", "Node.js", "MongoDB"],
    bullets: [
      "Built responsive UI components & connected them with APIs.",
      "Optimized performance & UI/UX with team collaboration.",
      "Delivered scalable Mern-stack features on time.",
    ],
  },
  {
    company: "Freelance",
    role: "Mern Stack Developer",
    period: "2025t",
    bullets: [
      "Developed pixel-perfect landing pages & dashboards.",
      "Boosted performance (95+ Lighthouse scores).",
      "Delivered clean, maintainable TypeScript/JavaScript code.",
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
];

export const FILTERS: Filter[] = [
  "All",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Tailwind",
  "Full Stack",
];

export const cardHover = {
  rest: { scale: 1, rotate: 0, boxShadow: "0 0 0 rgba(0,0,0,0)" },
  hover: {
    scale: 1.05,
    rotate: 1,
    boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};
