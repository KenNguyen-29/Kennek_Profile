export type Locale = "vi" | "en";

export const translations = {
  vi: {
    profile: {
      role: "Fullstack Developer",
      typingRoles: [
        "Fullstack Developer",
        "AI Engineer (tương lai)",
        "Đam mê LLM & RAG",
      ],
      shortIntro:
        "Lập trình viên trẻ xây dựng web hiện đại, khám phá AI và không ngừng học hỏi — từng commit một.",
      tagline: "Gen Z · Builder · Học suốt đời",
      status: "Sẵn sàng nhận việc",
    },
    about: {
      summary:
        "Mình là Fullstack Developer đam mê xây dựng ứng dụng web hiện đại và khám phá tương lai của AI.\n\nNgoài web, mình đang học AI Engineering, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) và các hệ thống AI thông minh.\n\nMình thích giải quyết vấn đề thực tế bằng công nghệ, làm việc nhóm và không ngừng cải thiện bản thân.",
      highlights: [
        "Fullstack với React, Next.js & NestJS",
        "Nền tảng backend vững — API, database & tư duy hệ thống",
        "Đang đi sâu AI Engineering, LLMs & RAG",
        "Học nhanh, thích nghi tốt & ship project thật",
      ],
    },
    strengths: [
      { id: "fast-learner", title: "Học nhanh", description: "Nắm bắt framework, công cụ và khái niệm mới nhanh — biến tò mò thành code chạy được.", icon: "Zap" as const },
      { id: "quick-adaptation", title: "Thích nghi nhanh", description: "Linh hoạt chuyển ngữ cảnh, tech stack và quy trình team mà không mất nhịp.", icon: "RefreshCw" as const },
      { id: "hard-working", title: "Chăm chỉ", description: "Nỗ lực đều đặn trên project thật — từ debug đêm khuya đến bàn giao chỉn chu.", icon: "Flame" as const },
      { id: "communication", title: "Giao tiếp tốt", description: "Cập nhật rõ ràng, lắng nghe và thảo luận mang tính xây dựng với team.", icon: "MessageCircle" as const },
      { id: "team-collaboration", title: "Làm việc nhóm", description: "Hợp tác tốt — code review, pair programming và cùng chịu trách nhiệm kết quả.", icon: "Users" as const },
      { id: "responsibility", title: "Có trách nhiệm", description: "Làm trọn vẹn từ lên kế hoạch, triển khai đến theo dõi sau bàn giao.", icon: "Shield" as const },
    ],
    growthMindset: [
      { id: "analytical", text: "Liên tục cải thiện tư duy phân tích" },
      { id: "problem-solving", text: "Rèn luyện cách tiếp cận giải quyết vấn đề sâu hơn" },
      { id: "attention-detail", text: "Chú ý hơn đến chi tiết trong khâu review cuối" },
      { id: "feedback", text: "Luôn học từ feedback và project thực tế" },
    ],
    interests: [
      { id: "movies", label: "Xem phim", emoji: "🎬", description: "Kể chuyện, hình ảnh & thư giãn sau giờ code." },
      { id: "football", label: "Bóng đá", emoji: "⚽", description: "Tinh thần đồng đội — chiến thuật, năng lượng & cạnh tranh." },
      { id: "badminton", label: "Cầu lông", emoji: "🏸", description: "Phản xạ nhanh và tập trung — cách reset đầu óc hiệu quả." },
      { id: "gaming", label: "Gaming", emoji: "🎮", description: "Chơi có tính cạnh tranh, teamwork & giữ phản xạ nhạy." },
    ],
    favoriteGames: [
      { id: "valorant", name: "Valorant", rank: "Kim cương (Diamond)" },
      { id: "pubg", name: "PUBG Mobile", rank: "Conqueror / Bậc Thầy Siêu Việt" },
    ],
    roadmap: [
      { year: "2026", title: "Backend & Hạ tầng", items: ["Backend nâng cao", "System Design", "Docker & DevOps"], status: "in-progress" as const },
      { year: "2027", title: "AI Engineering", items: ["AI Engineering", "Ứng dụng LLM", "Hệ thống RAG", "AI Agents"], status: "upcoming" as const },
      { year: "2028+", title: "Sản phẩm & SaaS", items: ["Xây SaaS tích hợp AI", "Fullstack + AI Engineer", "Phát triển sản phẩm"], status: "future" as const },
    ],
    skillGroups: [
      { category: "Frontend", skills: ["Next.js", "React", "Vue", "AngularJS", "Tailwind CSS"] },
      { category: "Backend", skills: ["NestJS", "ExpressJS", "NodeJS", "Spring Boot"] },
      { category: "Database", skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"] },
      { category: "Công cụ", skills: ["GitHub", "Docker", "Postman", "Cursor"] },
      { category: "Kỹ năng mềm", skills: ["Giao tiếp", "Teamwork", "Quản lý thời gian", "Thuyết trình", "Học hỏi"] },
    ],
    experiences: [
      { id: "techwave-fresher", company: "Techwave Solutions Company", role: "Fresher Fullstack Developer", period: "09/2025 - 06/2026", location: "Hà Nội, Việt Nam", description: "Phát triển và duy trì ứng dụng fullstack với React, Next.js và NestJS. Phối hợp team đa chức năng để bàn giao CMS và e-commerce." },
      { id: "remote-contract", company: "Remote Contract", role: "Fullstack Developer", period: "07/2025 - 11/2026", location: "Remote", description: "Xây hệ thống chat AI và nền tảng hỗ trợ khách hàng. Tích hợp LLM API và triển khai Docker." },
      { id: "ecoit-intern", company: "EcoIT Company", role: "Intern Fullstack Developer", period: "02/2025 - 06/2025", location: "Hà Nội, Việt Nam", description: "Hỗ trợ phát triển công cụ nội bộ với Spring Boot và MySQL. Tham gia code review và sprint agile." },
    ],
    projects: [
      { id: "kennek-ai-chat", title: "Kennek AI Chat System", description: "Nền tảng chat thông minh với tin nhắn real-time, phản hồi AI theo ngữ cảnh và giao diện React hiện đại.", role: "Fullstack Developer", featured: true },
      { id: "mobileworld", title: "MobileWorld Phone Sales Software", description: "Quản lý bán điện thoại — tồn kho, đơn hàng và phân tích doanh số cho cửa hàng.", role: "Fullstack Developer", featured: true },
      { id: "techwave-cms", title: "Techwave CMS", description: "Quản lý nội dung với phân quyền và dashboard admin trực quan.", role: "Fullstack Developer", featured: false },
      { id: "techwave-ecommerce", title: "Techwave Ecommerce", description: "Sàn thương mại điện tử — catalog, giỏ hàng, đơn hàng và thanh toán.", role: "Fullstack Developer", featured: false },
      { id: "ai-customer-support", title: "AI Customer Support Chat", description: "Hỗ trợ tự động bằng AI — routing ticket và chuyển giao cho người thật.", role: "Fullstack Developer", featured: true },
    ],
    awards: [
      { id: "hackathon-2024", title: "TOP 20 THÍ SINH XUẤT SẮC", event: "Hackathon Frontend Master 2024", year: "2024", description: "Lọt top 20 nhờ kỹ năng frontend và tư duy sáng tạo." },
    ],
    education: [
      { id: "utt", institution: "Trường Đại học Công nghệ GTVT", degree: "Công nghệ Thông tin", period: "03/2026 – Hiện tại", gpa: "", description: "Cử nhân Công nghệ Thông tin." },
      { id: "fpt-poly", institution: "Cao đẳng FPT Polytechnic", degree: "Phát triển Phần mềm", period: "09/2022 – 09/2025", gpa: "3.3/4", description: "Cao đẳng Phát triển Phần mềm với thành tích học tập tốt." },
    ],
    ui: {
      hero: { viewProjects: "Xem dự án", contact: "Liên hệ", scroll: "Cuộn" },
      sections: {
        about: { code: "ABOUT", title: "Giới thiệu", subtitle: "Builder, learner, hướng tới AI engineering.", highlights: "Điểm nổi bật" },
        strengths: { code: "STRENGTH", title: "Điểm mạnh" },
        skills: { code: "SKILLS", title: "Kỹ năng & công nghệ", subtitle: "Stack công cụ thường dùng." },
        experience: { code: "WORK", title: "Kinh nghiệm" },
        projects: { code: "PROJECTS", title: "Dự án", subtitle: "Các project đã và đang làm.", featured: "Nổi bật", private: "Private / Đang phát triển" },
        beyond: { code: "LIFE", title: "Ngoài coding", subtitle: "Sở thích & đam mê cá nhân.", games: "Game yêu thích" },
        growth: { code: "GROWTH", title: "Đang phát triển", subtitle: "Những điều mình đang cố gắng cải thiện." },
        roadmap: { code: "ROADMAP", title: "Lộ trình", subtitle: "Hướng đi trong vài năm tới." },
        award: { code: "AWARD", title: "Giải thưởng" },
        education: { code: "EDU", title: "Học vấn" },
        contact: { code: "CONTACT", title: "Liên hệ", subtitle: "Sẵn sàng cho cơ hội, hợp tác và trao đổi." },
      },
      roadmapStatus: { "in-progress": "Đang học", upcoming: "Sắp tới", future: "Tương lai" },
      contact: {
        email: "Email", phone: "Điện thoại", location: "Địa điểm", github: "GitHub",
        namePh: "Họ tên", emailPh: "Email", subjectPh: "Tiêu đề", messagePh: "Nội dung",
        submit: "Gửi tin nhắn", submitted: "Đã gửi ✓", note: "Form demo — liên hệ trực tiếp qua email để phản hồi nhanh hơn.",
      },
      dock: [
        { id: "about", label: "Giới thiệu", href: "#about" },
        { id: "skills", label: "Kỹ năng", href: "#skills" },
        { id: "projects", label: "Dự án", href: "#projects" },
        { id: "life", label: "Sở thích", href: "#beyond-coding" },
        { id: "roadmap", label: "Lộ trình", href: "#roadmap" },
        { id: "contact", label: "Liên hệ", href: "#contact" },
      ],
      commandLinks: [
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
      ],
      palette: { jumpTo: "Đi tới", placeholder: "Tìm section...", noMatch: "Không tìm thấy" },
      footer: { builtWith: "Built with Next.js" },
      lang: { label: "Ngôn ngữ", vi: "VI", en: "EN" },
    },
  },
  en: {
    profile: {
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
    },
    about: {
      summary:
        "I am a Fullstack Developer passionate about building modern web applications and exploring the future of AI.\n\nBeyond web development, I am actively learning AI Engineering, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and intelligent AI systems.\n\nI enjoy solving real-world problems through technology, collaborating with teams, and continuously improving myself both technically and personally.",
      highlights: [
        "Fullstack web development with React, Next.js & NestJS",
        "Strong backend foundation — APIs, databases & system thinking",
        "Diving into AI Engineering, LLMs & RAG systems",
        "Always learning, adapting fast & shipping real projects",
      ],
    },
    strengths: [
      { id: "fast-learner", title: "Fast Learner", description: "Quick to pick up new frameworks, tools, and concepts — turning curiosity into working code.", icon: "Zap" as const },
      { id: "quick-adaptation", title: "Quick Adaptation", description: "Comfortable switching contexts, tech stacks, and team workflows without losing momentum.", icon: "RefreshCw" as const },
      { id: "hard-working", title: "Hard Working", description: "Consistent effort on real projects — from late-night debugging to polished deliverables.", icon: "Flame" as const },
      { id: "communication", title: "Good Communication", description: "Clear updates, active listening, and constructive discussions with teammates and stakeholders.", icon: "MessageCircle" as const },
      { id: "team-collaboration", title: "Team Collaboration", description: "Thrives in team environments — code reviews, pair sessions, and shared ownership of outcomes.", icon: "Users" as const },
      { id: "responsibility", title: "Responsibility", description: "Takes ownership of tasks end-to-end — from planning and implementation to follow-through.", icon: "Shield" as const },
    ],
    growthMindset: [
      { id: "analytical", text: "Continuously improving analytical thinking" },
      { id: "problem-solving", text: "Working on deeper problem-solving approaches" },
      { id: "attention-detail", text: "Paying more attention to detail during final reviews" },
      { id: "feedback", text: "Always learning from feedback and real projects" },
    ],
    interests: [
      { id: "movies", label: "Watching Movies", emoji: "🎬", description: "Storytelling, cinematography & unwinding after a long coding session." },
      { id: "football", label: "Football", emoji: "⚽", description: "Team spirit on the pitch — strategy, energy & competition." },
      { id: "badminton", label: "Badminton", emoji: "🏸", description: "Quick reflexes and focus — a great way to reset the mind." },
      { id: "gaming", label: "Gaming", emoji: "🎮", description: "Competitive play, teamwork & staying sharp under pressure." },
    ],
    favoriteGames: [
      { id: "valorant", name: "Valorant", rank: "Diamond Rank" },
      { id: "pubg", name: "PUBG Mobile", rank: "Conqueror / Bậc Thầy Siêu Việt" },
    ],
    roadmap: [
      { year: "2026", title: "Backend & Infrastructure", items: ["Advanced Backend Engineering", "System Design", "Docker & DevOps"], status: "in-progress" as const },
      { year: "2027", title: "AI Engineering", items: ["AI Engineering", "LLM Applications", "RAG Systems", "AI Agents"], status: "upcoming" as const },
      { year: "2028+", title: "Product & SaaS", items: ["Build AI-powered SaaS products", "Fullstack + AI Engineer", "Product Development"], status: "future" as const },
    ],
    skillGroups: [
      { category: "Frontend", skills: ["Next.js", "React", "Vue", "AngularJS", "Tailwind CSS"] },
      { category: "Backend", skills: ["NestJS", "ExpressJS", "NodeJS", "Spring Boot"] },
      { category: "Database", skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB"] },
      { category: "Tools", skills: ["GitHub", "Docker", "Postman", "Cursor"] },
      { category: "Soft Skills", skills: ["Communication", "Teamwork", "Time Management", "Presentation", "Learning"] },
    ],
    experiences: [
      { id: "techwave-fresher", company: "Techwave Solutions Company", role: "Fresher Fullstack Developer", period: "09/2025 - 06/2026", location: "Hanoi, Vietnam", description: "Developed and maintained fullstack web applications using React, Next.js, and NestJS. Collaborated with cross-functional teams to deliver CMS and e-commerce solutions." },
      { id: "remote-contract", company: "Remote Contract", role: "Fullstack Developer", period: "07/2025 - 11/2026", location: "Remote", description: "Built AI-powered chat systems and customer support platforms. Integrated LLM APIs and deployed containerized services with Docker." },
      { id: "ecoit-intern", company: "EcoIT Company", role: "Intern Fullstack Developer", period: "02/2025 - 06/2025", location: "Hanoi, Vietnam", description: "Assisted in developing internal tools with Spring Boot and MySQL. Participated in code reviews and agile sprint ceremonies." },
    ],
    projects: [
      { id: "kennek-ai-chat", title: "Kennek AI Chat System", description: "Intelligent chat platform with real-time messaging, context-aware AI responses, and a modern React interface.", role: "Fullstack Developer", featured: true },
      { id: "mobileworld", title: "MobileWorld Phone Sales Software", description: "Phone sales management with inventory tracking, order processing, and sales analytics for retail stores.", role: "Fullstack Developer", featured: true },
      { id: "techwave-cms", title: "Techwave CMS", description: "Content management with role-based access control and an intuitive admin dashboard.", role: "Fullstack Developer", featured: false },
      { id: "techwave-ecommerce", title: "Techwave Ecommerce", description: "E-commerce platform with product catalog, cart, order management, and payment integration.", role: "Fullstack Developer", featured: false },
      { id: "ai-customer-support", title: "AI Customer Support Chat", description: "Automated support with AI inquiries, ticket routing, and human handoff capabilities.", role: "Fullstack Developer", featured: true },
    ],
    awards: [
      { id: "hackathon-2024", title: "TOP 20 BEST CONTESTANTS", event: "Hackathon Frontend Master 2024", year: "2024", description: "Recognized among the top 20 for outstanding frontend skills and creative problem-solving." },
    ],
    education: [
      { id: "utt", institution: "University of Transport Technology", degree: "Information Technology", period: "03/2026 – Present", gpa: "", description: "Bachelor's degree in Information Technology." },
      { id: "fpt-poly", institution: "FPT Polytechnic College", degree: "Software Development", period: "09/2022 – 09/2025", gpa: "3.3/4", description: "Associate degree in Software Development with strong academic performance." },
    ],
    ui: {
      hero: { viewProjects: "View projects", contact: "Contact", scroll: "Scroll" },
      sections: {
        about: { code: "ABOUT", title: "About", subtitle: "Builder, learner, heading toward AI engineering.", highlights: "Highlights" },
        strengths: { code: "STRENGTH", title: "Strengths" },
        skills: { code: "SKILLS", title: "Skills & tech", subtitle: "Tools I use regularly." },
        experience: { code: "WORK", title: "Experience" },
        projects: { code: "PROJECTS", title: "Projects", subtitle: "Shipped and in-progress work.", featured: "Featured", private: "Private / In development" },
        beyond: { code: "LIFE", title: "Beyond coding", subtitle: "Personal interests & passions.", games: "Favorite games" },
        growth: { code: "GROWTH", title: "Growing", subtitle: "Areas I'm actively improving." },
        roadmap: { code: "ROADMAP", title: "Roadmap", subtitle: "Where I'm headed in the next few years." },
        award: { code: "AWARD", title: "Awards" },
        education: { code: "EDU", title: "Education" },
        contact: { code: "CONTACT", title: "Contact", subtitle: "Open to opportunities, collaborations, and conversations." },
      },
      roadmapStatus: { "in-progress": "In progress", upcoming: "Up next", future: "Future" },
      contact: {
        email: "Email", phone: "Phone", location: "Location", github: "GitHub",
        namePh: "Name", emailPh: "Email", subjectPh: "Subject", messagePh: "Message",
        submit: "Send message", submitted: "Sent ✓", note: "Demo form — email directly for a faster response.",
      },
      dock: [
        { id: "about", label: "About", href: "#about" },
        { id: "skills", label: "Skills", href: "#skills" },
        { id: "projects", label: "Projects", href: "#projects" },
        { id: "life", label: "Life", href: "#beyond-coding" },
        { id: "roadmap", label: "Roadmap", href: "#roadmap" },
        { id: "contact", label: "Contact", href: "#contact" },
      ],
      commandLinks: [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Beyond coding", href: "#beyond-coding" },
        { label: "Growing", href: "#growth" },
        { label: "Roadmap", href: "#roadmap" },
        { label: "Awards", href: "#awards" },
        { label: "Education", href: "#education" },
        { label: "Contact", href: "#contact" },
      ],
      palette: { jumpTo: "Jump to", placeholder: "Find section...", noMatch: "No match" },
      footer: { builtWith: "Built with Next.js" },
      lang: { label: "Language", vi: "VI", en: "EN" },
    },
  },
} as const;

export type Translation = (typeof translations)[Locale];
