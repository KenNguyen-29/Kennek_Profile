export const profile = {
  name: "Nguyễn Hữu Huân",
  role: "Fullstack Developer",
  typingRoles: [
    "Fullstack Developer",
    "AI Engineer (Future)",
    "LLM & RAG Enthusiast",
  ],
  shortIntro:
    "Young developer building modern web apps, exploring AI, and always leveling up — one commit at a time.",
  tagline: "Gen Z · Builder · Lifelong Learner",
  status: "Open to work",
  email: "huannek2006@gmail.com",
  phone: "0899109179",
  location: "Long Biên, Hà Nội",
  github: "https://github.com/Ken290906",
  linkedin: "",
  cvDownloadUrl: "/cv/nguyen-huu-huan-cv.pdf",
  avatar: "/avatar.jpg",
};

export const about = {
  summary:
    "I am a Fullstack Developer passionate about building modern web applications and exploring the future of AI.\n\nBeyond web development, I am actively learning AI Engineering, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and intelligent AI systems.\n\nI enjoy solving real-world problems through technology, collaborating with teams, and continuously improving myself both technically and personally.",
  highlights: [
    "Fullstack web development with React, Next.js & NestJS",
    "Strong backend foundation — APIs, databases & system thinking",
    "Diving into AI Engineering, LLMs & RAG systems",
    "Always learning, adapting fast & shipping real projects",
  ],
};

export const strengths = [
  {
    id: "fast-learner",
    title: "Fast Learner",
    description:
      "Quick to pick up new frameworks, tools, and concepts — turning curiosity into working code.",
    icon: "Zap" as const,
  },
  {
    id: "quick-adaptation",
    title: "Quick Adaptation",
    description:
      "Comfortable switching contexts, tech stacks, and team workflows without losing momentum.",
    icon: "RefreshCw" as const,
  },
  {
    id: "hard-working",
    title: "Hard Working",
    description:
      "Consistent effort on real projects — from late-night debugging to polished deliverables.",
    icon: "Flame" as const,
  },
  {
    id: "communication",
    title: "Good Communication",
    description:
      "Clear updates, active listening, and constructive discussions with teammates and stakeholders.",
    icon: "MessageCircle" as const,
  },
  {
    id: "team-collaboration",
    title: "Team Collaboration",
    description:
      "Thrives in team environments — code reviews, pair sessions, and shared ownership of outcomes.",
    icon: "Users" as const,
  },
  {
    id: "responsibility",
    title: "Responsibility",
    description:
      "Takes ownership of tasks end-to-end — from planning and implementation to follow-through.",
    icon: "Shield" as const,
  },
];

export const growthMindset = [
  { id: "analytical", text: "Continuously improving analytical thinking" },
  { id: "problem-solving", text: "Working on deeper problem-solving approaches" },
  { id: "attention-detail", text: "Paying more attention to detail during final reviews" },
  { id: "feedback", text: "Always learning from feedback and real projects" },
];

export const interests = [
  {
    id: "movies",
    label: "Watching Movies",
    emoji: "🎬",
    description: "Storytelling, cinematography & unwinding after a long coding session.",
  },
  {
    id: "football",
    label: "Football",
    emoji: "⚽",
    description: "Team spirit on the pitch — strategy, energy & competition.",
  },
  {
    id: "badminton",
    label: "Badminton",
    emoji: "🏸",
    description: "Quick reflexes and focus — a great way to reset the mind.",
  },
  {
    id: "gaming",
    label: "Gaming",
    emoji: "🎮",
    description: "Competitive play, teamwork & staying sharp under pressure.",
  },
];

export const favoriteGames = [
  {
    id: "valorant",
    name: "Valorant",
    rank: "Diamond Rank",
    tier: "S",
  },
  {
    id: "pubg",
    name: "PUBG Mobile",
    rank: "Conqueror / Bậc Thầy Siêu Việt",
    tier: "SS",
  },
];

export const roadmap = [
  {
    year: "2026",
    title: "Backend & Infrastructure",
    items: ["Advanced Backend Engineering", "System Design", "Docker & DevOps"],
    status: "in-progress" as const,
  },
  {
    year: "2027",
    title: "AI Engineering",
    items: ["AI Engineering", "LLM Applications", "RAG Systems", "AI Agents"],
    status: "upcoming" as const,
  },
  {
    year: "2028+",
    title: "Product & SaaS",
    items: [
      "Build AI-powered SaaS products",
      "Fullstack + AI Engineer",
      "Product Development",
    ],
    status: "future" as const,
  },
];

export const skillGroups = [
  {
    category: "Frontend",
    icon: "Monitor" as const,
    skills: ["Next.js", "React", "Vue", "AngularJS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "Server" as const,
    skills: ["NestJS", "ExpressJS", "NodeJS", "Spring Boot"],
  },
  {
    category: "Database",
    icon: "Database" as const,
    skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"],
  },
  {
    category: "Tools",
    icon: "Wrench" as const,
    skills: ["GitHub", "Docker", "Postman", "Cursor"],
  },
  {
    category: "Soft Skills",
    icon: "Users" as const,
    skills: [
      "Communication",
      "Teamwork",
      "Time Management",
      "Presentation",
      "Learning",
    ],
  },
];

export const experiences = [
  {
    id: "techwave-fresher",
    company: "Techwave Solutions Company",
    role: "Fresher Fullstack Developer",
    period: "09/2025 - 06/2026",
    location: "Hà Nội, Vietnam",
    description:
      "Developed and maintained fullstack web applications using React, Next.js, and NestJS. Collaborated with cross-functional teams to deliver CMS and e-commerce solutions.",
  },
  {
    id: "remote-contract",
    company: "Remote Contract",
    role: "Fullstack Developer",
    period: "07/2025 - 11/2026",
    location: "Remote",
    description:
      "Built AI-powered chat systems and customer support platforms. Integrated LLM APIs and deployed containerized services with Docker.",
  },
  {
    id: "ecoit-intern",
    company: "EcoIT Company",
    role: "Intern Fullstack Developer",
    period: "02/2025 - 06/2025",
    location: "Hà Nội, Vietnam",
    description:
      "Assisted in developing internal tools with Spring Boot and MySQL. Participated in code reviews and agile sprint ceremonies.",
  },
];

export const projects = [
  {
    id: "kennek-ai-chat",
    title: "Kennek AI Chat System",
    description:
      "Intelligent chat platform with real-time messaging, context-aware AI responses, and a modern React interface.",
    role: "Fullstack Developer",
    techStack: ["Next.js", "React", "NestJS", "PostgreSQL", "Docker"],
    github: "",
    demo: "",
    featured: true,
    difficulty: 4,
  },
  {
    id: "mobileworld",
    title: "MobileWorld Phone Sales Software",
    description:
      "Phone sales management with inventory tracking, order processing, and sales analytics for retail stores.",
    role: "Fullstack Developer",
    techStack: ["Vue", "Spring Boot", "MySQL", "REST API"],
    github: "",
    demo: "",
    featured: true,
    difficulty: 3,
  },
  {
    id: "techwave-cms",
    title: "Techwave CMS",
    description:
      "Content management with role-based access control and an intuitive admin dashboard.",
    role: "Fullstack Developer",
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS"],
    github: "",
    demo: "",
    featured: false,
    difficulty: 3,
  },
  {
    id: "techwave-ecommerce",
    title: "Techwave Ecommerce",
    description:
      "E-commerce platform with product catalog, cart, order management, and payment integration.",
    role: "Fullstack Developer",
    techStack: ["React", "NodeJS", "ExpressJS", "MongoDB"],
    github: "",
    demo: "",
    featured: false,
    difficulty: 3,
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support Chat",
    description:
      "Automated support with AI inquiries, ticket routing, and human handoff capabilities.",
    role: "Fullstack Developer",
    techStack: ["Next.js", "NestJS", "OpenAI API", "PostgreSQL", "Docker"],
    github: "",
    demo: "",
    featured: true,
    difficulty: 4,
  },
];

export const awards = [
  {
    id: "hackathon-2024",
    title: "TOP 20 BEST CONTESTANTS",
    event: "Hackathon Frontend Master 2024",
    year: "2024",
    description:
      "Recognized among the top 20 for outstanding frontend skills and creative problem-solving.",
  },
];

export const education = [
  {
    id: "utt",
    institution: "University of Transport Technology",
    degree: "Information Technology",
    period: "03/2026 – Present",
    gpa: "",
    description: "Bachelor's degree in Information Technology.",
  },
  {
    id: "fpt-poly",
    institution: "FPT Polytechnic College",
    degree: "Software Development",
    period: "09/2022 – 09/2025",
    gpa: "3.3/4",
    description: "Associate degree in Software Development with strong academic performance.",
  },
];

export const dockNav = [
  { id: "about", label: "Giới thiệu", href: "#about", icon: "User" as const },
  { id: "skills", label: "Kỹ năng", href: "#skills", icon: "Cpu" as const },
  { id: "projects", label: "Dự án", href: "#projects", icon: "Crosshair" as const },
  { id: "life", label: "Sở thích", href: "#beyond-coding", icon: "Gamepad2" as const },
  { id: "roadmap", label: "Lộ trình", href: "#roadmap", icon: "GitBranch" as const },
  { id: "contact", label: "Liên hệ", href: "#contact", icon: "Radio" as const },
];

export const commandLinks = [
  { label: "Giới thiệu", href: "#about" },
  { label: "Kỹ năng", href: "#skills" },
  { label: "Kinh nghiệm", href: "#experience" },
  { label: "Dự án", href: "#projects" },
  { label: "Ngoài coding", href: "#beyond-coding" },
  { label: "Đang phát triển", href: "#growth" },
  { label: "Lộ trình", href: "#roadmap" },
  { label: "Giải thưởng", href: "#awards" },
  { label: "Học vấn", href: "#education" },
  { label: "Liên hệ", href: "#contact" },
];
