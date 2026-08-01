import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Send, FileText, Compass, Download, Phone, Brain } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import MarqueeTicker from './MarqueeTicker';

export default function Hero() {
  const posterCategories = [
    'node js',
    'next js',
    'typescript',
    'postgresql',
    'react',
    'gsap',
    'c++(DSA)',
    'INTERACTIVE WEB',
    'websockets'
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
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-1.5 hover:text-[var(--color-accent-crimson)] transition-colors cursor-pointer text-decoration-none"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--color-accent-salmon)]" />
              <span>CONTACT: {personalInfo.phone}</span>
            </a>
            <span className="flex items-center gap-1.5 text-xl text-[var(--color-accent-crimson)]">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-accent-crimson)] animate-ping" />
              {personalInfo.status}
            </span>
            <a
              href={personalInfo.resumeUrl || '/resume.pdf'}
              download="Naimul_Hasan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 bg-[var(--color-accent-crimson)] text-white border-2 border-[var(--color-border)] rounded-full font-tech font-bold text-xs uppercase tracking-wider shadow-[2px_2px_0px_var(--color-border)] hover:bg-black hover:translate-y-[-1px] transition-all flex items-center gap-1.5 cursor-pointer text-decoration-none"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Huge Poster Title */}
          <div className="py-8 sm:py-12 text-center relative">
            {/* Flourish Stars */}
            <Sparkles className="absolute top-2 left-4 sm:left-12 w-8 h-8 text-[var(--color-accent-yellow)] animate-star-pulse" />
            <Sparkles className="absolute bottom-2 right-4 sm:right-12 w-8 h-8 text-[var(--color-accent-salmon)] animate-star-pulse" />

            <h2 className="font-tech text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[var(--color-accent-sage)] mb-2">
              ✦ Full-Stack Web Developer ✦
            </h2>

            <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-4xl uppercase tracking-tighter text-[var(--color-text-main)] leading-none drop-shadow-sm">
              NAIMUL HASAN
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
              <div className="relative rounded-full overflow-hidden border-4 border-[var(--color-border)] bg-[var(--color-card-secondary)] mb-6 aspect-square flex items-center justify-center shadow-[4px_4px_0px_var(--color-border)]">
                {/* Profile Photo - Retro Poster Aesthetic */}
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Corner Flourish Icons */}
                <div className="absolute bottom-3 right-3 bg-[var(--color-card)] p-2 rounded-full border-2 border-[var(--color-border)] shadow">
                  <Compass className="w-5 h-5 text-[var(--color-accent-crimson)] animate-spin-slow" />
                </div>
              </div>

              {/* Bio Highlights */}
              <div className="font-tech text-xs space-y-2 text-[var(--color-text-muted)] border-t border-[var(--color-border-subtle)] pt-4 mb-4">
                <div className="flex justify-between">
                  <span className="font-bold uppercase">Based In:</span>
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold uppercase">Focus:</span>
                  <span>MERN &amp; PERN Stack</span>
                </div>
              </div>

              {/* Prominent Future Goal Box on Left Side */}
              <div className="p-4 rounded-xl border-2 border-[var(--color-accent-crimson)] bg-[var(--color-card-secondary)] shadow-[3px_3px_0px_var(--color-accent-crimson)] space-y-2 transition-all">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-[var(--color-accent-crimson)] text-white flex items-center justify-center font-bold shadow-sm shrink-0">
                    <Brain className="w-4 h-4 text-white animate-pulse" />
                  </div>
                  <span className="font-tech font-extrabold text-[11px] uppercase tracking-widest text-[var(--color-accent-crimson)]">
                    ✦ FUTURE GOAL // APPLIED AI ENGINEER
                  </span>
                </div>
                <p className="font-body text-xs sm:text-sm text-[var(--color-text-main)] font-bold leading-relaxed">
                  {personalInfo.futureGoal}
                </p>
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
                  I'm {personalInfo.name} &amp; I'm a Full-Stack Web Developer.
                </h4>

                <p className="font-body text-sm sm:text-base leading-relaxed text-[var(--color-text-main)] mb-6">
                  {personalInfo.bioShort}
                </p>

                <p className="font-body text-sm sm:text-base leading-relaxed text-[var(--color-text-muted)] mb-6">
                  {personalInfo.bioLong}
                </p>

                {personalInfo.bioLong2nd && (
                  <p className="font-body text-sm sm:text-base leading-relaxed text-[var(--color-text-muted)] mb-8">
                    {personalInfo.bioLong2nd}
                  </p>
                )}
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
