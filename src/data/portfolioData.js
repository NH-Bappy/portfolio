export const personalInfo = {
  name: "NH-Bappy",
  fullName: "Naimul Hasan",
  title: "CREATIVE DIRECTOR & TECH INNOVATOR",
  subTitle: "Full-Stack Developer, Graphic Designer & Motion Artist",
  tagline: "Full-Stack Developer specializing in MERN & PERN Stack  Building scalable web applications with real-world impact",
  location: "Dhaka / Remote Worldwide",
  status: "OPEN TO INTERNSHIP & JUNIOR ROLES",
  email: "naimulhasandev@gmail.com",
  phone: "01715355149",
  phoneSecondary: "01537173631",
  behance: "https://behance.net/angele-snez",
  linkedin: "https://www.linkedin.com/in/nh-bappy",
  github: "https://github.com/NH-Bappy",
  twitter: "https://x.com/Naimul22Bappy",
  facebook: "https://www.facebook.com/naimulhasan.bappy.75",
  resumeUrl: "/resume.pdf",
  futureGoal: "Applying AI & Machine Learning to Robotics, Smart Machines & Intelligent Systems.",
  bioShort: "I am a 24-year-old creative Full-Stack Developer currently pursuing a 4-year Diploma in Computer Science and Technology. Alongside my academic journey, I have completed a 2-year professional course in full-stack development and continuously strengthen my skills through self-learning and hands-on projects.",

  bioLong: "I specialize in building modern, scalable, and high-performance web applications using technologies like MERN and PERN stacks. My work often combines creativity with technical precision—transforming bold visual ideas into clean, interactive, and lightning-fast user experiences.",

  bioLong2nd: "With experience ranging from backend systems and databases to real-time dashboards and IoT-integrated solutions, I enjoy developing complete end-to-end systems that solve real-world problems. I am passionate about learning cutting-edge technologies and aim to grow into an innovative developer who bridges design, performance, and functionality."
};

export const marqueeItems = [
  "✦ FULLSTACK DEVELOPMENT",
  "✦ CLOUDINARY",
  "✦ UI/UX DESIGN",
  "✦ REACT & VITE",
  "✦ TAILWIND CSS",
  "✦ GSAP ANIMATIONS",
  "✦ FRAMER MOTION",
  "✦ SSLCOMMAERZ IN integration",

];

export const experiences = [
  {
    period: "July 2026",
    role: "Smart RFID Library Management System (Physical IoT)",
    company: "Full-Stack IoT & Hardware System Project",
    description: "An end-to-end physical IoT library management system powered by an ESP32 RFID scanner, Node.js/Express backend, PostgreSQL database, and a real-time React web dashboard.",
    points: [
      "Hardware Unit (IoT): Programmed ESP32 NodeMCU with RC522 RFID reader, 16x2 I2C LCD display, audio buzzer, and dual LEDs for physical instant scan feedback.",
      "Backend & Database: Built Node.js & Express REST APIs with PostgreSQL database managed via Prisma ORM, securing admin endpoints using JWT and Bcrypt encryption.",
      "Real-Time WebSockets: Implemented Socket.IO (v4) to instantly broadcast physical RFID card and book tag scans from the scanner to the web UI without page refreshes.",
      "Live React Dashboard: Designed a real-time web application using React 19, Tailwind CSS, Recharts for analytics, and Framer Motion for micro-animations.",
      "Automated Workflows: Automated book borrowing, returning, overdue tracking, and student RFID tag assignment with real-time physical status feedback."
    ],
    techStack: [
      "ESP32 C++",
      "RC522 RFID",
      "LiquidCrystal I2C",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Socket.IO",
      "React 19",
      "Tailwind CSS",
      "JWT"
    ]
  },
  {
    period: "2025 - 2026",
    role: "E-Commerce & Inventory Management REST API Backend",
    company: "Full-Stack Node.js, Express (v5), MongoDB & Socket.io Backend",
    description: "A production-ready, feature-rich RESTful API and real-time backend server managing end-to-end e-commerce operations including user authentication, product catalog, variants, discounts, shopping cart, orders, SSLCommerz payment integration, logistics, invoice generation, and real-time notifications.",
    points: [
      "Core Architecture & API Routing: Engineered Express.js (v5) REST API (/api/v1) matrix with cookie parsing, CORS permissions, AuthGuard JWT verification, and centralized error handling.",
      "Authentication & Security: Built secure auth workflows featuring Access & Refresh JWTs in HTTP-only cookies, password hashing with Bcrypt, and Nodemailer OTP email verification.",
      "Catalog, Cart & Logistics: Designed Mongoose (v8) schemas for Users, Products, Variants, Categories, Discounts, Coupons, Cart management, Courier logistics, and Orders with status tracking.",
      "Payments & Invoicing: Integrated SSLCommerz payment gateway (cards, bKash, Nagad) with IPN callbacks, alongside BWIP-JS barcode and QRCode generator for digital invoice tracking.",
      "Real-Time WebSockets & Media: Deployed Socket.io (v4) for targeted private room live notifications and Multer + Cloudinary media integration for optimized image management."
    ],
    techStack: [
      "Node.js",
      "Express.js v5",
      "MongoDB",
      "Mongoose v8",
      "Socket.io v4",
      "JWT & Bcrypt",
      "SSLCommerz",
      "Cloudinary",
      "Multer",
      "Nodemailer",
      "BWIP-JS",
      "QRCode",
      "Joi & Axios"
    ]
  },
  {
    period: "2025 - 2026",
    role: "macOS Web OS & Interactive Collaborative Workspace",
    company: "Interactive Virtual Operating System & Web Desktop App",
    description: "A modern, high-performance macOS-inspired Web Desktop Application built with React 19, Vite, Tailwind CSS v4, GSAP, and Zustand, providing an interactive virtual operating system interface for developers to register and showcase custom tools, applications, and external websites.",
    points: [
      "OS Kernel & Plugin System Architecture: Architected an open desktop ecosystem separating core OS kernel (window management, z-index layering, taskbar) from modular user application plugins.",
      "GSAP-React Window Synchronization: Solved complex state-animation syncing using a WindowWrapper Higher-Order Component (HOC) and GSAP Draggable for 60fps physics-based window manipulation.",
      "Zustand Global State Engine: Built centralized immutable state management via Zustand & Immer to control window lifecycles, dynamic z-index focus depth stacking, and Finder filesystem tree navigation.",
      "Native Desktop App Suite: Developed interactive built-in applications including Finder file manager, Safari browser, Terminal CLI emulator, Calculator, Photos gallery, and PDF renderers.",
      "Multi-Pattern Integration Engine: Built 4 integration models enabling contributors to embed native React tools, sandboxed iframe web apps, desktop launchers, and dynamic Finder file extensions."
    ],
    techStack: [
      "React 19",
      "Vite 7",
      "Tailwind CSS v4",
      "GSAP & Draggable",
      "Zustand & Immer",
      "Lucide React",
      "React PDF",
      "Day.js"
    ]
  }
];

export const education = [
  {
    period: "Jan 2023 – Dec 2026",
    degree: "Diploma in Engineering, Computer Science",
    institution: "Graphic Arts Institute",
    logo: "/gai-logo.png",
    grade: "3.5/4",
    activities: [
      "Hackathons and Programming Competitions",
      "Group Project Development",
      "Collaborative Coding and Problem Solving"
    ],
    detail: "Participated in multiple hackathons and programming competitions, building collaborative group software applications including a faculty-praised Final Year Project (FYP). Strengthened core competencies in full-stack development, algorithms, and real-world system architecture.",
    type: "Education",
    badge: "Academic Diploma",
    icon: "GraduationCap"
  },
  {
    period: "May 2024 – Jun 2026",
    degree: "Diploma, Full-Stack Web Developer",
    institution: "Creative IT Institute",
    logo: "/creative-it-logo.png",
    activities: [
      "Participated in hands-on lab sessions, real-world projects, & collaborative tasks",
      "Engaged in problem-solving exercises, coding practice, & full-stack teamwork",
      "Contributed to project-based learning and practical implementation of modern web tech"
    ],
    detail: "Completed a 12-month Full-Stack Web Development Diploma mastering React.js, Node.js, Express, PHP, and MongoDB. Built over 50+ practical projects and lab applications with focus on RESTful APIs, responsive UI layouts, and production deployment.",
    type: "Certification",
    badge: "Professional Diploma",
    icon: "Award"
  },
  {
    period: "Issued Nov 2025 · Expires Nov 2030",
    degree: "National Skills Certificate in Web Design and Development for Freelancing (Level 3)",
    institution: "National Skills Development Authority, NSDA",
    logo: "/nsda-logo.jpg",
    credentialId: "NSC-ICT-WDDF-L3-001990",
    detail: "Government-accredited Level 3 National Skills Certification in Web Design and Development for Freelancing issued by the National Skills Development Authority (NSDA), Bangladesh. Demonstrates professional competency in modern web standards, responsive UI development, user experience optimization, and industry-standard freelancing workflows.",
    type: "Certification",
    badge: "Govt. Level 3 Cert",
    icon: "Award"
  },
  {
    period: "3 Days · 8 Hours Masterclass",
    degree: "Generative AI Mastermind",
    institution: "Outskill",
    logo: "/outskill-logo.png",
    detail: "Completed an intensive 3-day (8-hour) Masterclass in Generative AI hosted by Outskill. Mastered hands-on prompt engineering, AI workflow automation, LLM integrations, AI image & asset generation, and leveraging generative models to accelerate software engineering productivity.",
    type: "Certification",
    badge: "AI Masterclass",
    icon: "Award"
  },
  {
    period: "8 Months Course · Currently Learning",
    degree: "Sigma 1.0 - Data Structures & Algorithms (DSA)",
    institution: "Apna College",
    logo: "/apna-college-logo.png",
    activities: [
      "Problem Solving, Recursion, Backtracking & Bit Manipulation",
      "Linear & Advanced DS (LinkedLists, Stacks, Queues, Heaps, Hashmaps)",
      "Dynamic Programming (Memoization, Tabulation, Knapsack, LCS)"
    ],
    detail: "Enrolled in the 8-month intensive Sigma 1.0 course by Apna College focusing on Data Structures & Algorithms (DSA), complexity analysis, OOP principles, greedy strategies, and dynamic programming.",
    type: "Certification",
    badge: "In Progress · DSA",
    icon: "Award"
  }
];



export const skillCategories = [
  { id: "all", name: "All Sections" },
  { id: "frontend", name: "Front-End" },
  { id: "backend", name: "Back-End" },
  { id: "database", name: "Database" },
  { id: "cloud", name: "Cloud" },
  { id: "tools", name: "Tools" }
];

export const skillSections = [
  {
    id: "frontend",
    title: "FRONT-END",
    subtitle: "Front-End Technologies",
    description: "Building responsive, high-performance & visually stunning user interfaces.",
    icon: "Code2",
    badgeColor: "bg-[var(--color-accent-crimson)] text-white",
    skills: [
      { name: "React 19 & Next.js", tag: "Framework" },
      { name: "JavaScript / TypeScript", tag: "Core Language" },
      { name: "Tailwind CSS & SCSS", tag: "Styling & UI" },
      { name: "GSAP & Framer Motion", tag: "Animation" },
      { name: "HTML5 & Modern CSS3", tag: "Web Standards" },
      { name: "Redux Toolkit & Zustand", tag: "State Management" }
    ]
  },
  {
    id: "backend",
    title: "BACK-END",
    subtitle: "Back-End Technologies",
    description: "Architecting scalable server-side logic, microservices & robust APIs.",
    icon: "Server",
    badgeColor: "bg-[var(--color-accent-salmon)] text-white",
    skills: [
      { name: "Node.js & Express", tag: "Runtime & Framework" },
      { name: "RESTful APIs & GraphQL", tag: "API Architecture" },
      { name: "NestJS & Microservices", tag: "Framework" },
      { name: "JWT & OAuth 2.0", tag: "Auth & Security" },
      { name: "WebSockets & Socket.io", tag: "Real-Time Comms" }
    ]
  },
  {
    id: "database",
    title: "DATABASE",
    subtitle: "Database Systems & ORMs",
    description: "Managing relational & NoSQL databases with high performance and data integrity.",
    icon: "Database",
    badgeColor: "bg-[var(--color-accent-yellow)] text-[var(--color-border)]",
    skills: [
      { name: "PostgreSQL & MySQL", tag: "Relational DB" },
      { name: "MongoDB & Mongoose", tag: "NoSQL DB" },
      { name: "Redis", tag: "In-Memory & Cache" },
      { name: "Prisma & Drizzle ORM", tag: "Data Modeling" },
      { name: "Supabase & Firebase", tag: "BaaS & Cloud DB" }
    ]
  },
  {
    id: "cloud",
    title: "CLOUD",
    subtitle: "Cloud & DevOps Infrastructure",
    description: "Deploying applications, containerizing environments & cloud services.",
    icon: "Cloud",
    badgeColor: "bg-[var(--color-accent-sage)] text-white",
    skills: [
      { name: "Vercel & Netlify", tag: "Edge Deployment" },
      { name: "Render", tag: "Cloud Hosting" }
    ]
  },
  {
    id: "tools",
    title: "TOOLS",
    subtitle: "Development Tools & Utilities",
    description: "Development utilities, design platforms & workflow tools.",
    icon: "Wrench",
    badgeColor: "bg-[var(--color-accent-crimson)] text-white",
    skills: [
      { name: "Git & GitHub", tag: "Version Control" },
      { name: "Postman & Swagger", tag: "API Testing" },
      { name: "Vite & Turbopack", tag: "Build Tools" },
      { name: "Linux & Bash Shell", tag: "CLI & Environment" }
    ]
  }
];

export const projects = [
  {
    id: "proj-1",
    title: "Smart RFID Library Management System",
    subtitle: "Full-Stack IoT & Real-Time Library Automation System",
    category: "fullstack",
    categoryLabel: "Full-Stack IoT System",
    year: "2026",
    image: "/rfid-dashboard.png",
    galleryImages: [
      "/rfid-dashboard.png",
      "/rfid-console.png",
      "/rfid-students.png"
    ],
    gradient: "from-blue-950 via-teal-900 to-indigo-950",
    tags: ["ESP32 C++", "RC522 RFID", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "Socket.IO", "React 19", "Tailwind CSS", "JWT"],
    description: "An end-to-end Full-Stack IoT Library Management System powered by an ESP32 RFID scanner, Node.js/Express backend, PostgreSQL database, and a real-time React web dashboard.",
    aboutDetail: "The Smart RFID Library Management System eliminates manual paper logs and long lines at libraries. Students swipe smart RFID keycards on an ESP32 scanner at the counter while books carry RFID tags. The ESP32 extracts tag UIDs over Wi-Fi, queries the PostgreSQL database via Prisma ORM, emits live WebSocket events to the React web dashboard, and displays real-time physical feedback via a 16x2 LCD display, buzzer sound signals, and status LEDs.",
    whatIUsed: [
      {
        category: "Hardware & Microcontroller (IoT)",
        tools: ["ESP32 NodeMCU", "RC522 RFID Reader", "LiquidCrystal 16x2 I2C", "Buzzer & Dual LEDs", "Arduino C++"],
        description: "Physical scanning unit communicating over Wi-Fi via HTTP POST with real-time LCD screen and audio status feedback."
      },
      {
        category: "Backend & Database",
        tools: ["Node.js", "Express.js v5", "PostgreSQL", "Prisma ORM", "Socket.IO v4", "JWT & Bcrypt"],
        description: "RESTful API endpoints, real-time WebSocket event broadcasting, relational database schema, and secure admin authentication."
      },
      {
        category: "Frontend Web Dashboard",
        tools: ["React 19", "Vite", "Tailwind CSS v4", "Socket.IO Client", "Lucide React", "Framer Motion", "Recharts"],
        description: "Live interactive dashboard receiving instantaneous scan events, statistical charts, overdue alerts, and catalog management."
      }
    ],
    impact: [
      { metric: "Real-Time", label: "Instant Socket.IO Sync from Hardware to Web" },
      { metric: "100%", label: "Automated Borrowing & Returning Process" },
      { metric: "< 500ms", label: "Physical RFID Scan & LCD Response Time" },
      { metric: "PostgreSQL", label: "Type-Safe Relational DB via Prisma ORM" }
    ],
    highlights: [
      "Automated RFID Checkout: Tap RFID student card or book tag to borrow or return books instantly.",
      "Real-Time WebSocket Synchronization: Socket.IO notifies the web app as soon as a card is scanned.",
      "Physical Status Feedback: Audio buzzer beeps, dual red/green LEDs signal, and 16x2 LCD display updates instantly on hardware.",
      "Secure Admin Access & Analytics: JWT authentication for managing catalog, tracking overdue books, and monitoring analytics charts."
    ],
    liveUrl: "https://full-stack-app-orcin.vercel.app/",
    githubUrl: "https://github.com/NH-Bappy/full-stack-app"
  },
  {
    id: "proj-2",
    title: "Personal Movie Tracker",
    subtitle: "Full-Stack Movie Discovery & Kanban Watchlist App",
    category: "fullstack",
    categoryLabel: "Full-Stack Web App",
    year: "2026",
    image: "/movie-tracker-home.png",
    galleryImages: [
      "/movie-tracker-home.png"
    ],
    gradient: "from-rose-950 via-crimson-900 to-amber-950",
    tags: ["React 19", "Vite", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "Neon DB", "JWT", "Zod", "TMDB API", "Tailwind CSS"],
    description: "A full-stack, responsive web application for searching movies, viewing cinematic details, and tracking your movie-watching progress with a categorized Kanban-style watchlist.",
    aboutDetail: "Personal Movie Tracker is an interactive full-stack movie management and discovery platform. The application automatically resolves TMDB movie metadata and synchronizes it with a cloud PostgreSQL database (hosted on Neon DB via Prisma ORM) when authenticated, offering a fallback local-storage experience for guests. Users can browse popular movies, search dynamically, inspect rich movie backdrops, and organize their watch progress across 4 Kanban columns (Plan to Watch, Watching, Completed, Dropped).",
    whatIUsed: [
      {
        category: "Frontend Architecture & UI",
        tools: ["React 19", "Vite", "React Router DOM v7", "Custom CSS", "Glassmorphism"],
        description: "Responsive cinema UI system featuring dynamic backdrop overlays, TMDB API integration, live search filtering, and Kanban board components."
      },
      {
        category: "Backend, Database & Security",
        tools: ["Node.js", "Express.js", "Prisma Client ORM", "Serverless PostgreSQL (Neon DB)", "JWT", "BcryptJS", "Zod"],
        description: "RESTful API endpoints with schema validation, hybrid TMDB metadata sync in local DB, JWT authentication, and secure watchlist management."
      }
    ],
    impact: [
      { metric: "TMDB API", label: "Dynamic Movie Metadata & Backdrop Overlays" },
      { metric: "4 Columns", label: "Kanban-Style Watchlist Progress Tracker" },
      { metric: "Hybrid Sync", label: "Cloud PostgreSQL Sync & Guest Fallback" },
      { metric: "JWT & Bcrypt", label: "Secure User Auth & Persistent Sessions" }
    ],
    highlights: [
      "User Authentication & Profiles: Safe JWT authentication flow with password hashing (BcryptJS) and persistent session management.",
      "Immersive Movie Discovery: Renders popular movies from TMDB API with dynamic search and instant watchlist status indicators.",
      "Cinematic Details Page: High-quality backdrop overlays, release year, runtime, ratings, genre tags, and inline watch state controls.",
      "Kanban Watchlist Dashboard: Group movies into 4 columns (Plan to Watch, Watching, Completed, Dropped) with real-time PostgreSQL database sync."
    ],
    liveUrl: "https://personal-movie-tracker-absm.vercel.app/",
    githubUrl: "https://github.com/NH-Bappy/personal_movie_tracker"
  },
  {
    id: "proj-3",
    title: "Typing Speed Test Game",
    subtitle: "Interactive Modern Typing Speed & Accuracy Tester",
    category: "frontend",
    categoryLabel: "Front-End Web App",
    year: "2026",
    image: "/typing-game.png",
    galleryImages: [
      "/typing-game.png"
    ],
    gradient: "from-amber-900 via-stone-900 to-orange-950",
    tags: ["JavaScript ES6+", "HTML5", "CSS3", "DOM Algorithms", "WPM Calculation", "Google Fonts"],
    description: "An interactive, modern, and minimalist web-based typing speed test app (inspired by Monkeytype) built using Vanilla HTML5, CSS3, and JavaScript.",
    aboutDetail: "Typing Speed Test Game is a sleek, distraction-free typing productivity web application inspired by Monkeytype. Built with pure Vanilla JavaScript (ES6+), HTML5, and CSS3, it calculates real-time typing speed (WPM) over a 30-second test window. It features live character highlighting, dynamic DOM-based cursor tracking, vertical line auto-scrolling, spacebar navigation, full backspace error correction, and focus protection.",
    whatIUsed: [
      {
        category: "Structure & Accessibility",
        tools: ["HTML5", "SVG Icons", "Tabindex Focus"],
        description: "Semantic project structure, custom focus management with tabindex='0' for keyboard events, and SVG elements."
      },
      {
        category: "Styling & Animations",
        tools: ["CSS3", "CSS Variables", "Blur Filters", "Roboto Mono Font"],
        description: "Modern dark mode theme, CSS variable design tokens, smooth caret cursor transitions, and focus blur overlay effects."
      },
      {
        category: "JavaScript Engine",
        tools: ["Vanilla JS (ES6+)", "DOM Mutation Algorithms", "BoundingClientRect API"],
        description: "Real-time keyup typing algorithms, accurate WPM calculation, backspace handling, live timer countdown, and fluid caret positioning."
      }
    ],
    impact: [
      { metric: "30-Second", label: "Automated Countdown Timer" },
      { metric: "Real-Time", label: "DOM Caret Smooth Motion & Line Auto-Scroll" },
      { metric: "Accurate", label: "Dynamic WPM & Accuracy Calculation Engine" },
      { metric: "Focus Lock", label: "CSS Blur Focus Protection System" }
    ],
    highlights: [
      "30-Second Countdown: Automated game timer triggered instantly on first keystroke.",
      "Accurate WPM Calculation: Only fully and correctly typed words contribute to final performance score.",
      "Visual Feedback & Focus Lock: Real-time letter colors (White = Correct, Red = Incorrect) and automatic blur overlay when unfocused.",
      "Smooth Caret & Scroll: Fluid cursor movement using getBoundingClientRect() and automatic vertical line scrolling."
    ],
    liveUrl: "https://typing-game-eosin-theta.vercel.app/",
    githubUrl: "https://github.com/NH-Bappy/typing-game"
  },
  {
    id: "proj-4",
    title: "E-Commerce & Inventory REST API Backend",
    subtitle: "Production-Ready E-Commerce & Real-Time Backend API",
    category: "backend",
    categoryLabel: "Back-End REST API",
    year: "2026",
    image: "/rfid-console.png",
    galleryImages: [
      "/rfid-console.png"
    ],
    gradient: "from-teal-950 via-cyan-950 to-indigo-950",
    tags: ["Node.js", "Express.js v5", "MongoDB", "Mongoose v8", "Socket.io v4", "JWT & Bcrypt", "SSLCommerz", "Cloudinary", "Multer"],
    description: "A production-ready, feature-rich RESTful API and real-time backend server managing end-to-end e-commerce operations, payments, logistics, and authentication.",
    aboutDetail: "Engineered a production-ready Express.js (v5) REST API backend matrix with cookie parsing, CORS permissions, AuthGuard JWT verification, and centralized error handling. Features Mongoose schemas for Users, Products, Variants, Discounts, Cart, Courier logistics, SSLCommerz payment gateway (cards, bKash, Nagad) with IPN callbacks, BWIP-JS invoice barcodes, and Socket.io live notifications.",
    whatIUsed: [
      {
        category: "Backend Framework & Architecture",
        tools: ["Node.js", "Express.js v5", "JWT & Bcrypt", "Joi & Axios"],
        description: "RESTful API matrix, AuthGuard middleware, HTTP-only cookie JWT auth, and schema validation."
      },
      {
        category: "Database & Real-Time Comms",
        tools: ["MongoDB", "Mongoose v8", "Socket.io v4", "Cloudinary"],
        description: "Relational Mongoose models, private room WebSocket live notifications, and Cloudinary media uploading."
      }
    ],
    impact: [
      { metric: "SSLCommerz", label: "Integrated Payment Gateway & Callback IPN" },
      { metric: "Socket.io v4", label: "Real-Time Targeted Private Room Notifications" },
      { metric: "Express v5", label: "High-Performance RESTful Routing Matrix" },
      { metric: "JWT + Bcrypt", label: "HTTP-Only Secure Authentication & AuthGuard" }
    ],
    highlights: [
      "Core Architecture: Engineered Express.js (v5) REST API matrix with AuthGuard JWT verification and centralized error handling.",
      "Authentication & Security: Access & Refresh JWTs in HTTP-only cookies, password hashing with Bcrypt, and Nodemailer OTP verification.",
      "Payments & Invoicing: Integrated SSLCommerz payment gateway with IPN callbacks and BWIP-JS barcode invoice generation.",
      "Real-Time WebSockets: Deployed Socket.io (v4) for targeted private room live notifications and Multer + Cloudinary image management."
    ],
    liveUrl: "https://github.com/NH-Bappy",
    githubUrl: "https://github.com/NH-Bappy"
  }
];
