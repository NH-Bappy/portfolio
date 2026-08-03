import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Video,
  Image as ImageIcon,
  Wrench,
  TrendingUp,
  Info,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Play,
  Sparkles
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function ProjectDetailPage({ project, onBack, onSelectProject }) {
  const [selectedImage, setSelectedImage] = useState(project?.galleryImages?.[0] || project?.image);
  const [mediaTab, setMediaTab] = useState('gallery'); // 'gallery' | 'video'

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (project) {
      setSelectedImage(project.galleryImages?.[0] || project.image);
      setMediaTab('gallery');
    }
  }, [project]);

  if (!project) return null;

  // Find index for prev/next project navigation
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-main)] pt-24 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Top Sticky Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[var(--color-border)] pb-6">
          <button
            onClick={onBack}
            className="px-4 py-2 bg-[var(--color-card)] border-2 border-[var(--color-border)] rounded-full font-tech font-bold text-xs uppercase tracking-wider text-[var(--color-text-main)] hover:bg-[var(--color-accent-salmon)] hover:text-white transition-all shadow-[2px_2px_0px_var(--color-border)] flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[var(--color-accent-crimson)] text-white font-tech font-bold text-xs uppercase tracking-wider rounded-full border-2 border-[var(--color-border)] shadow-[2px_2px_0px_var(--color-border)] hover:translate-y-[-1px] transition-all flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[var(--color-card-secondary)] text-[var(--color-text-main)] font-tech font-bold text-xs uppercase tracking-wider rounded-full border-2 border-[var(--color-border)] shadow-[2px_2px_0px_var(--color-border)] hover:translate-y-[-1px] transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          </div>
        </div>

        {/* Hero Banner Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="badge-pill bg-[var(--color-accent-crimson)] text-white border-0">
              ✦ {project.categoryLabel}
            </span>
            <span className="font-tech text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest">
              PROJECT // {project.year}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-xl sm:text-3xl uppercase tracking-tight text-[var(--color-text-main)] leading-none">
            {project.title}
          </h1>

          <p className="font-tech text-sm sm:text-lg text-[var(--color-accent-sage)] font-semibold">
            {project.subtitle}
          </p>
        </motion.div>        {/* 1. MEDIA SHOWCASE (Place for Video & Images) - Compact Size */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="retro-card p-5 sm:p-6 space-y-5 max-w-4xl mx-auto w-full"
        >
          {/* Media Header & Tab Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border-subtle)] pb-3">
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-[var(--color-accent-salmon)]" />
              <h2 className="font-display font-bold text-lg sm:text-xl uppercase tracking-tight text-[var(--color-text-main)]">
                ✦ MEDIA SHOWCASE &amp; DEMO
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMediaTab('video')}
                className={`px-3.5 py-1 rounded-full border-2 border-[var(--color-border)] font-tech text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-1.5 ${mediaTab === 'video'
                  ? 'bg-[var(--color-accent-salmon)] text-white shadow-[2px_2px_0px_var(--color-border)]'
                  : 'bg-[var(--color-card-secondary)] text-[var(--color-text-main)] hover:bg-[var(--color-pill-bg)]'
                  }`}
              >
                <Play className="w-3 h-3" />
                <span>Video Demo</span>
              </button>
              <button
                onClick={() => setMediaTab('gallery')}
                className={`px-3.5 py-1 rounded-full border-2 border-[var(--color-border)] font-tech text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-1.5 ${mediaTab === 'gallery'
                  ? 'bg-[var(--color-accent-salmon)] text-white shadow-[2px_2px_0px_var(--color-border)]'
                  : 'bg-[var(--color-card-secondary)] text-[var(--color-text-main)] hover:bg-[var(--color-pill-bg)]'
                  }`}
              >
                <ImageIcon className="w-3 h-3" />
                <span>Screenshots Gallery ({project.galleryImages?.length || 1})</span>
              </button>
            </div>
          </div>

          {/* Media Display Area */}
          {mediaTab === 'video' ? (
            <div className="space-y-3">
              <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-[var(--color-border)] bg-black shadow-md max-w-3xl mx-auto">
                {project.videoUrl ? (
                  project.videoUrl.includes('youtube.com') || project.videoUrl.includes('youtu.be') ? (
                    <iframe
                      src={project.videoUrl}
                      title={project.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={project.videoUrl}
                      controls
                      autoPlay
                      loop
                      muted
                      poster={project.image}
                      className="w-full h-full object-cover"
                    >
                      Your browser does not support HTML5 video demo.
                    </video>
                  )
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <p className="font-tech text-[11px] text-[var(--color-text-muted)] text-center uppercase tracking-wider">
                ✦ High-Definition Interactive Video Walkthrough &amp; Motion Teaser
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Main Active Image Display */}
              <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-[var(--color-border)] bg-slate-950 shadow-md max-w-3xl mx-auto flex items-center justify-center">
                <img
                  src={selectedImage}
                  alt={project.title}
                  className="w-full h-full object-contain bg-slate-950 transition-all duration-500 p-1"
                />
              </div>

              {/* Thumbnails Gallery Strip */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
                {project.galleryImages?.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`relative aspect-video rounded-md overflow-hidden border-2 transition-all cursor-pointer ${selectedImage === imgUrl
                      ? 'border-[var(--color-accent-salmon)] scale-105 shadow-[2px_2px_0px_var(--color-border)]'
                      : 'border-[var(--color-border)] opacity-60 hover:opacity-100'
                      }`}
                  >
                    <img src={imgUrl} alt={`Screenshot ${idx + 1}`} className="w-full h-full object-contain bg-slate-950" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.section>

        {/* 2-Column Content Grid: About + Impact & What I Used */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: 2. ABOUT SECTION (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 space-y-8 flex flex-col"
          >
            {/* About Card */}
            <div className="retro-card p-6 sm:p-8 flex-1 space-y-6">
              <div className="flex items-center gap-2 border-b border-[var(--color-border-subtle)] pb-3">
                <Info className="w-5 h-5 text-[var(--color-accent-crimson)]" />
                <h2 className="font-display font-bold text-xl uppercase tracking-tight text-[var(--color-text-main)]">
                  ✦ ABOUT THE PROJECT
                </h2>
              </div>

              <p className="font-body text-base text-[var(--color-text-main)] leading-relaxed">
                {project.aboutDetail || project.description}
              </p>

              <div className="pt-4 border-t border-[var(--color-border-subtle)]">
                <h3 className="font-tech text-xs font-bold text-[var(--color-accent-salmon)] uppercase tracking-widest mb-4">
                  CORE FEATURES & HIGHLIGHTS
                </h3>
                <div className="space-y-3">
                  {project.highlights?.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-[var(--color-card-secondary)] rounded-md border border-[var(--color-border)]">
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-accent-sage)] shrink-0 mt-0.5" />
                      <span className="font-body text-xs sm:text-sm text-[var(--color-text-main)]">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. WHAT I USE SECTION */}
            <div className="retro-card p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2 border-b border-[var(--color-border-subtle)] pb-3">
                <Wrench className="w-5 h-5 text-[var(--color-accent-yellow)]" />
                <h2 className="font-display font-bold text-xl uppercase tracking-tight text-[var(--color-text-main)]">
                  ✦ WHAT I USED (TECH & TOOLS)
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.whatIUsed ? (
                  project.whatIUsed.map((item, idx) => (
                    <div key={idx} className="p-4 bg-[var(--color-card-secondary)] rounded-lg border border-[var(--color-border)] space-y-2">
                      <h4 className="font-tech text-xs font-bold text-[var(--color-accent-salmon)] uppercase">
                        {item.category}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tools.map((t, tIdx) => (
                          <span key={tIdx} className="badge-pill bg-[var(--color-pill-bg)] text-[10px]">
                            ✦ {t}
                          </span>
                        ))}
                      </div>
                      <p className="font-body text-xs text-[var(--color-text-muted)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 flex flex-wrap gap-2">
                    {project.tags.map((t, idx) => (
                      <span key={idx} className="badge-pill bg-[var(--color-pill-bg)] text-xs">
                        ✦ {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4. IMPACT SECTION (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="retro-card p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2 border-b border-[var(--color-border-subtle)] pb-3">
                <TrendingUp className="w-5 h-5 text-[var(--color-accent-sage)]" />
                <h2 className="font-display font-bold text-xl uppercase tracking-tight text-[var(--color-text-main)]">
                  ✦ PROJECT IMPACT
                </h2>
              </div>

              <div className="space-y-4">
                {project.impact ? (
                  project.impact.map((stat, idx) => (
                    <div key={idx} className="p-4 bg-[var(--color-card-secondary)] rounded-lg border border-[var(--color-border)] space-y-1">
                      <span className="font-display font-black text-2xl sm:text-3xl text-[var(--color-accent-crimson)] block">
                        {stat.metric}
                      </span>
                      <span className="font-tech text-xs font-semibold text-[var(--color-text-main)] uppercase block">
                        {stat.label}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="p-4 bg-[var(--color-card-secondary)] rounded-lg border border-[var(--color-border)]">
                    <span className="font-tech text-xs text-[var(--color-text-muted)]">High Performance & Scalable Web Solution</span>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Live Link Card */}
            <div className="retro-card p-6 text-center space-y-4 bg-gradient-to-b from-[var(--color-card)] to-[var(--color-card-secondary)]">
              <Sparkles className="w-8 h-8 text-[var(--color-accent-yellow)] mx-auto animate-pulse" />
              <h3 className="font-display font-bold text-lg uppercase text-[var(--color-text-main)]">
                Experience It Live
              </h3>
              <p className="font-body text-xs text-[var(--color-text-muted)]">
                Explore the interactive production build and full source repository.
              </p>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[var(--color-accent-crimson)] text-white font-tech font-bold text-xs uppercase tracking-wider rounded border-2 border-[var(--color-border)] shadow-[3px_3px_0px_var(--color-border)] hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2"
              >
                <span>Launch Project Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* 5. PREVIOUS / NEXT PROJECT NAVIGATION FOOTER */}
        <div className="pt-8 border-t-2 border-[var(--color-border)] grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="retro-card p-5 flex items-center justify-between text-left hover:border-[var(--color-accent-crimson)] transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <ChevronLeft className="w-6 h-6 text-[var(--color-accent-crimson)] group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="font-tech text-[10px] font-bold uppercase text-[var(--color-text-muted)] block">
                  Previous Project
                </span>
                <span className="font-display font-bold text-sm text-[var(--color-text-main)]">
                  {prevProject.title}
                </span>
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="retro-card p-5 flex items-center justify-between text-right hover:border-[var(--color-accent-crimson)] transition-colors cursor-pointer group"
          >
            <div className="flex items-center justify-end gap-3 ml-auto">
              <div>
                <span className="font-tech text-[10px] font-bold uppercase text-[var(--color-text-muted)] block">
                  Next Project
                </span>
                <span className="font-display font-bold text-sm text-[var(--color-text-main)]">
                  {nextProject.title}
                </span>
              </div>
              <ChevronRight className="w-6 h-6 text-[var(--color-accent-crimson)] group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}
