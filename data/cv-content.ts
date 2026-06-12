import type { Locale } from "./i18n";

export interface CvProject {
  title: string;
  period?: string;
  description: string;
  role: string;
  responsibilities: string[];
  techStack: string;
  teamSize?: string;
  links?: { label: string; url: string }[];
}

export interface CvWorkBlock {
  role: string;
  company: string;
  period: string;
  projects: CvProject[];
}

export interface CvSkillGroup {
  category: string;
  items: string[];
}

export interface CvEducation {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
}

export interface CvAward {
  title: string;
  event: string;
  date: string;
}

export interface CvFullContent {
  role: string;
  dob: string;
  location: string;
  github: string;
  portfolio: string;
  about: string;
  education: CvEducation[];
  skills: CvSkillGroup[];
  foreignLanguage: string;
  workExperience: CvWorkBlock[];
  highlightProjects: CvProject[];
  awards: CvAward[];
}

export const cvFullContent: Record<Locale, CvFullContent> = {
  en: {
    role: "FULLSTACK DEVELOPER",
    dob: "29/09/2006",
    location: "Long Bien, Bo De ward, Hanoi",
    github: "https://github.com/KenNguyen-29",
    portfolio: "https://kennek-profile.vercel.app/",
    about:
      "I am a web developer with a solid foundation in Java and JavaScript. I also have good knowledge of Front-End (ReactJS, VueJS, AngularJS, NextJS) and Back-End (NodeJS, Express, NestJS, Spring Boot), and a basic understanding of database management systems such as MySQL, SQL Server, MongoDB, and PostgreSQL. I frequently use Postman, Docker, and GitHub in my studies and personal projects.",
    education: [
      {
        institution: "University of Transport Technology",
        degree: "Information Technology",
        period: "03/2026 – Present",
      },
      {
        institution: "FPT Polytechnic College",
        degree: "Software Development",
        period: "08/2022 – 08/2025",
        gpa: "3.3/4",
      },
    ],
    skills: [
      {
        category: "Language",
        items: ["Java", "JavaScript"],
      },
      {
        category: "Frontend",
        items: ["NextJS", "ReactJS", "VueJS"],
      },
      {
        category: "Backend",
        items: [
          "ExpressJS",
          "NestJS",
          "NodeJS",
          "Spring Boot",
        ],
      },
      {
        category: "Database",
        items: [
          "MSSQL",
          "MySQL",
          "PostgreSQL",
          "MongoDB",
        ],
      },
      {
        category: "Soft Skills",
        items: [
          "Communication",
          "Time management",
          "Presentation",
          "Teamwork",
          "Learning",
        ],
      },
    ],
    foreignLanguage: "English (Intermediate)",
    workExperience: [
      {
        role: "Fresher Fullstack Developer",
        company: "Techwave Solutions Company",
        period: "09/2025 – 04/2026",
        projects: [
          {
            title: "Techwave CMS",
            description:
              "Internal CMS for Techwave: manages posts, static pages, categories, users, and settings/interface; includes login, dashboard, and content preview. Separate frontend–backend–MySQL architecture with Docker Compose.",
            role: "Leader",
            responsibilities: [
              "Design & implement REST API (NestJS), ORM (TypeORM), JWT / Passport; build admin interface (Next.js, App Router).",
              "Code review, standardize API data types between frontend and backend; build & deploy with Docker (MySQL, backend/frontend services, env variables, database healthcheck).",
            ],
            techStack:
              "Frontend: Next.js, React, TypeScript, Tailwind CSS, Radix UI, react-hook-form, Zod. Backend: NestJS, TypeORM, MySQL, JWT, Docker. Tools: GitHub, Postman, Cursor",
          },
          {
            title: "Techwave Ecommerce",
            description:
              "Full-stack e-commerce for a Vietnamese tech retailer: Nuxt storefront, Next.js admin, Spring Boot API on PostgreSQL. Guest checkout with COD and online payments via VNPay and MoMo — two-phase flow: pre-payment order first, official order after gateway callback/IPN confirms payment.",
            role: "Backend Developer",
            responsibilities: [
              "Integrated VNPay and MoMo on Spring Boot: checkout API, HMAC signature validation, IPN/callback handling, order creation after successful payment.",
              "Built checkout and payment flow on Nuxt: gateway redirect, status polling, success/failure result pages.",
            ],
            techStack:
              "Java 17, Spring Boot, Spring Data JPA, PostgreSQL, Spring Security, JWT, Maven, VNPay/MoMo Payment API, Docker",
            teamSize: "3 members",
          },
          {
            title: "Landing Page Techwave",
            description:
              "Marketing landing for Techwave (smart home, cameras, smart parking, solar), rebuilt from a static site using Next.js (App Router), React, TypeScript, and Tailwind CSS with Framer Motion. Production deployment via GitLab CI/CD and Docker Compose.",
            role: "Frontend Developer",
            responsibilities: [
              "Develop homepage interface and content flow (Hero, customers, services, metrics, about us, processes, testimonials, contact), navbar/footer/floating buttons, animations, responsive layout.",
              "Configure App Router, SEO metadata, Inter font + Vietnamese subset, global styling; organize components, TypeScript, and ESLint for build quality.",
            ],
            techStack:
              "Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Lucide React",
            teamSize: "2 members",
          },
        ],
      },
      {
        role: "Fullstack Developer – Part-time / Remote Contract",
        company: "Remote Contract",
        period: "08/2025 – 11/2025",
        projects: [
          {
            title: "AI-powered Customer Support Chat System",
            description:
              "Real-time web chat between customers and support staff, with admin dashboard, notifications, centralized status management, and AI integration (session summarization, sentiment analysis, etc.).",
            role: "Full-stack Developer",
            responsibilities: [
              "Design and implement the Next.js chat interface (message flow, markdown, model selection, project/conversation sidebar), client-side middleware/authentication, and API proxy routes to the backend.",
              "Design and implement backend API (Express), Sequelize ORM with MySQL, and WebSocket (ws) for two-way chat and notifications.",
              "Build admin interface (Vue 3, Vite), routing (Vue Router), state (Pinia), API calls (Axios), and UI (Bootstrap).",
            ],
            techStack:
              "Frontend: Vue 3, Vite, Vue Router, Pinia, Axios, Bootstrap 5, Bootstrap Icons. Backend: Node.js, Express.js, Sequelize, MySQL, WebSocket (ws), CORS, dotenv, Gemma 3 (Ollama), node-fetch, exceljs, xlsx. Tools: GitHub, MySQL, Postman",
            teamSize: "2 members",
          },
        ],
      },
      {
        role: "Intern Fullstack Developer – School Internship Program",
        company: "EcoIT Company",
        period: "02/2025 – 06/2025",
        projects: [
          {
            title: "Staff Management",
            description:
              "Software for managing employee information and work schedules at the company.",
            role: "Backend Developer",
            responsibilities: [
              "Support as Project Leader",
              "Build and develop APIs",
              "Collaborate with the Front-end team and support other team members",
            ],
            techStack: "Frontend: AngularJS. Backend: NodeJS. Database: PostgreSQL",
            teamSize: "4 members",
          },
        ],
      },
    ],
    highlightProjects: [
      {
        title: "Kennek AI Chat System",
        period: "02/2026 – 06/2026",
        description:
          "AI web chat (Kennek_AI): login/register (Google & GitHub OAuth), project-based conversations, chat with 4 models (Qwen3.5, Mistral, Qwen2.5-Coder, Deepseek-R1) via Ollama (SSE stream), web search via Tavily, file attachments with content extraction (PDF, Word, Excel, OCR) for AI context.",
        role: "Full-stack Developer",
        responsibilities: [
          "Design and implement Next.js chat UI (message flow, markdown, model selection, sidebar), middleware/auth, and API proxy routes.",
          "Build NestJS backend (REST, validation, session/JWT, cookie CORS), PostgreSQL via Prisma, AI streaming (Ollama), Tavily integration, and attachment processing pipeline for prompts.",
          "Integrate Visa and Mastercard payment gateways with Stripe.",
        ],
        techStack:
          "Frontend: Next.js, TypeScript, Tailwind CSS. Backend: NestJS, TypeScript, Prisma 6, PostgreSQL, Ollama, Tavily, Tesseract.js, RxJS, Bcryptjs. Tools: GitHub, Postman, Cursor",
        links: [{ label: "GitHub", url: "https://github.com/Ken290906/Kennek_AI" }],
      },
      {
        title: "Kennek Profile",
        period: "05/2026",
        description:
          "Modern responsive personal portfolio with Next.js App Router: profile, skills, experience, projects, education, contact; animated UI, bilingual VI/EN, command palette, dock navigation. Static deploy on Vercel.",
        role: "Frontend Developer",
        responsibilities: [
          "Designed and developed full UI/UX: hero, 11+ sections, responsive layout, green-themed design system, ambient background effects.",
          "Implemented i18n (VI/EN), Framer Motion animations, smooth scroll, command palette, dock nav with section tracking, centralized TypeScript content.",
        ],
        techStack:
          "Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Lucide React, Vercel",
        links: [{ label: "Live", url: "https://kennek-profile.vercel.app/" }],
      },
      {
        title: "MobileWorld Phone Sales Software",
        period: "01/2025 – 08/2025",
        description:
          "Complete CMS and sales management system via API. Staff perform core management tasks, track business through reports and charts, and interact with customers through real-time features.",
        role: "Leader (Fullstack Developer)",
        responsibilities: [
          "Design and complete Discount Coupon and Invoice module.",
          "Build email notifications for customers after purchase or account creation.",
          "Integrate AI-powered consultation using OpenAI API.",
          "Build Admin and Client Sales functions.",
        ],
        techStack:
          "Frontend: VueJS, Bootstrap, Pinia, html5-qrcode, SockJS, xlsx. Backend: Java, Spring Boot, Spring Mail, Cloudinary, Apache POI, iTextPDF, JasperReports, openai-java. Tools: VS Code, IntelliJ IDEA, Postman, GitHub",
        teamSize: "5 members",
        links: [
          {
            label: "Frontend",
            url: "https://github.com/phuocdm1702/Graduation_Project_Group_2_MobileWorld_FE.git",
          },
          {
            label: "Backend",
            url: "https://github.com/phuocdm1702/Graduation_Project_Group_2_MobileWorld_Ver2_BE.git",
          },
        ],
      },
    ],
    awards: [
      {
        title: 'TOP 20 BEST CONTESTANTS OF "HACKATHON FRONTEND MASTER 2024"',
        event: "FPT Polytechnic – Hackathon Frontend Master",
        date: "08/2024",
      },
    ],
  },
  vi: {
    role: "FULLSTACK DEVELOPER",
    dob: "29/09/2006",
    location: "Quận Long Biên, phường Bồ Đề, Hà Nội",
    github: "https://github.com/KenNguyen-29",
    portfolio: "https://kennek-profile.vercel.app/",
    about:
      "Lập trình viên web với nền tảng vững Java và JavaScript. Có kiến thức tốt về Front-End (ReactJS, VueJS, AngularJS, NextJS) và Back-End (NodeJS, Express, NestJS, Spring Boot), hiểu biết cơ bản về MySQL, SQL Server, MongoDB, PostgreSQL. Thường xuyên dùng Postman, Docker và GitHub trong học tập và project cá nhân.",
    education: [
      {
        institution: "Trường Đại học Công nghệ GTVT",
        degree: "Công nghệ Thông tin",
        period: "03/2026 – Hiện tại",
      },
      {
        institution: "Cao đẳng FPT Polytechnic",
        degree: "Phát triển Phần mềm",
        period: "08/2022 – 08/2025",
        gpa: "3.3/4",
      },
    ],
    skills: [
      {
        category: "Ngôn ngữ lập trình",
        items: ["Java", "JavaScript"],
      },
      {
        category: "Frontend",
        items: ["NextJS", "ReactJS", "VueJS"],
      },
      {
        category: "Backend",
        items: ["ExpressJS", "NestJS", "NodeJS", "Spring Boot"],
      },
      {
        category: "Database",
        items: ["MSSQL", "MySQL", "PostgreSQL", "MongoDB"],
      },
      {
        category: "Kỹ năng mềm",
        items: [
          "Giao tiếp",
          "Quản lý thời gian",
          "Thuyết trình",
          "Làm việc nhóm",
          "Học hỏi",
        ],
      },
    ],
    foreignLanguage: "Tiếng Anh (Trung cấp)",
    workExperience: [
      {
        role: "Fresher Fullstack Developer",
        company: "Techwave Solutions Company",
        period: "09/2025 – 04/2026",
        projects: [
          {
            title: "Techwave CMS",
            description:
              "CMS nội bộ Techwave: quản lý bài viết, trang tĩnh, danh mục, người dùng, cài đặt/giao diện; đăng nhập, dashboard, xem trước nội dung. Kiến trúc frontend–backend–MySQL, triển khai Docker Compose.",
            role: "Leader",
            responsibilities: [
              "Thiết kế & triển khai REST API (NestJS), ORM (TypeORM), JWT/Passport; xây giao diện admin (Next.js, App Router).",
              "Review code, chuẩn hóa kiểu dữ liệu API giữa frontend và backend; build & deploy Docker (MySQL, backend/frontend, biến môi trường, healthcheck DB).",
            ],
            techStack:
              "Frontend: Next.js, React, TypeScript, Tailwind CSS, Radix UI, react-hook-form, Zod. Backend: NestJS, TypeORM, MySQL, JWT, Docker. Tools: GitHub, Postman, Cursor",
          },
          {
            title: "Techwave Ecommerce",
            description:
              "E-commerce full-stack cho nhà bán lẻ công nghệ Việt Nam: storefront Nuxt, admin Next.js, API Spring Boot trên PostgreSQL. Thanh toán COD, VNPay, MoMo — luồng hai bước: tạo đơn tạm trước, đơn chính thức sau khi IPN xác nhận.",
            role: "Backend Developer",
            responsibilities: [
              "Tích hợp VNPay và MoMo trên Spring Boot: API checkout, xác thực chữ ký HMAC, xử lý IPN/callback, tạo đơn sau thanh toán thành công.",
              "Xây luồng checkout & thanh toán trên Nuxt: redirect cổng, polling trạng thái, trang kết quả thành công/thất bại.",
            ],
            techStack:
              "Java 17, Spring Boot, Spring Data JPA, PostgreSQL, Spring Security, JWT, Maven, VNPay/MoMo API, Docker",
            teamSize: "3 thành viên",
          },
          {
            title: "Landing Page Techwave",
            description:
              "Landing marketing Techwave (nhà thông minh, camera, bãi xe thông minh, năng lượng mặt trời), rebuild bằng Next.js, React, TypeScript, Tailwind CSS, Framer Motion. Deploy GitLab CI/CD + Docker Compose.",
            role: "Frontend Developer",
            responsibilities: [
              "Phát triển giao diện trang chủ và luồng nội dung (Hero, khách hàng, dịch vụ, số liệu, giới thiệu, quy trình, testimonial, liên hệ), navbar/footer/nút nổi, animation, responsive.",
              "Cấu hình App Router, SEO metadata, font Inter + subset tiếng Việt, global styling; tổ chức component, TypeScript, ESLint.",
            ],
            techStack:
              "Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Lucide React",
            teamSize: "2 thành viên",
          },
        ],
      },
      {
        role: "Fullstack Developer – Part-time / Remote",
        company: "Hợp đồng Remote",
        period: "08/2025 – 11/2025",
        projects: [
          {
            title: "AI Customer Support Chat System",
            description:
              "Ứng dụng chat real-time giữa khách hàng và nhân viên hỗ trợ, kèm admin dashboard, thông báo, quản lý trạng thái tập trung và tích hợp AI (tóm tắt phiên, phân tích cảm xúc...).",
            role: "Full-stack Developer",
            responsibilities: [
              "Thiết kế giao diện chat Next.js (luồng tin nhắn, markdown, chọn model, sidebar), middleware/xác thực, API proxy tới backend.",
              "Xây API backend (Express), Sequelize + MySQL, WebSocket (ws) cho chat hai chiều và thông báo.",
              "Xây giao diện admin (Vue 3, Vite), Vue Router, Pinia, Axios, Bootstrap.",
            ],
            techStack:
              "Frontend: Vue 3, Vite, Vue Router, Pinia, Axios, Bootstrap 5. Backend: Node.js, Express.js, Sequelize, MySQL, WebSocket, Ollama, exceljs, xlsx. Tools: GitHub, Postman",
            teamSize: "2 thành viên",
          },
        ],
      },
      {
        role: "Intern Fullstack – Chương trình thực tập",
        company: "EcoIT Company",
        period: "02/2025 – 06/2025",
        projects: [
          {
            title: "Staff Management",
            description:
              "Phần mềm quản lý thông tin nhân viên và lịch làm việc tại công ty.",
            role: "Backend Developer",
            responsibilities: [
              "Hỗ trợ vai trò Project Leader",
              "Xây dựng và phát triển API",
              "Phối hợp team Front-end và hỗ trợ thành viên khác",
            ],
            techStack: "Frontend: AngularJS. Backend: NodeJS. Database: PostgreSQL",
            teamSize: "4 thành viên",
          },
        ],
      },
    ],
    highlightProjects: [
      {
        title: "Kennek AI Chat System",
        period: "02/2026 – 06/2026",
        description:
          "Ứng dụng chat AI (Kennek_AI): đăng nhập/đăng ký (Google & GitHub OAuth), hội thoại theo project, chat 4 model (Qwen3.5, Mistral, Qwen2.5-Coder, Deepseek-R1) qua Ollama (SSE), tìm kiếm web Tavily, đính kèm file và trích xuất nội dung (PDF, Word, Excel, OCR) làm ngữ cảnh AI.",
        role: "Full-stack Developer",
        responsibilities: [
          "Thiết kế UI chat Next.js (luồng tin, markdown, chọn model, sidebar), middleware/auth, API proxy.",
          "Backend NestJS (REST, validation, JWT, CORS cookie), PostgreSQL + Prisma, streaming Ollama, Tavily, pipeline xử lý file đính kèm.",
          "Tích hợp thanh toán Visa/Mastercard qua Stripe.",
        ],
        techStack:
          "Frontend: Next.js, TypeScript, Tailwind CSS. Backend: NestJS, Prisma 6, PostgreSQL, Ollama, Tavily, Tesseract.js. Tools: GitHub, Postman, Cursor",
        links: [{ label: "GitHub", url: "https://github.com/Ken290906/Kennek_AI" }],
      },
      {
        title: "Kennek Profile",
        period: "05/2026",
        description:
          "Portfolio cá nhân responsive với Next.js App Router: giới thiệu, kỹ năng, kinh nghiệm, dự án, học vấn, liên hệ; animation, đa ngôn ngữ VI/EN, command palette, dock nav. Deploy static Vercel.",
        role: "Frontend Developer",
        responsibilities: [
          "Thiết kế & phát triển toàn bộ UI/UX: hero, 11+ section, responsive, theme xanh, hiệu ứng nền.",
          "Triển khai i18n VI/EN, Framer Motion, smooth scroll, command palette, dock nav, nội dung TypeScript tập trung.",
        ],
        techStack:
          "Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Lucide React, Vercel",
        links: [{ label: "Live", url: "https://kennek-profile.vercel.app/" }],
      },
      {
        title: "MobileWorld Phone Sales Software",
        period: "01/2025 – 08/2025",
        description:
          "Hệ thống CMS và quản lý bán hàng qua API. Nhân viên quản lý nghiệp vụ, theo dõi kinh doanh qua báo cáo/biểu đồ, tương tác khách hàng real-time.",
        role: "Leader (Fullstack Developer)",
        responsibilities: [
          "Thiết kế & hoàn thiện module Mã giảm giá và Hóa đơn.",
          "Xây chức năng gửi email cho khách sau mua hàng hoặc tạo tài khoản.",
          "Tích hợp tư vấn AI qua OpenAI API.",
          "Xây chức năng Admin và Client Sales.",
        ],
        techStack:
          "Frontend: VueJS, Bootstrap, Pinia, SockJS, xlsx. Backend: Java, Spring Boot, Spring Mail, Cloudinary, JasperReports, openai-java. Tools: IntelliJ, Postman, GitHub",
        teamSize: "5 thành viên",
        links: [
          {
            label: "Frontend",
            url: "https://github.com/phuocdm1702/Graduation_Project_Group_2_MobileWorld_FE.git",
          },
          {
            label: "Backend",
            url: "https://github.com/phuocdm1702/Graduation_Project_Group_2_MobileWorld_Ver2_BE.git",
          },
        ],
      },
    ],
    awards: [
      {
        title: "TOP 20 THÍ SINH XUẤT SẮC — HACKATHON FRONTEND MASTER 2024",
        event: "FPT Polytechnic – Hackathon Frontend Master",
        date: "08/2024",
      },
    ],
  },
};
