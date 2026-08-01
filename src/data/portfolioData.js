export const personalInfo = {
  name: "Naimul Hasan",
  title: "CREATIVE DIRECTOR & TECH INNOVATOR",
  subTitle: "Full-Stack Developer, Graphic Designer & Motion Artist",
  tagline: "Full-Stack Developer specializing in MERN & PERN Stack  Building scalable web applications with real-world impact",
  location: "Dhaka / Remote Worldwide",
  status: "OPEN TO INTERNSHIP & JUNIOR ROLES",
  email: "naimulhasandev@gmail.com",
  phone: "01715355149",
  behance: "behance.net/angele-snez",
  linkedin: "linkedin.com/in/angele-snez",
  github: "github.com/angele-snez",
  twitter: "x.com/angele_artcode",
  resumeUrl: "/resume.pdf",
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
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-technology-background-41554-large.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop"
    ],
    gradient: "from-emerald-950 via-teal-900 to-rose-950",
    tags: ["React 19", "Vite", "GSAP", "Tailwind CSS", "Canvas"],
    description: "An interactive storytelling poster engine combining high-speed React rendering with canvas shader particle effects and vintage typography layouts.",
    aboutDetail: "Aura Cinematic was born out of a desire to merge 1970s editorial poster art with modern high-performance WebGL animations. The goal was to build a full-featured web app where users could customize retro film poster layouts with live canvas particle effects, dynamic typography scaling, and real-time color palette controls.",
    whatIUsed: [
      {
        category: "Front-End & Logic",
        tools: ["React 19", "Vite JS", "JavaScript ES6+"],
        description: "Core component structure, reactive state management, and lightning-fast Vite bundler."
      },
      {
        category: "Animations & Graphics",
        tools: ["GSAP 3", "Framer Motion", "HTML5 Canvas Shader"],
        description: "60fps liquid motion physics, hero entrance animations, and particle background math."
      },
      {
        category: "Styling & UI Systems",
        tools: ["Tailwind CSS v4", "Custom Design Tokens", "Google Fonts"],
        description: "Custom dark neo-retro color tokens, typography scales, and responsive grid layouts."
      }
    ],
    impact: [
      { metric: "60 FPS", label: "Fluid Animation Performance" },
      { metric: "+85%", label: "Faster Initial Page Load Speed" },
      { metric: "100%", label: "Responsive Layout Across Devices" },
      { metric: "4.9/5", label: "User Satisfaction Score" }
    ],
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
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1000&auto=format&fit=crop"
    ],
    gradient: "from-rose-950 via-crimson-900 to-amber-950",
    tags: ["Figma", "Blender", "After Effects", "Photoshop"],
    description: "A complete character & environment graphic design system built for an indie mythic adventure RPG, complete with HUD UI components and animated menus.",
    aboutDetail: "Crimson Odyssey is a comprehensive visual design system crafted for a dark mythic RPG. It covers character sheet vector concepts, weapon icons, health HUD gauges, inventory matrices, and 3D environment turnaround videos rendered in Blender.",
    whatIUsed: [
      {
        category: "UI/UX & Design Systems",
        tools: ["Figma", "Adobe Illustrator", "Photoshop"],
        description: "Vector UI component kits, dark mythic color palettes, and HUD elements."
      },
      {
        category: "3D & Motion Production",
        tools: ["Blender 3D", "After Effects", "EEVEE Engine"],
        description: "3D character turntables, UI micro-interaction teasers, and particle VFX."
      }
    ],
    impact: [
      { metric: "40+", label: "Unique Vector Character Assets" },
      { metric: "120+", label: "Figma Design Components" },
      { metric: "3D Turnarounds", label: "Fully Rendered Blender Models" }
    ],
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
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-vertical-video-of-a-futuristic-city-43285-large.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop"
    ],
    gradient: "from-amber-900 via-stone-900 to-orange-950",
    tags: ["React", "Tailwind CSS", "Framer Motion", "TanStack"],
    description: "An editorial e-commerce platform styled like a 1970s print magazine, featuring seamless state management, interactive product drag showcase, and retro sound effects.",
    aboutDetail: "Vogue Vintage blends nostalgic retro print typography with cutting-edge front-end engineering. It offers custom product filtering, drag-and-drop catalog views, instant search, and interactive article-style product detail pages.",
    whatIUsed: [
      {
        category: "Front-End Architecture",
        tools: ["React", "JavaScript ES6", "TanStack Query"],
        description: "Optimized state management, instant catalog filtering, and API data fetching."
      },
      {
        category: "Styling & Motion",
        tools: ["Tailwind CSS", "Framer Motion"],
        description: "Editorial grid layouts, newspaper column design, and paper-fold transitions."
      }
    ],
    impact: [
      { metric: "10k+", label: "Monthly Catalog Views" },
      { metric: "< 1s", label: "Instant Product Search Filtering" },
      { metric: "99.9%", label: "Uptime & Fast CDN Delivery" }
    ],
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
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-41553-large.mp4",
    galleryImages: [
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
    ],
    gradient: "from-teal-950 via-cyan-950 to-indigo-950",
    tags: ["Three.js", "Blender", "GSAP", "React"],
    description: "Interactive web showcase featuring 3D character turntables with dynamic lighting controls, post-processing filters, and pose animations.",
    aboutDetail: "Psyche Motion is an interactive 3D web model viewer designed for artists and game developers. Users can rotate high-poly 3D models in real-time, adjust studio lighting conditions, toggle custom PBR shaders, and preview custom motion animations.",
    whatIUsed: [
      {
        category: "3D Engine & Shaders",
        tools: ["Three.js", "WebGL", "GLSL Shaders"],
        description: "Real-time PBR rendering, dynamic shadow mapping, and post-processing bloom."
      },
      {
        category: "Modeling & Rigging",
        tools: ["Blender", "ZBrush", "GLTF Pipeline"],
        description: "High-to-low poly baking, character rigging, and asset size compression."
      }
    ],
    impact: [
      { metric: "60 FPS", label: "High-Poly Real-Time WebGL Rendering" },
      { metric: "75%", label: "Asset Compression Ratio" },
      { metric: "WebGL 2.0", label: "Cross-Platform GPU Acceleration" }
    ],
    highlights: [
      "Custom PBR shaders with real-time bloom and chromatic aberration",
      "GSAP camera orbit controls with smooth damping",
      "Optimized GLTF asset loading for ultra-fast load times"
    ],
    liveUrl: "https://example.com/psyche",
    githubUrl: "https://github.com/example/psyche"
  }
];
