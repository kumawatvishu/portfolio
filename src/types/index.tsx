import { ReactNode } from "react";

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string[];
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  avatar: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  demo: string;
  code: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  tech?: string[];
  bullets: string[];
}

export type Filter =
  | "All"
  | "React"
  | "Next.js"
  | "Node.js"
  | "Expressjs"
  | "MongoDB"
  | "Tailwind"
  | "Full Stack";

export interface CardHover {
  rest: {
    scale: number;
    rotate: number;
    boxShadow: string;
  };
  hover: {
    scale: number;
    rotate: number;
    boxShadow: string;
    transition: {
      duration: number;
      ease: "easeOut";
    };
  };
}

export interface Skills {
  Frontend: Skill[];
  Backend: Skill[];
  Tools: Skill[];
}
