export interface Profile {
  name: string;
  tagline: string[];
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resume: string;
}

export interface Project {
  title: string;
  tag: string;
  url: string;
  description: string;
  tech: string[];
}

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface ExperienceRole {
  title: string;
  period: string;
  location?: string;
  bullets: string[];
}

export interface ExperienceEntry {
  company: string;
  period: string;
  blurb: string;
  roles: ExperienceRole[];
}

export interface Capability {
  tag: string;
  title: string;
  description: string;
}

export interface SpotlightMetric {
  value: string;
  label: string;
}

export interface SpotlightItem {
  badge: string;
  title: string;
  description: string;
  metrics: SpotlightMetric[];
  chips: string[];
  url: string;
}

export const PROFILE: Profile = {
  name: "Bhanwar Lal Kumawat",
  tagline: [
    "Frontend Engineer",
    "React.js & Next.js Specialist", 
    "Real-Time UI Architect",
  ],
  location: "Bikaner, Rajasthan, India",
  email: "bhanwarlalkumawat846@gmail.com",
  phone: "+91 6376736945",
  github: "https://github.com/Bhanwarlalkumawat-hub",
  linkedin: "https://www.linkedin.com/in/bhanwar-lal-kumawat/",
  resume: "/assets/Resume.pdf",
};

export const PROJECTS: Project[] = [
  {
    title: "Unpod App",
    tag: "LIVE PRODUCT",
    url: "https://app.unpod.ai",
    description: "The core 'SuperDialog' application — where teams run and monitor live AI voice, WhatsApp, and email agents in real time, powered by a Centrifugo WebSocket layer at <330ms latency.",
    tech: ["Next.js", "TypeScript", "Centrifugo", "Custom CSS"],
  },
  {
    title: "Unpod AI",
    tag: "MARKETING SITE",
    url: "https://unpod.ai",
    description: "Primary marketing and platform site — the first touchpoint where organizations discover Unpod's AI telephony & speech infrastructure and sign up.",
    tech: ["Next.js", "Nx Monorepo", "TypeScript", "Centrifugo", "Ant Design"],
  },
  {
    title: "Unpod Developer Platform",
    tag: "DEVELOPER PORTAL",
    url: "https://unpod.dev",
    description: "Developer-facing portal for the metered telephony + speech infrastructure — docs, API access, and integration/auth flows used daily by developers.",
    tech: ["Next.js", "Nx Monorepo", "TypeScript", "Centrifugo", "Styled Components"],
  },
  {
    title: "Unpod Admin",
    tag: "ADMIN PANEL",
    url: "https://admin.unpod.tv",
    description: "Internal admin/back-office panel giving the team control over organizations, workspaces, and platform-wide settings across the whole product suite.",
    tech: ["React.js", "TypeScript", "Ant Design"],
  },
  {
    title: "Geneffic",
    tag: "AI DISCOVERY",
    url: "https://geneffic.com",
    description: "An AI-first discovery platform helping businesses get found inside ChatGPT, Claude, Gemini & Perplexity — with a live, auto-refreshing conversation feed.",
    tech: ["Next.js 16", "React 19", "Centrifugo"],
  },
  {
    title: "HeroUI Blocks",
    tag: "OPEN LIBRARY",
    url: "https://github.com/Bhanwarlalkumawat-hub",
    description: "A 50+ component open UI kit — accessible, highly customizable primitives built to drop into any Next.js + Tailwind project in minutes.",
    tech: ["Next.js 15", "React 18", "Tailwind CSS"],
  },
  {
    title: "School Management System",
    tag: "FULL-STACK UI",
    url: "https://github.com/Bhanwarlalkumawat-hub",
    description: "Full-featured platform UI for schools — student/teacher management, organizational charts, and QR-code-based attendance, with reusable role-based dashboards.",
    tech: ["React.js", "Reusable Hooks"],
  },
];

export const STATS: Stat[] = [
  { value: 7, label: "Shipped surfaces across every product I've built" },
  { value: 330, prefix: "<", suffix: "ms", label: "Real-time latency on the Centrifugo layer" },
  { value: 50, suffix: "+", label: "Components in my public open-source UI library" },
  { value: 1, label: "Shared Nx monorepo powering the whole suite" },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "ZestGeek Solutions",
    period: "SEP 2025 — PRESENT",
    blurb: "Own frontend architecture across four production platforms in a shared Nx monorepo.",
    roles: [
      {
        title: "Frontend Developer → AI Software Developer",
        period: "SEP 2025 — PRESENT",
        location: "Mohali, Punjab",
        bullets: [
          "Drive frontend architecture across four production platforms in a shared Nx monorepo",
          "Architect a reusable custom React hook system used across the entire suite",
          "Engineer the real-time layer on Centrifugo, own AI agent testing end-to-end",
        ],
      },
    ],
  },
  {
    company: "G-Axon Tech",
    period: "JAN 2025 — AUG 2025",
    blurb: "Shipped scalable, production-ready frontend features integrating REST APIs.",
    roles: [
      {
        title: "Intern",
        period: "JAN 2025 — MAR 2025",
        location: "Bikaner, Rajasthan, India",
        bullets: [
          "Onboarded as a frontend intern, contributing to UI features ahead of a full-time offer",
        ],
      },
      {
        title: "Frontend Developer",
        period: "APR 2025 — AUG 2025",
        bullets: [
          "Shipped scalable, production-ready frontend features integrating REST APIs",
          "Improved UI/UX through performance-focused optimization",
        ],
      },
    ],
  },
  {
    company: "iWebwiser",
    period: "EARLY CAREER",
    blurb: "Built high-performance dashboards and complex multi-step forms.",
    roles: [
      {
        title: "Frontend Developer",
        period: "EARLY CAREER",
        bullets: [
          "Built high-performance dashboards and complex multi-step forms",
          "Focused on accessibility, responsiveness, and clean, maintainable code",
        ],
      },
    ],
  },
];

export const CAPABILITIES: Capability[] = [
  {
    tag: "REAL-TIME",
    title: "Real-Time Systems",
    description: "WebSocket architectures on Centrifugo that keep dashboards live and in sync — <330ms end-to-end, no stale state.",
  },
  {
    tag: "ARCHITECTURE",
    title: "Component Architecture",
    description: "Reusable hook systems and shared component libraries inside Nx monorepos — built once, used across every product.",
  },
  {
    tag: "QUALITY",
    title: "AI Agent Testing",
    description: "Owning end-to-end validation of agent behavior through the UI — conversation flows, edge cases, and regressions caught pre-release.",
  },
  {
    tag: "SYSTEMS",
    title: "Design Systems",
    description: "Consistent, accessible UI across four+ linked products — one visual language, maintained from a single source of truth.",
  },
];

export const SPOTLIGHT: SpotlightItem[] = [
  {
    badge: "app.unpod.ai",
    title: "Unpod App",
    description: "The core \"SuperDialog\" application — where teams run and monitor live AI voice, WhatsApp, and email agents in real time. I own the frontend end-to-end: dashboards, agent monitoring, and the real-time layer itself.",
    metrics: [
      { value: "<330ms", label: "LATENCY" },
      { value: "3", label: "CHANNELS" },
      { value: "100%", label: "AGENT TEST COVERAGE" },
    ],
    chips: ["Next.js", "TypeScript", "Centrifugo", "Custom CSS"],
    url: "https://app.unpod.ai",
  },
  {
    badge: "unpod.ai",
    title: "Unpod AI",
    description: "Primary marketing and platform site — the first touchpoint where organizations discover Unpod's AI telephony & speech infrastructure and sign up.",
    metrics: [],
    chips: ["Next.js", "Nx Monorepo", "TypeScript", "Centrifugo", "Ant Design"],
    url: "https://unpod.ai",
  },
  {
    badge: "unpod.dev",
    title: "Unpod Developer Platform",
    description: "Developer-facing portal for the metered telephony + speech infrastructure — docs, API access, and integration/auth flows used daily by developers.",
    metrics: [],
    chips: ["Next.js", "Nx Monorepo", "TypeScript", "Centrifugo", "Styled Components"],
    url: "https://unpod.dev",
  },
];

export const WORK_PREVIEW_TAGS = ["LIVE PRODUCT", "MARKETING SITE", "AI DISCOVERY", "OPEN LIBRARY"];

export const TECH_STACK: string[] = [
  "React.js",
  "Next.js", 
  "TypeScript",
  "Nx Monorepo",
  "Ant Design",
  "Styled Components",
  "Tailwind CSS",
  "Centrifugo",
  "Git / GitLab",
  "Jira",
];

export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
} as const;