/** Static contact & project metadata (non-translatable) */
export const contact = {
  name: "Nguyễn Hữu Huân",
  email: "huannek2006@gmail.com",
  phone: "0899109179",
  location: "Long Biên, Hà Nội",
  github: "https://github.com/Ken290906",
  linkedin: "",
  avatar: "/avatar.jpg",
};

export const projectMeta: Record<
  string,
  { techStack: string[]; github: string; demo: string }
> = {
  "kennek-ai-chat": {
    techStack: ["Next.js", "React", "NestJS", "PostgreSQL", "Docker"],
    github: "",
    demo: "",
  },
  mobileworld: {
    techStack: ["Vue", "Spring Boot", "MySQL", "REST API"],
    github: "",
    demo: "",
  },
  "techwave-cms": {
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS"],
    github: "",
    demo: "",
  },
  "techwave-ecommerce": {
    techStack: ["React", "NodeJS", "ExpressJS", "MongoDB"],
    github: "",
    demo: "",
  },
  "ai-customer-support": {
    techStack: ["Next.js", "NestJS", "OpenAI API", "PostgreSQL", "Docker"],
    github: "",
    demo: "",
  },
};

export const dockIcons = {
  about: "User",
  skills: "Cpu",
  projects: "Crosshair",
  life: "Gamepad2",
  roadmap: "GitBranch",
  contact: "Radio",
} as const;
