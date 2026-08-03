import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Search,
  Bell,
  Globe,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Heart,
  Eye,
  Layers,
  Cpu,
  Zap,
  ShieldCheck,
  TrendingUp,
  Sliders,
  Folder,
  Grid,
  Calendar,
  Settings,
  LogOut,
  Home,
  Star,
  CheckCircle2
} from 'lucide-react';
import { projects, personalInfo } from '../data/portfolioData';

export default function ProjectDetailPage({ project, onBack, onSelectProject }) {
  const [selectedImage, setSelectedImage] = useState(project?.galleryImages?.[0] || project?.image);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (project) {
      setSelectedImage(project.galleryImages?.[0] || project.image);
    }
  }, [project]);

  if (!project) return null;

  // Find index for prev/next project navigation
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const getCleanUrl = (url) => {
    if (!url) return 'app.demo.com';
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  };

  return (
    <div className="min-h-screen bg-[#F4F5F7] dark:bg-[#090D14] text-[var(--color-text-main)] pt-20 pb-16 relative">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">

        {/* TOP LEVEL CONTAINER WITH LEFT DASHBOARD PILL SIDEBAR + MAIN CONTENT GRID */}
        <div className="flex flex-col lg:flex-row items-start gap-6">

          {/* 1. LEFT COLUMN: FLOATING DARK PILL SIDEBAR NAVIGATION (MATCHING REFERENCE IMAGE LEFT SIDEBAR) */}
          <aside className="w-full lg:w-20 bg-[#111111] text-white rounded-3xl p-3 sm:p-4 flex lg:flex-col items-center justify-between shrink-0 shadow-2xl lg:sticky lg:top-24 z-30">
            {/* Top Brand Logo */}
            <button
              onClick={onBack}
              className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center font-display font-extrabold text-xl shadow-md hover:scale-110 transition-transform cursor-pointer"
              title="Return to Portfolio"
            >
              ✦
            </button>

            {/* Middle Nav Icons */}
            <div className="flex lg:flex-col items-center gap-4 sm:gap-6 py-2 sm:py-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`p-3 rounded-2xl transition-all cursor-pointer ${activeTab === 'overview' ? 'bg-white text-black shadow-lg scale-105' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                title="Overview & Welcome"
              >
                <Grid className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActiveTab('features')}
                className={`p-3 rounded-2xl transition-all cursor-pointer ${activeTab === 'features' ? 'bg-white text-black shadow-lg scale-105' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                title="Key Highlights"
              >
                <Calendar className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActiveTab('stack')}
                className={`p-3 rounded-2xl transition-all cursor-pointer ${activeTab === 'stack' ? 'bg-white text-black shadow-lg scale-105' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                title="Tech Stack"
              >
                <Folder className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActiveTab('analytics')}
                className={`p-3 rounded-2xl transition-all cursor-pointer ${activeTab === 'analytics' ? 'bg-white text-black shadow-lg scale-105' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                title="Analytics & Stats"
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Return / Back Button */}
            <button
              onClick={onBack}
              className="p-3 rounded-2xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Back to Portfolio"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </aside>

          {/* 2. MAIN DASHBOARD CONTENT AREA */}
          <main className="flex-1 w-full space-y-6">

            {/* TOP HEADER BAR (MATCHING REFERENCE IMAGE SEARCH + USER PROFILE BAR) */}
            <div className="bg-white dark:bg-[#121824] rounded-3xl p-3 sm:p-4 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative w-full sm:max-w-md bg-[#F4F5F7] dark:bg-[#1A2232] rounded-full px-4 py-2 flex items-center gap-3 border border-transparent focus-within:border-[var(--color-accent-crimson)] transition-colors">
                <Search className="w-4 h-4 text-gray-400 shrink-0" />
                <input
                  type="text"
                  placeholder={`Search in ${project.title} modules, tools, stack...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent font-tech text-xs text-[var(--color-text-main)] outline-none"
                />
              </div>

              {/* Header Right Profile & Controls */}
              <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                <div className="p-2.5 rounded-full bg-[#F4F5F7] dark:bg-[#1A2232] text-gray-600 dark:text-gray-300 relative cursor-pointer hover:scale-105 transition-transform">
                  <Bell className="w-4 h-4" />
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 animate-ping" />
                </div>

                <div className="px-3 py-1.5 rounded-full bg-[#F4F5F7] dark:bg-[#1A2232] font-tech text-xs font-bold text-gray-600 dark:text-gray-300 flex items-center gap-1.5 select-none">
                  <Globe className="w-3.5 h-3.5 text-[var(--color-accent-salmon)]" />
                  <span>EN</span>
                </div>

                {/* Profile Pill */}
                <div className="flex items-center gap-2.5 bg-[#F4F5F7] dark:bg-[#1A2232] px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700">
                  <img
                    src="/profile.png"
                    alt={personalInfo.name}
                    className="w-7 h-7 rounded-full object-cover border border-black/20 shrink-0"
                  />
                  <span className="font-tech text-xs font-bold uppercase tracking-wider text-[var(--color-text-main)] truncate">
                    {personalInfo.name}
                  </span>
                </div>
              </div>
            </div>

            {/* DASHBOARD WORKSPACE GRID (CENTER MAIN CONTENT + RIGHT SIDEBAR PANEL) */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">

              {/* CENTER COLUMN: 8 COLS (HERO WELCOME CARD + 3 FEATURE CARDS + ANALYTICS GRAPH) */}
              <div className="xl:col-span-8 space-y-6">

                {/* HERO WELCOME BANNER CARD (MATCHING "HI JOHN DOE" CARD IN REFERENCE IMAGE) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-[#121824] rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
                >
                  <div className="space-y-3 max-w-xl text-center md:text-left">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                      <span className="px-3 py-1 rounded-full bg-[var(--color-accent-crimson)] text-white font-tech text-[10px] font-bold uppercase tracking-wider">
                        ✦ {project.categoryLabel}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#F4F5F7] dark:bg-[#1A2232] text-[var(--color-accent-salmon)] font-tech text-[10px] font-bold uppercase tracking-wider border border-gray-200 dark:border-gray-700">
                        YEAR // {project.year}
                      </span>
                    </div>

                    <h1 className="font-display font-extrabold text-2xl sm:text-4xl uppercase tracking-tight text-[var(--color-text-main)] leading-tight">
                      Hi {personalInfo.name}.
                    </h1>

                    <p className="font-body text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      Welcome to <strong className="text-[var(--color-text-main)]">{project.title}</strong>. {project.subtitle}. Engineered for maximum scalability, real-time interactivity, and high performance.
                    </p>

                    <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-black text-white dark:bg-white dark:text-black font-tech font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:scale-105 transition-all flex items-center gap-2"
                      >
                        <span>View Details / Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-[#F4F5F7] dark:bg-[#1A2232] text-[var(--color-text-main)] font-tech font-bold text-xs uppercase tracking-wider rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-200 transition-colors flex items-center gap-2"
                      >
                        <Github className="w-3.5 h-3.5 shrink-0" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Side Illustration / Graphic Mockup Frame */}
                  <div className="relative w-full md:w-56 aspect-video md:aspect-square rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-slate-950 shrink-0 shadow-lg flex items-center justify-center">
                    <img
                      src={selectedImage}
                      alt={project.title}
                      className="w-full h-full object-contain bg-slate-950 p-1"
                    />
                    <div className="absolute top-2 right-2 bg-black/80 text-white text-[9px] font-tech font-bold px-2 py-0.5 rounded-full backdrop-blur">
                      ✦ FEATURED
                    </div>
                  </div>
                </motion.div>

                {/* MIDDLE ROW: 3 FEATURE CARDS (MATCHING "TRENDING BLOGS" ROW IN REFERENCE IMAGE) */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between px-1">
                    <h3 className="font-display font-bold text-lg uppercase tracking-tight text-[var(--color-text-main)]">
                      Trending Highlights &amp; Modules
                    </h3>
                    <span className="font-tech text-xs text-[var(--color-text-muted)] cursor-pointer hover:text-[var(--color-accent-crimson)]">
                      View All
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Card 1: Light Card */}
                    <div className="bg-white dark:bg-[#121824] rounded-2xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-between space-y-4 hover:translate-y-[-2px] transition-transform">
                      <div>
                        <span className="font-tech text-[10px] font-bold uppercase text-[var(--color-accent-salmon)] tracking-wider">
                          ✦ MODULE 01
                        </span>
                        <h4 className="font-display font-bold text-base text-[var(--color-text-main)] mt-1">
                          {project.highlights?.[0] || 'Interactive System UI'}
                        </h4>
                        <p className="font-body text-xs text-gray-500 dark:text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between font-tech text-[10px] text-gray-400">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5 text-[var(--color-accent-sage)]" />
                          <span>1.5K</span>
                        </div>
                        <span className="font-bold text-[var(--color-accent-crimson)]">UX ARCHITECTURE</span>
                      </div>
                    </div>

                    {/* Card 2: Black Card Variant (Directly matching "Typography" Black Card in reference image!) */}
                    <div className="bg-[#111111] text-white rounded-2xl p-5 shadow-xl flex flex-col justify-between space-y-4 border border-black hover:translate-y-[-2px] transition-transform">
                      <div>
                        <span className="font-tech text-[10px] font-bold uppercase text-[var(--color-accent-salmon)] tracking-wider">
                          ✦ MODULE 02 (CORE)
                        </span>
                        <h4 className="font-display font-bold text-base text-white mt-1">
                          {project.highlights?.[1] || 'Tech Stack Architecture'}
                        </h4>
                        <p className="font-body text-xs text-gray-300 mt-2 line-clamp-2 leading-relaxed">
                          {project.aboutDetail || project.subtitle}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-gray-800 flex items-center justify-between font-tech text-[10px] text-gray-400">
                        <div className="flex items-center gap-1">
                          <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
                          <span>1.2K</span>
                        </div>
                        <span className="font-bold text-white uppercase">✦ PRODUCTION READY</span>
                      </div>
                    </div>

                    {/* Card 3: Light Card */}
                    <div className="bg-white dark:bg-[#121824] rounded-2xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-between space-y-4 hover:translate-y-[-2px] transition-transform">
                      <div>
                        <span className="font-tech text-[10px] font-bold uppercase text-[var(--color-accent-sage)] tracking-wider">
                          ✦ MODULE 03
                        </span>
                        <h4 className="font-display font-bold text-base text-[var(--color-text-main)] mt-1">
                          {project.highlights?.[2] || 'Performance & Security'}
                        </h4>
                        <p className="font-body text-xs text-gray-500 dark:text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                          High performance rendering with zero layout shift and modular state handling.
                        </p>
                      </div>

                      <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between font-tech text-[10px] text-gray-400">
                        <div className="flex items-center gap-1">
                          <Zap className="w-3.5 h-3.5 text-yellow-500" />
                          <span>1.8K</span>
                        </div>
                        <span className="font-bold text-[var(--color-accent-salmon)]">LIGHTHOUSE 99%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ANALYTICS SECTION (MATCHING "ANALYTICS" LINE GRAPH IN REFERENCE IMAGE) */}
                <div className="bg-white dark:bg-[#121824] rounded-3xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display font-extrabold text-lg uppercase tracking-tight text-[var(--color-text-main)]">
                        Analytics &amp; System Performance
                      </h3>
                      <p className="font-tech text-xs text-gray-400">Response time, uptime &amp; Lighthouse metrics over time</p>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-black text-white dark:bg-white dark:text-black font-tech text-xs font-bold uppercase">
                      Weekly
                    </span>
                  </div>

                  {/* SVG Smooth Curve Line Graph (Matching Analytics curve in reference image) */}
                  <div className="h-44 w-full relative pt-4 flex items-end">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
                      {/* Gradient fill under curve */}
                      <defs>
                        <linearGradient id="analyticsGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#D9383A" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#D9383A" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M 0,90 Q 75,40 150,85 T 300,50 T 420,20 T 500,60 L 500,120 L 0,120 Z"
                        fill="url(#analyticsGrad)"
                      />

                      {/* Smooth Line Curve */}
                      <path
                        d="M 0,90 Q 75,40 150,85 T 300,50 T 420,20 T 500,60"
                        fill="none"
                        stroke="#D9383A"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />

                      {/* Data Point Badges */}
                      <circle cx="150" cy="85" r="5" fill="#111" stroke="#fff" strokeWidth="2" />
                      <circle cx="300" cy="50" r="5" fill="#111" stroke="#fff" strokeWidth="2" />
                      <circle cx="420" cy="20" r="6" fill="#D9383A" stroke="#fff" strokeWidth="2" />

                      {/* Floating Tooltip Pill on Peak */}
                      <g transform="translate(390, -10)">
                        <rect width="60" height="22" rx="6" fill="#111" />
                        <text x="30" y="15" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="Space Grotesk" fontWeight="bold">99.4%</text>
                      </g>
                    </svg>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: 4 COLS (PANEL STAT CARDS MATCHING REFERENCE IMAGE RIGHT COLUMN) */}
              <div className="xl:col-span-4 space-y-6">

                {/* STAT CARDS STACK (DIRECTLY MATCHING "ARTICLES POSTED: 80", "CLAPS: 1.5K", "FOLLOWERS: 972") */}
                <div className="space-y-3">

                  {/* Stat Card 1 */}
                  <div className="bg-white dark:bg-[#121824] rounded-2xl p-4 border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between gap-3 hover:translate-x-1 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-[#F4F5F7] dark:bg-[#1A2232] text-[var(--color-accent-crimson)]">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-tech text-[10px] font-bold text-gray-400 uppercase block">
                          PERFORMANCE SCORE
                        </span>
                        <span className="font-display font-extrabold text-xl text-[var(--color-text-main)] block">
                          99 / 100
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>

                  {/* Stat Card 2 */}
                  <div className="bg-white dark:bg-[#121824] rounded-2xl p-4 border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between gap-3 hover:translate-x-1 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-[#F4F5F7] dark:bg-[#1A2232] text-[var(--color-accent-salmon)]">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-tech text-[10px] font-bold text-gray-400 uppercase block">
                          RESPONSE LATENCY
                        </span>
                        <span className="font-display font-extrabold text-xl text-[var(--color-text-main)] block">
                          &lt; 35 ms
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>

                  {/* Stat Card 3 */}
                  <div className="bg-white dark:bg-[#121824] rounded-2xl p-4 border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-between gap-3 hover:translate-x-1 transition-transform">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-[#F4F5F7] dark:bg-[#1A2232] text-[var(--color-accent-sage)]">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-tech text-[10px] font-bold text-gray-400 uppercase block">
                          SYSTEM RELIABILITY
                        </span>
                        <span className="font-display font-extrabold text-xl text-[var(--color-text-main)] block">
                          99.99% Uptime
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>

                </div>

                {/* TECH STACK & CONTRIBUTORS AVATARS (MATCHING "FOLLOWERS" SECTION IN REFERENCE IMAGE) */}
                <div className="bg-white dark:bg-[#121824] rounded-3xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-sm uppercase text-[var(--color-text-main)]">
                      Technology Stack &amp; Tools
                    </h4>
                    <span className="font-tech text-[10px] text-gray-400 uppercase">View All</span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-[#F4F5F7] dark:bg-[#1A2232] font-tech text-[11px] font-bold text-[var(--color-text-main)] border border-gray-200 dark:border-gray-700"
                      >
                        ✦ {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BOTTOM PROMO CARD (MATCHING "BUY PRO ACCOUNT TO EXPLORE PREMIUM FEATURES" IN REFERENCE IMAGE) */}
                <div className="bg-gradient-to-br from-white to-[#F4F5F7] dark:from-[#121824] dark:to-[#1A2232] rounded-3xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm text-center space-y-4">
                  <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center mx-auto text-lg font-bold shadow-md">
                    ✦
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-base uppercase text-[var(--color-text-main)]">
                      Experience Live Production Build
                    </h4>
                    <p className="font-body text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                      Launch the interactive production environment and inspect live APIs.
                    </p>
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-black text-white dark:bg-white dark:text-black font-tech font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Launch Live Demo Now</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>

              </div>

            </div>

          </main>

        </div>

        {/* 3. SOLID BRIGHT ORANGE BOTTOM BANNER (DIRECTLY MATCHING THE VIBRANT ORANGE BANNER AT THE BOTTOM OF THE REFERENCE IMAGE!) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FF8C00] text-white rounded-3xl p-8 sm:p-14 text-center shadow-2xl space-y-4 my-8 relative overflow-hidden"
        >
          <div className="relative z-10 space-y-3 max-w-3xl mx-auto">
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight leading-none drop-shadow-sm">
              Thanks for watching
            </h2>

            <p className="font-tech text-base sm:text-xl uppercase tracking-wider font-bold opacity-95">
              Appreciate your feedback
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-black text-white font-tech font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Launch Live Build</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-tech font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4 shrink-0 text-black" />
                <span>View Source Code</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* PREVIOUS / NEXT CASE STUDY FOOTER */}
        <div className="pt-4 border-t-2 border-gray-200 dark:border-gray-800 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="bg-white dark:bg-[#121824] p-4 sm:p-5 rounded-2xl border border-gray-200 dark:border-gray-800 flex items-center justify-between text-left hover:border-[var(--color-accent-crimson)] transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <ChevronLeft className="w-6 h-6 text-[var(--color-accent-crimson)] group-hover:-translate-x-1 transition-transform shrink-0" />
              <div className="min-w-0">
                <span className="font-tech text-[10px] font-bold uppercase text-gray-400 block">
                  Previous Project
                </span>
                <span className="font-display font-bold text-xs sm:text-sm text-[var(--color-text-main)] truncate block">
                  {prevProject.title}
                </span>
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="bg-white dark:bg-[#121824] p-4 sm:p-5 rounded-2xl border border-gray-200 dark:border-gray-800 flex items-center justify-between text-left sm:text-right hover:border-[var(--color-accent-crimson)] transition-colors cursor-pointer group"
          >
            <div className="flex items-center justify-start sm:justify-end gap-3 min-w-0 sm:ml-auto">
              <div className="min-w-0">
                <span className="font-tech text-[10px] font-bold uppercase text-gray-400 block">
                  Next Project
                </span>
                <span className="font-display font-bold text-xs sm:text-sm text-[var(--color-text-main)] truncate block">
                  {nextProject.title}
                </span>
              </div>
              <ChevronRight className="w-6 h-6 text-[var(--color-accent-crimson)] group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}
