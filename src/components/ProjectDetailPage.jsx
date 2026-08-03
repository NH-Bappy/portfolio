import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Image as ImageIcon,
  Wrench,
  TrendingUp,
  Info,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Globe,
  Lock,
  Heart,
  MessageSquare,
  Cpu
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function ProjectDetailPage({ project, onBack, onSelectProject }) {
  const [selectedImage, setSelectedImage] = useState(project?.galleryImages?.[0] || project?.image);
  const [likesCount, setLikesCount] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);

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

  const handleLike = () => {
    if (!hasLiked) {
      setLikesCount(prev => prev + 1);
      setHasLiked(true);
    } else {
      setLikesCount(prev => prev - 1);
      setHasLiked(false);
    }
  };

  const getCleanUrl = (url) => {
    if (!url) return 'app.demo.com';
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-main)] pt-24 pb-20 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* 1. TOP STICKY BREADCRUMB & NAVIGATION BAR */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b-2 border-[var(--color-border)] pb-5">
          <button
            onClick={onBack}
            className="px-4 py-2 bg-[var(--color-card)] border-2 border-[var(--color-border)] rounded-full font-tech font-bold text-xs uppercase tracking-wider text-[var(--color-text-main)] hover:bg-[var(--color-accent-salmon)] hover:text-white transition-all shadow-[2px_2px_0px_var(--color-border)] flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center justify-center sm:justify-end gap-2.5 sm:gap-3 flex-wrap">
            <span className="font-tech text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider hidden md:inline">
              PROJECT {currentIndex + 1} OF {projects.length}
            </span>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[var(--color-accent-crimson)] text-white font-tech font-bold text-xs uppercase tracking-wider rounded-full border-2 border-[var(--color-border)] shadow-[2px_2px_0px_var(--color-border)] hover:bg-black hover:translate-y-[-1px] transition-all flex items-center justify-center gap-2 text-center"
            >
              <ExternalLink className="w-4 h-4 shrink-0" />
              <span>Live Demo</span>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[var(--color-card-secondary)] text-[var(--color-text-main)] font-tech font-bold text-xs uppercase tracking-wider rounded-full border-2 border-[var(--color-border)] shadow-[2px_2px_0px_var(--color-border)] hover:translate-y-[-1px] transition-all flex items-center justify-center gap-2 text-center"
            >
              <Github className="w-4 h-4 shrink-0" />
              <span>Source Code</span>
            </a>
          </div>
        </div>

        {/* 2. CASE STUDY HEADER (BEHANCE PRESENTATION STYLE - INSPIRED BY REFERENCE IMAGE TOP) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 max-w-4xl"
        >
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="badge-pill bg-[var(--color-accent-crimson)] text-white border-0 text-[10px]">
              ✦ {project.categoryLabel}
            </span>
            <span className="badge-pill bg-[var(--color-card-secondary)] text-[var(--color-accent-salmon)] border-[var(--color-border-subtle)] text-[10px]">
              YEAR // {project.year}
            </span>
            <span className="badge-pill bg-[var(--color-card-secondary)] text-[var(--color-accent-sage)] border-[var(--color-border-subtle)] text-[10px]">
              ✦ FULL CASE STUDY
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[var(--color-text-main)] leading-none">
            {project.title}
          </h1>

          <p className="font-tech text-base sm:text-xl text-[var(--color-accent-sage)] font-semibold">
            {project.subtitle}
          </p>

          <p className="font-body text-xs sm:text-base text-[var(--color-text-muted)] leading-relaxed max-w-3xl pt-2">
            Hey creative souls, here is the full showcase, system design, and interactive demo for{' '}
            <strong className="text-[var(--color-text-main)]">{project.title}</strong>. Built with a focus on performance, responsive aesthetics, and modular architecture.
          </p>
        </motion.div>

        {/* 3. CENTERPIECE: DEVICE / BROWSER FRAME MOCKUP (INSPIRED BY CENTRAL TABLET MOCKUP IN IMAGE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 max-w-5xl mx-auto"
        >
          {/* Simulated Device Frame Container */}
          <div className="retro-card rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--color-border)] bg-[var(--color-card)]">

            {/* Simulated Browser Bar */}
            <div className="px-4 py-3 bg-[var(--color-card-secondary)] border-b-2 border-[var(--color-border)] flex items-center justify-between gap-4 select-none">
              {/* Window Controls */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block border border-black/20" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block border border-black/20" />
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block border border-black/20" />
              </div>

              {/* Simulated Browser URL Bar */}
              <div className="flex-1 max-w-md mx-auto bg-[var(--color-bg)] border border-[var(--color-border)] rounded-full px-4 py-1 flex items-center gap-2 font-tech text-xs text-[var(--color-text-muted)] shadow-inner min-w-0">
                <Lock className="w-3 h-3 text-[var(--color-accent-sage)] shrink-0" />
                <span className="truncate">{getCleanUrl(project.liveUrl)}</span>
              </div>

              {/* Right Indicator */}
              <div className="hidden sm:flex items-center gap-2 font-tech text-[10px] font-bold uppercase text-[var(--color-text-muted)]">
                <Globe className="w-3.5 h-3.5 text-[var(--color-accent-salmon)]" />
                <span>LIVE PREVIEW</span>
              </div>
            </div>

            {/* Main Active Screen Display */}
            <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage}
                alt={project.title}
                className="w-full h-full object-contain bg-slate-950 p-1 sm:p-2 transition-all duration-500"
              />
            </div>
          </div>

          {/* Screenshot Thumbnails Strip below Device Frame */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="flex items-center justify-center gap-3 overflow-x-auto no-scrollbar py-2 px-1">
              {project.galleryImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`relative w-24 sm:w-32 aspect-video rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${selectedImage === imgUrl
                    ? 'border-[var(--color-accent-crimson)] scale-105 shadow-[3px_3px_0px_var(--color-border)]'
                    : 'border-[var(--color-border)] opacity-60 hover:opacity-100'
                    }`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-contain bg-slate-950" />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* 4. DASHBOARD WIDGET GRID (INSPIRED BY THE WIDGET CARDS IN REFERENCE IMAGE) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN: 8 COLS (Overview + Features + Tech Stack) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Widget 1: Overview & Story Card */}
            <div className="retro-card p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b-2 border-[var(--color-border)] pb-4">
                <div className="flex items-center gap-2.5">
                  <Info className="w-5 h-5 text-[var(--color-accent-crimson)] shrink-0" />
                  <h2 className="font-display font-extrabold text-xl uppercase tracking-tight text-[var(--color-text-main)]">
                    ✦ CASE STUDY OVERVIEW
                  </h2>
                </div>
                <span className="badge-pill bg-[var(--color-pill-bg)] text-[10px]">
                  BACKGROUND &amp; GOAL
                </span>
              </div>

              <p className="font-body text-sm sm:text-base text-[var(--color-text-main)] leading-relaxed">
                {project.aboutDetail || project.description}
              </p>

              {project.description && project.aboutDetail && (
                <div className="p-4 rounded-lg bg-[var(--color-card-secondary)] border border-[var(--color-border)] font-body text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {project.description}
                </div>
              )}
            </div>

            {/* Widget 2: Key Highlights & Features */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="retro-card p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b-2 border-[var(--color-border)] pb-4">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-accent-sage)] shrink-0" />
                    <h2 className="font-display font-extrabold text-xl uppercase tracking-tight text-[var(--color-text-main)]">
                      ✦ CORE FEATURES & HIGHLIGHTS
                    </h2>
                  </div>
                  <span className="font-tech text-xs font-bold text-[var(--color-accent-crimson)] uppercase">
                    {project.highlights.length} KEY MODULES
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {project.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-[var(--color-card-secondary)] rounded-lg border-2 border-[var(--color-border)] flex items-start gap-3 shadow-[2px_2px_0px_var(--color-border)] hover:translate-y-[-1px] transition-transform"
                    >
                      <div className="w-6 h-6 rounded bg-[var(--color-accent-sage)] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span className="font-body text-xs sm:text-sm text-[var(--color-text-main)] font-medium leading-normal">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Widget 3: Technology Stack & Tools Breakdown */}
            <div className="retro-card p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b-2 border-[var(--color-border)] pb-4">
                <div className="flex items-center gap-2.5">
                  <Wrench className="w-5 h-5 text-[var(--color-accent-yellow)] shrink-0" />
                  <h2 className="font-display font-extrabold text-xl uppercase tracking-tight text-[var(--color-text-main)]">
                    ✦ TECH STACK ARCHITECTURE
                  </h2>
                </div>
                <span className="font-tech text-xs font-bold text-[var(--color-text-muted)] uppercase">
                  STACK BREAKDOWN
                </span>
              </div>

              {project.whatIUsed ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.whatIUsed.map((item, idx) => (
                    <div key={idx} className="p-4 bg-[var(--color-card-secondary)] rounded-xl border-2 border-[var(--color-border)] space-y-2 shadow-[3px_3px_0px_var(--color-border)]">
                      <div className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-2">
                        <h4 className="font-tech text-xs font-bold text-[var(--color-accent-salmon)] uppercase tracking-wider">
                          ✦ {item.category}
                        </h4>
                        <Cpu className="w-3.5 h-3.5 text-[var(--color-text-muted)]" />
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.tools.map((t, tIdx) => (
                          <span key={tIdx} className="badge-pill bg-[var(--color-pill-bg)] text-[10px]">
                            ✦ {t}
                          </span>
                        ))}
                      </div>
                      <p className="font-body text-xs text-[var(--color-text-muted)] leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2 p-4 bg-[var(--color-card-secondary)] rounded-xl border-2 border-[var(--color-border)]">
                  {project.tags.map((t, idx) => (
                    <span key={idx} className="badge-pill bg-[var(--color-pill-bg)] text-xs">
                      ✦ {t}
                    </span>
                  ))}
                </div>
              )}
            </div>

          </motion.div>

          {/* RIGHT COLUMN: 4 COLS (Analytics Stat Cards like Image right panel) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 space-y-6"
          >

            {/* Stat Cards Box (Inspired by the right column stats: 80 Articles, 1.5K Claps, 972 Followers) */}
            <div className="retro-card p-6 space-y-5">
              <div className="flex items-center justify-between border-b-2 border-[var(--color-border)] pb-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[var(--color-accent-sage)] shrink-0" />
                  <h3 className="font-display font-extrabold text-lg uppercase tracking-tight text-[var(--color-text-main)]">
                    ✦ PERFORMANCE STATS
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {project.impact ? (
                  project.impact.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[var(--color-card-secondary)] rounded-xl border-2 border-[var(--color-border)] flex items-center justify-between gap-3 shadow-[3px_3px_0px_var(--color-border)] hover:translate-x-1 transition-transform"
                    >
                      <div>
                        <span className="font-tech text-[10px] font-bold text-[var(--color-text-muted)] uppercase block">
                          {stat.label}
                        </span>
                        <span className="font-display font-black text-2xl sm:text-3xl text-[var(--color-accent-crimson)] block leading-none mt-1">
                          {stat.metric}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-[var(--color-border)] bg-[var(--color-card)] flex items-center justify-center font-bold text-xs text-[var(--color-accent-salmon)] shrink-0 shadow-sm">
                        ↗
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 bg-[var(--color-card-secondary)] rounded-xl border-2 border-[var(--color-border)] text-center space-y-1">
                    <span className="font-display font-extrabold text-2xl text-[var(--color-accent-crimson)] block">
                      100%
                    </span>
                    <span className="font-tech text-xs uppercase font-bold text-[var(--color-text-main)] block">
                      OPTIMIZED &amp; RESPONSIVE
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="retro-card p-6 space-y-4 text-center bg-gradient-to-b from-[var(--color-card)] to-[var(--color-card-secondary)]">
              <Sparkles className="w-8 h-8 text-[var(--color-accent-yellow)] mx-auto animate-pulse" />
              <h4 className="font-display font-extrabold text-base uppercase text-[var(--color-text-main)]">
                EXPLORE DEMO &amp; SOURCE
              </h4>
              <p className="font-body text-xs text-[var(--color-text-muted)]">
                Launch the live deployment or view the full codebase on GitHub.
              </p>

              <div className="space-y-2.5 pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[var(--color-accent-crimson)] text-white font-tech font-bold text-xs uppercase tracking-wider rounded-md border-2 border-[var(--color-border)] shadow-[3px_3px_0px_var(--color-border)] hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4 shrink-0" />
                  <span>Launch Live Demo</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[var(--color-card-secondary)] text-[var(--color-text-main)] font-tech font-bold text-xs uppercase tracking-wider rounded-md border-2 border-[var(--color-border)] shadow-[3px_3px_0px_var(--color-border)] hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4 shrink-0" />
                  <span>View GitHub Code</span>
                </a>
              </div>
            </div>

            {/* Community Feedback Widget */}
            <div className="retro-card p-4 flex items-center justify-between gap-3 bg-[var(--color-card)]">
              <button
                onClick={handleLike}
                className={`flex-1 py-2 px-3 rounded-md border-2 border-[var(--color-border)] font-tech text-xs font-bold uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${hasLiked
                  ? 'bg-[var(--color-accent-crimson)] text-white'
                  : 'bg-[var(--color-card-secondary)] text-[var(--color-text-main)] hover:bg-[var(--color-pill-bg)]'
                  }`}
              >
                <Heart className={`w-4 h-4 ${hasLiked ? 'fill-current' : ''}`} />
                <span>{hasLiked ? 'Liked' : 'Appreciate'} ({likesCount})</span>
              </button>

              <a
                href="#contact"
                className="py-2 px-3 rounded-md border-2 border-[var(--color-border)] bg-[var(--color-card-secondary)] font-tech text-xs font-bold uppercase text-[var(--color-text-main)] hover:text-[var(--color-accent-crimson)] flex items-center justify-center gap-1.5 transition-colors"
                title="Leave Comment / Feedback"
              >
                <MessageSquare className="w-4 h-4 text-[var(--color-accent-salmon)]" />
                <span>Feedback</span>
              </a>
            </div>

          </motion.div>

        </div>

        {/* 5. VIBRANT BOTTOM SHOWCASE BANNER (DIRECTLY MATCHING THE ORANGE BOTTOM BANNER IN REFERENCE IMAGE) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="retro-card p-8 sm:p-12 text-center relative overflow-hidden bg-gradient-to-r from-[var(--color-accent-crimson)] via-[var(--color-accent-salmon)] to-[var(--color-accent-yellow)] text-white shadow-2xl space-y-6"
        >
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative z-10 space-y-3 max-w-3xl mx-auto">
            <span className="badge-pill bg-black/30 text-white border-0 text-xs font-extrabold tracking-widest uppercase">
              ✦ END OF CASE STUDY ✦
            </span>

            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none drop-shadow-md">
              THANKS FOR WATCHING
            </h2>

            <p className="font-tech text-sm sm:text-lg uppercase tracking-wider font-semibold text-white/90">
              Appreciate your feedback &amp; recommendations !
            </p>

            {/* Direct Action Buttons in Showcase Banner */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-black text-white font-tech font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full border-2 border-white shadow-[4px_4px_0px_rgba(255,255,255,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Visit Production Live Build</span>
                <ExternalLink className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-tech font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 shrink-0 text-[var(--color-accent-crimson)]" />
                <span>Send Feedback / Request Demo</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* 6. PREVIOUS / NEXT PROJECT NAVIGATION FOOTER */}
        <div className="pt-6 border-t-2 border-[var(--color-border)] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="retro-card p-4 sm:p-5 flex items-center justify-between text-left hover:border-[var(--color-accent-crimson)] transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <ChevronLeft className="w-6 h-6 text-[var(--color-accent-crimson)] group-hover:-translate-x-1 transition-transform shrink-0" />
              <div className="min-w-0">
                <span className="font-tech text-[10px] font-bold uppercase text-[var(--color-text-muted)] block">
                  Previous Case Study
                </span>
                <span className="font-display font-bold text-xs sm:text-sm text-[var(--color-text-main)] truncate block">
                  {prevProject.title}
                </span>
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="retro-card p-4 sm:p-5 flex items-center justify-between text-left sm:text-right hover:border-[var(--color-accent-crimson)] transition-colors cursor-pointer group"
          >
            <div className="flex items-center justify-start sm:justify-end gap-3 min-w-0 sm:ml-auto">
              <div className="min-w-0">
                <span className="font-tech text-[10px] font-bold uppercase text-[var(--color-text-muted)] block">
                  Next Case Study
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
