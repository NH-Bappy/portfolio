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
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-4 border-b-2 border-[var(--color-border)] font-tech text-[11px] sm:text-xs font-bold tracking-widest text-[var(--color-text-muted)] uppercase text-center sm:text-left">
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-1.5 hover:text-[var(--color-accent-crimson)] transition-colors cursor-pointer text-decoration-none"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--color-accent-salmon)] shrink-0" />
              <span>CONTACT: {personalInfo.phone}</span>
            </a>
            <span className="flex items-center gap-1.5 text-xs sm:text-sm md:text-base text-[var(--color-accent-crimson)]">
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
              <Download className="w-3.5 h-3.5 shrink-0" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Huge Poster Title */}
          <div className="py-6 sm:py-12 text-center relative">
            {/* Flourish Stars */}
            <Sparkles className="hidden sm:block absolute top-2 left-4 sm:left-12 w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-accent-yellow)] animate-star-pulse" />
            <Sparkles className="hidden sm:block absolute bottom-2 right-4 sm:right-12 w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-accent-salmon)] animate-star-pulse" />

            <h2 className="font-tech text-xs sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[var(--color-accent-sage)] mb-2">
              ✦ Full-Stack Web Developer ✦
            </h2>

            <h1 className="font-display font-extrabold text-3xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-[var(--color-text-main)] leading-none drop-shadow-sm">
              NAIMUL HASAN
            </h1>

            <p className="mt-4 max-w-2xl mx-auto font-tech text-xs sm:text-base text-[var(--color-text-muted)] font-medium px-2">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Category Pill Bar (From Image 1 middle navigation) */}
          <div className="pt-4 border-t-2 border-[var(--color-border)] flex items-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 justify-start sm:justify-center pb-1 sm:pb-0">
            {posterCategories.map((cat, i) => (
              <span
                key={i}
                className="badge-pill hover:bg-[var(--color-accent-crimson)] hover:text-white transition-all cursor-pointer text-[10px] sm:text-xs"
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
            <div className="retro-card p-5 sm:p-6 flex-1 flex flex-col justify-between relative group">

              {/* Illustration Avatar (Exact Retro Poster Style) */}
              <div className="relative my-4 w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[450px] mx-auto flex flex-col items-center justify-center">

                {/* Top-Left Badge */}
                <div className="absolute -top-3 left-2 z-20">
                  <span className="px-3 py-1 bg-[var(--color-card)] text-[var(--color-text-main)] border-2 border-[var(--color-border)] rounded-full font-tech font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-sm flex items-center gap-1">
                    ★ DA JUNIOR / DEV
                  </span>
                </div>

                {/* Outer Cream Card Box */}
                <div className="relative w-full rounded-[24px] sm:rounded-[32px] border-2 border-[var(--color-border)] bg-[var(--color-card-secondary)] shadow-[5px_5px_0px_var(--color-border)] overflow-hidden">

                  {/* Inner Split Circle with Sparkles */}
                  <div className="relative w-full aspect-square rounded-full overflow-hidden m-0">

                    {/* Split Background: Left = Crimson, Right = Salmon */}
                    <div className="absolute inset-0 flex">
                      <div className="w-1/2 h-full bg-[var(--color-accent-crimson)]" />
                      <div className="w-1/2 h-full bg-[var(--color-accent-salmon)]" />
                    </div>

                    {/* Scattered Gold Sparkle Stars */}
                    <div className="absolute inset-0 pointer-events-none">
                      <span className="absolute top-[12%] left-[10%] text-[var(--color-accent-yellow)] text-lg animate-star-pulse">✦</span>
                      <span className="absolute top-[30%] left-[5%] text-[var(--color-accent-yellow)] text-sm animate-star-pulse" style={{animationDelay:'0.4s'}}>✦</span>
                      <span className="absolute top-[55%] left-[8%] text-[var(--color-accent-yellow)] text-base animate-star-pulse" style={{animationDelay:'0.8s'}}>✦</span>
                      <span className="absolute top-[72%] left-[15%] text-[var(--color-accent-yellow)] text-xs animate-star-pulse" style={{animationDelay:'1.2s'}}>✦</span>
                      <span className="absolute top-[18%] left-[22%] text-[var(--color-accent-yellow)] text-xs animate-star-pulse" style={{animationDelay:'0.6s'}}>✦</span>
                      <span className="absolute top-[42%] left-[18%] text-[var(--color-accent-yellow)] text-sm animate-star-pulse" style={{animationDelay:'1s'}}>✦</span>
                      <span className="absolute top-[10%] right-[10%] text-[var(--color-accent-yellow)] text-base animate-star-pulse" style={{animationDelay:'0.2s'}}>✦</span>
                      <span className="absolute top-[28%] right-[8%] text-[var(--color-accent-yellow)] text-xs animate-star-pulse" style={{animationDelay:'0.9s'}}>✦</span>
                      <span className="absolute top-[50%] right-[6%] text-[var(--color-accent-yellow)] text-sm animate-star-pulse" style={{animationDelay:'0.5s'}}>✦</span>
                      <span className="absolute top-[68%] right-[14%] text-[var(--color-accent-yellow)] text-lg animate-star-pulse" style={{animationDelay:'1.3s'}}>✦</span>
                      <span className="absolute top-[20%] right-[22%] text-[var(--color-accent-yellow)] text-base animate-star-pulse" style={{animationDelay:'0.7s'}}>✦</span>
                      <span className="absolute top-[38%] right-[20%] text-[var(--color-accent-yellow)] text-xs animate-star-pulse" style={{animationDelay:'1.5s'}}>✦</span>
                    </div>

                    {/* Profile Photo - slightly scaled down inside circle */}
                    <div className="absolute inset-0 flex items-end justify-center">
                      <img
                        src="/profile.png"
                        alt="Profile"
                        className="w-[88%] h-[92%] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        style={{ filter: 'drop-shadow(0 -2px 12px rgba(0,0,0,0.3))' }}
                      />
                    </div>
                  </div>

                  {/* Bottom-Right Compass Badge */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-[var(--color-card)] p-2 sm:p-2.5 rounded-full border-2 border-[var(--color-border)] shadow-md z-10 flex items-center justify-center">
                    <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-accent-crimson)] animate-spin-slow" />
                  </div>
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
                  <span className="font-tech font-extrabold text-[10px] sm:text-[11px] uppercase tracking-widest text-[var(--color-accent-crimson)]">
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
                  <Sparkles className="w-6 h-6 text-[var(--color-accent-yellow)] shrink-0" />
                  <h3 className="font-display font-bold text-3xl sm:text-5xl uppercase tracking-tight text-[var(--color-text-main)]">
                    HELLO !
                  </h3>
                </div>

                <h4 className="font-tech font-bold text-base sm:text-xl text-[var(--color-accent-crimson)] mb-6">
                  I'm {personalInfo.name} &amp; I'm a Full-Stack Web Developer.
                </h4>

                <p className="font-body text-xs sm:text-base leading-relaxed text-[var(--color-text-main)] mb-6">
                  {personalInfo.bioShort}
                </p>

                <p className="font-body text-xs sm:text-base leading-relaxed text-[var(--color-text-muted)] mb-6">
                  {personalInfo.bioLong}
                </p>

                {personalInfo.bioLong2nd && (
                  <p className="font-body text-xs sm:text-base leading-relaxed text-[var(--color-text-muted)] mb-8">
                    {personalInfo.bioLong2nd}
                  </p>
                )}
              </div>

              {/* CTA Action Buttons */}
              <div className="pt-6 border-t-2 border-[var(--color-border)] flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-[var(--color-accent-crimson)] text-white font-tech font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md border-2 border-[var(--color-border)] shadow-[4px_4px_0px_var(--color-border)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_var(--color-border)] transition-all flex items-center justify-center gap-2 text-center"
                >
                  <Compass className="w-4 h-4 shrink-0" />
                  <span>Explore Projects</span>
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3 bg-[var(--color-card-secondary)] text-[var(--color-text-main)] font-tech font-bold text-xs sm:text-sm uppercase tracking-wider rounded-md border-2 border-[var(--color-border)] shadow-[4px_4px_0px_var(--color-border)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_var(--color-border)] transition-all flex items-center justify-center gap-2 text-center"
                >
                  <Send className="w-4 h-4 text-[var(--color-accent-salmon)] shrink-0" />
                  <span>Get in Touch</span>
                </a>

                <a
                  href="#about"
                  className="px-4 py-2.5 text-[var(--color-text-muted)] hover:text-[var(--color-accent-crimson)] font-tech font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 transition-colors sm:ml-auto"
                >
                  <span>Learn More</span>
                  <ArrowDown className="w-4 h-4 shrink-0" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
