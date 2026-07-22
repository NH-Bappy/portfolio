import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Send, FileText, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import MarqueeTicker from './MarqueeTicker';

export default function Hero() {
  const posterCategories = [
    'UI/UX DESIGN',
    'ILLUSTRATION',
    'FRONTEND CODE',
    'MOTION DESIGN',
    '3D GRAPHICS',
    'GAME DESIGN',
    'BRANDING',
    'INTERACTIVE WEB'
  ];

  return (
    <section id="hero" className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 overflow-hidden">
      {/* Background Subtle Accent Grids */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Poster Header Box (Inspired by Image 1 top section) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="retro-card p-6 sm:p-10 mb-8 relative overflow-hidden bg-[var(--color-card)]"
        >
          {/* Top Vintage Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b-2 border-[var(--color-border)] font-tech text-xs font-bold tracking-widest text-[var(--color-text-muted)] uppercase">
            <span>PORTFOLIO // {personalInfo.name}</span>
            <span className="flex items-center gap-1.5 text-[var(--color-accent-crimson)]">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-accent-crimson)] animate-ping" />
              {personalInfo.status}
            </span>
            <span>PARIS &bull; 2026 EDITION</span>
          </div>

          {/* Huge Poster Title */}
          <div className="py-8 sm:py-12 text-center relative">
            {/* Flourish Stars */}
            <Sparkles className="absolute top-2 left-4 sm:left-12 w-8 h-8 text-[var(--color-accent-yellow)] animate-star-pulse" />
            <Sparkles className="absolute bottom-2 right-4 sm:right-12 w-8 h-8 text-[var(--color-accent-salmon)] animate-star-pulse" />

            <h2 className="font-tech text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[var(--color-accent-sage)] mb-2">
              ✦ ARTISTIC DIRECTION & INTERACTIVE CODE ✦
            </h2>

            <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-[var(--color-text-main)] leading-none drop-shadow-sm">
              PORTFOLIO
            </h1>

            <p className="mt-4 max-w-2xl mx-auto font-tech text-sm sm:text-base text-[var(--color-text-muted)] font-medium">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Category Pill Bar (From Image 1 middle navigation) */}
          <div className="pt-4 border-t-2 border-[var(--color-border)] flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {posterCategories.map((cat, i) => (
              <span
                key={i}
                className="badge-pill hover:bg-[var(--color-accent-crimson)] hover:text-white transition-all cursor-pointer"
              >
                ✦ {cat}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Marquee Ticker Banner */}
        <div className="mb-12">
          <MarqueeTicker />
        </div>

        {/* Dual Split Hero Content Card (Inspired by Image 1 & 2 content layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Graphic Avatar & Visual Identity (Image 1 left graphic card) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="retro-card p-6 flex-1 flex flex-col justify-between relative group">

              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 z-10">
                <span className="badge-pill bg-[var(--color-accent-salmon)] text-white border-0 shadow-sm">
                  ★ DA JUNIOR / DEV
                </span>
              </div>

              {/* Illustration Avatar Frame */}
              <div className="relative rounded-lg overflow-hidden border-2 border-[var(--color-border)] bg-[var(--color-card-secondary)] mb-6 aspect-square flex items-center justify-center">
                {/* SVG Visual Stylized Character Illustration */}
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-accent-salmon)" />
                      <stop offset="100%" stopColor="var(--color-accent-crimson)" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-accent-sage)" />
                      <stop offset="100%" stopColor="var(--color-card)" />
                    </linearGradient>
                  </defs>

                  {/* Backdrop art shapes */}
                  <circle cx="200" cy="200" r="160" fill="url(#grad2)" opacity="0.6" />
                  <path d="M 50 350 Q 200 120 350 350" fill="none" stroke="var(--color-border)" strokeWidth="6" />

                  {/* Stylized Anime / Poster Character Silhouette */}
                  <path
                    d="M130 380 Q130 260 200 240 Q270 260 270 380 Z"
                    fill="url(#grad1)"
                  />
                  {/* Head */}
                  <circle cx="200" cy="180" r="55" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="5" />
                  {/* Hair / Cap */}
                  <path
                    d="M145 175 C145 120 255 120 255 175 C240 140 160 140 145 175 Z"
                    fill="var(--color-accent-crimson)"
                  />
                  {/* Glasses */}
                  <rect x="165" y="170" width="30" height="20" rx="4" fill="none" stroke="var(--color-border)" strokeWidth="4" />
                  <rect x="205" y="170" width="30" height="20" rx="4" fill="none" stroke="var(--color-border)" strokeWidth="4" />
                  <line x1="195" y1="180" x2="205" y2="180" stroke="var(--color-border)" strokeWidth="4" />

                  {/* Decorative Retro Sparkles */}
                  <path d="M300 100 L308 120 L328 128 L308 136 L300 156 L292 136 L272 128 L292 120 Z" fill="var(--color-accent-yellow)" />
                  <path d="M80 220 L84 232 L96 236 L84 240 L80 252 L76 240 L64 236 L76 232 Z" fill="var(--color-accent-salmon)" />
                </svg>

                {/* Corner Flourish Icons */}
                <div className="absolute bottom-3 right-3 bg-[var(--color-card)] p-2 rounded border border-[var(--color-border)] shadow">
                  <Compass className="w-5 h-5 text-[var(--color-accent-crimson)] animate-spin-slow" />
                </div>
              </div>

              {/* Bio Highlights */}
              <div className="font-tech text-xs space-y-2 text-[var(--color-text-muted)] border-t border-[var(--color-border-subtle)] pt-4">
                <div className="flex justify-between">
                  <span className="font-bold uppercase">Based In:</span>
                  <span>Paris, France</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold uppercase">Experience:</span>
                  <span>4+ Years Creative Dev</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold uppercase">Focus:</span>
                  <span>React, GSAP, Motion</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hello Intro Card (Image 1 right side intro block) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="retro-card p-6 sm:p-8 flex-1 flex flex-col justify-between">

              <div>
                {/* Section Header */}
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-[var(--color-accent-yellow)]" />
                  <h3 className="font-display font-bold text-3xl sm:text-5xl uppercase tracking-tight text-[var(--color-text-main)]">
                    HELLO !
                  </h3>
                </div>

                <h4 className="font-tech font-bold text-lg sm:text-xl text-[var(--color-accent-crimson)] mb-6">
                  Je m'appelle {personalInfo.name} &amp; je suis DA Junior &amp; Creative Developer.
                </h4>

                <p className="font-body text-sm sm:text-base leading-relaxed text-[var(--color-text-main)] mb-6">
                  {personalInfo.bioShort}
                </p>

                <p className="font-body text-sm sm:text-base leading-relaxed text-[var(--color-text-muted)] mb-8">
                  {personalInfo.bioLong}
                </p>
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-6 border-t-2 border-[var(--color-border)] flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-[var(--color-accent-crimson)] text-white font-tech font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md border-2 border-[var(--color-border)] shadow-[4px_4px_0px_var(--color-border)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_var(--color-border)] transition-all flex items-center gap-2"
                >
                  <Compass className="w-4 h-4" />
                  <span>Explore Projects</span>
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3 bg-[var(--color-card-secondary)] text-[var(--color-text-main)] font-tech font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md border-2 border-[var(--color-border)] shadow-[4px_4px_0px_var(--color-border)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_var(--color-border)] transition-all flex items-center gap-2"
                >
                  <Send className="w-4 h-4 text-[var(--color-accent-salmon)]" />
                  <span>Get in Touch</span>
                </a>

                <a
                  href="#about"
                  className="px-4 py-3 text-[var(--color-text-muted)] hover:text-[var(--color-accent-crimson)] font-tech font-bold text-xs uppercase tracking-wider flex items-center gap-1 transition-colors ml-auto"
                >
                  <span>Learn More</span>
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
