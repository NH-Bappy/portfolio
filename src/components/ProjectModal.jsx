import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, ImageIcon } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(project?.galleryImages?.[0] || project?.image);

  useEffect(() => {
    if (!project) return;

    setActiveImage(project?.galleryImages?.[0] || project?.image);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md cursor-pointer"
      >
        {/* Floating Fixed Close Button below top navigation bar */}
        <button
          onClick={onClose}
          className="fixed top-16 right-4 sm:top-20 sm:right-8 z-[110] px-4 py-2.5 rounded-full border-2 border-white bg-[var(--color-accent-crimson)] text-white shadow-2xl hover:bg-black hover:scale-105 transition-all cursor-pointer flex items-center gap-2 font-tech font-bold text-xs uppercase tracking-wider"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
          <span>Close</span>
        </button>

        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl retro-card bg-[var(--color-card)] overflow-hidden my-8 cursor-default"
        >

          {/* Modal Title Bar */}
          <div className="p-5 sm:p-6 border-b border-[var(--color-border-subtle)] bg-[var(--color-card-secondary)] flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="badge-pill bg-[var(--color-accent-crimson)] text-white mb-1.5 inline-flex border-0 text-[10px]">
                ✦ {project.categoryLabel}
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-3xl text-[var(--color-text-main)]">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Modal Media Showcase (Screenshots Gallery) */}
          <div className="relative aspect-video w-full overflow-hidden border-b-2 border-[var(--color-border)] bg-slate-950 flex items-center justify-center">
            <img
              src={activeImage || project.image}
              alt={project.title}
              className="w-full h-full object-contain bg-slate-950 p-1"
            />
          </div>

          {/* Thumbnails Bar for Gallery View */}
          {project.galleryImages && project.galleryImages.length > 1 && (
            <div className="p-3 bg-[var(--color-card-secondary)] border-b border-[var(--color-border-subtle)] flex items-center justify-center gap-3 overflow-x-auto">
              {project.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative h-14 aspect-video rounded border-2 overflow-hidden transition-all cursor-pointer ${
                    activeImage === img
                      ? 'border-[var(--color-accent-salmon)] scale-105 shadow-[2px_2px_0px_var(--color-border)]'
                      : 'border-[var(--color-border)] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-contain bg-slate-950" />
                </button>
              ))}
            </div>
          )}

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="font-tech text-xs font-bold text-[var(--color-accent-salmon)] uppercase tracking-widest mb-2">
                OVERVIEW
              </h4>
              <p className="font-body text-sm sm:text-base text-[var(--color-text-main)] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="font-tech text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest mb-3">
                TECHNOLOGY STACK
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="badge-pill bg-[var(--color-pill-bg)] text-[var(--color-text-main)]"
                  >
                    ✦ {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            {project.highlights && (
              <div>
                <h4 className="font-tech text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest mb-3">
                  KEY HIGHLIGHTS
                </h4>
                <div className="space-y-2">
                  {project.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-body text-[var(--color-text-main)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-sage)] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="pt-6 border-t-2 border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-[var(--color-accent-crimson)] text-white font-tech font-bold text-xs uppercase tracking-wider rounded border-2 border-[var(--color-border)] shadow-[3px_3px_0px_var(--color-border)] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_var(--color-border)] transition-all flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit Live Demo</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-[var(--color-card-secondary)] text-[var(--color-text-main)] font-tech font-bold text-xs uppercase tracking-wider rounded border-2 border-[var(--color-border)] shadow-[3px_3px_0px_var(--color-border)] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_var(--color-border)] transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source Code</span>
                </a>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[var(--color-pill-bg)] text-[var(--color-text-main)] font-tech font-bold text-xs uppercase tracking-wider rounded border-2 border-[var(--color-border)] hover:bg-[var(--color-accent-crimson)] hover:text-white transition-all cursor-pointer flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                <span>Close Window</span>
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
