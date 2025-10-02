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
  resume: string;
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

export type Filter = {
  label: string;
  value: string;
};

export interface Skills {
  Frontend: Skill[];
  Backend: Skill[];
  Tools: Skill[];
}
