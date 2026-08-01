export const personalInfo = {
  name: "Naimul Hasan",
  title: "CREATIVE DIRECTOR & TECH INNOVATOR",
  subTitle: "Full-Stack Developer, Graphic Designer & Motion Artist",
  tagline: "Crafting digital experiences where retro art meets modern high-performance code.",
  location: "Paris / Remote Worldwide",
  status: "Available for New Projects & Freelance",
  email: "naimulhasandev@gmail.com",
  behance: "behance.net/angele-snez",
  linkedin: "linkedin.com/in/angele-snez",
  github: "github.com/angele-snez",
  twitter: "x.com/angele_artcode",
  bioShort: "I am a 25-year-old creative developer & DA Junior with a deep passion for digital illustration, motion design, and cutting-edge web applications. I turn bold visual concepts into clean, interactive, lightning-fast code.",
  bioLong: "With a background in both fine art graphics and computer science, I blend retro editorial aesthetic with ultra-fluid modern web engineering. Whether building custom React web apps with GSAP & Framer Motion, designing brand visual identities, or constructing 3D/game motion elements, I craft solutions that captivate and perform."
};

export const marqueeItems = [
  "✦ FULLSTACK DEVELOPMENT",
  "✦ UI/UX DESIGN",
  "✦ MOTION GRAPHICS",
  "✦ RETRO EDITORIAL ART",
  "✦ REACT & VITE",
  "✦ TAILWIND CSS",
  "✦ GSAP ANIMATIONS",
  "✦ FRAMER MOTION",
  "✦ 3D & GAME ART",
  "✦ BRANDING & ILLUSTRATION"
];

export const experiences = [
  {
    period: "September 2023 - Present",
    role: "Freelance Creative Engineer & DA Junior",
    company: "UPMI PRODUCTION, BRAVE PARKS, LACOSTE, SHINY BEESBEE",
    description: "Designing graphic charters, visual identities, character designs, website prototypes, and full-stack interactive motion web apps for high-profile clients."
  },
  {
    period: "January 2023 - August 2023",
    role: "Motion Designer & Front-End Developer",
    company: "EXPERIENCES POSTERS / LACOSTE S.A.",
    description: "Conceived dynamic vector animations, custom UI micro-interactions, canvas shaders, and editorial promo layouts for global product launches."
  },
  {
    period: "September 2021 - November 2022",
    role: "UI/UX Designer & Illustrator",
    company: "TPAT-SANK",
    description: "Engineered web page graphic mockups, vector brand iconography, user flows, and interactive React component design systems."
  }
];

export const education = [
  {
    period: "2021 - 2023",
    degree: "GOBELINS Paris (FINER)",
    detail: "Mastery in Digital Creation, Interactive Web Engineering, Motion & Graphic Design."
  },
  {
    period: "2018 - 2021",
    degree: "SDAM Balbiere (Titre VII)",
    detail: "Digital Graphic Designer specialized in interactive web, 3D modeling, & animation."
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
      { name: "Redux Toolkit & Zustand", tag: "State Management" },
      { name: "Vue.js", tag: "UI Framework" }
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
      { name: "Python & FastAPI / Django", tag: "API Engine" },
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
      { name: "AWS (S3, EC2, Lambda)", tag: "Cloud Infrastructure" },
      { name: "Docker & Containers", tag: "Containerization" },
      { name: "Vercel & Netlify", tag: "Edge Deployment" },
      { name: "GitHub Actions", tag: "CI/CD Automation" },
      { name: "Nginx & Cloudflare", tag: "Web Server & CDN" }
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
      { name: "Figma & UI/UX Design", tag: "Design Tool" },
      { name: "Postman & Swagger", tag: "API Testing" },
      { name: "Vite & Turbopack", tag: "Build Tools" },
      { name: "Linux & Bash Shell", tag: "CLI & Environment" },
      { name: "Photoshop & Illustrator", tag: "Graphic Art" }
    ]
  }
];

export const projects = [
  {
    id: "proj-1",
    title: "Aura Cinematic - Mythic Poster Engine",
    subtitle: "Dark Neo-Retro Web Application",
    category: "web",
    categoryLabel: "Web App & Motion",
    year: "2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    gradient: "from-emerald-950 via-teal-900 to-rose-950",
    tags: ["React 19", "Vite", "GSAP", "Tailwind CSS", "Canvas"],
    description: "An interactive storytelling poster engine combining high-speed React rendering with canvas shader particle effects and vintage typography layouts.",
    highlights: [
      "Custom WebGL shader background inspired by retro comic ink",
      "Dynamic typography engine with real-time text deformation",
      "Instant response 60fps Framer Motion layout transitions"
    ],
    liveUrl: "https://example.com/aura",
    githubUrl: "https://github.com/example/aura"
  },
  {
    id: "proj-2",
    title: "Crimson Odyssey - Game Art & UI System",
    subtitle: "Concept Art & Interactive Design System",
    category: "motion",
    categoryLabel: "Game & 3D Art",
    year: "2025",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop",
    gradient: "from-rose-950 via-crimson-900 to-amber-950",
    tags: ["Figma", "Blender", "After Effects", "Photoshop"],
    description: "A complete character & environment graphic design system built for an indie mythic adventure RPG, complete with HUD UI components and animated menus.",
    highlights: [
      "Designed over 40+ unique vector character concepts & armor sets",
      "Interactive Figma component library with dark/light variants",
      "Rendered 3D environment turnarounds in Blender & EEVEE engine"
    ],
    liveUrl: "https://example.com/crimson",
    githubUrl: "https://github.com/example/crimson"
  },
  {
    id: "proj-3",
    title: "Vogue Vintage - Editorial E-Commerce",
    subtitle: "Retro Newspaper Style E-Commerce Platform",
    category: "web",
    categoryLabel: "Full-Stack Web App",
    year: "2025",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop",
    gradient: "from-amber-900 via-stone-900 to-orange-950",
    tags: ["React", "Tailwind CSS", "Framer Motion", "TanStack"],
    description: "An editorial e-commerce platform styled like a 1970s print magazine, featuring seamless state management, interactive product drag showcase, and retro sound effects.",
    highlights: [
      "Custom page turn and paper crinkle Framer Motion physics",
      "TanStack table & query integrations for instant stock sorting",
      "Accessible dark/light newspaper ink mode switcher"
    ],
    liveUrl: "https://example.com/vogue",
    githubUrl: "https://github.com/example/vogue"
  },
  {
    id: "proj-4",
    title: "Psyche Motion - 3D Character Showcase",
    subtitle: "Interactive WebGL & Model Viewer",
    category: "3d",
    categoryLabel: "3D & Motion",
    year: "2024",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop",
    gradient: "from-teal-950 via-cyan-950 to-indigo-950",
    tags: ["Three.js", "Blender", "GSAP", "React"],
    description: "Interactive web showcase featuring 3D character turntables with dynamic lighting controls, post-processing filters, and pose animations.",
    highlights: [
      "Custom PBR shaders with real-time bloom and chromatic aberration",
      "GSAP camera orbit controls with smooth damping",
      "Optimized GLTF asset loading for ultra-fast load times"
    ],
    liveUrl: "https://example.com/psyche",
    githubUrl: "https://github.com/example/psyche"
  }
];
