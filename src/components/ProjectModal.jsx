import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md cursor-pointer"
      >
        {/* Floating Fixed Close Button at Top-Right of Screen */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 px-4 py-2.5 rounded-full border-2 border-white bg-[var(--color-accent-crimson)] text-white shadow-2xl hover:bg-black hover:scale-105 transition-all cursor-pointer flex items-center gap-2 font-tech font-bold text-xs uppercase tracking-wider"
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
          {/* Inner Close Button inside Modal Header */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full border-2 border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text-main)] hover:bg-[var(--color-accent-crimson)] hover:text-white transition-colors cursor-pointer shadow-[2px_2px_0px_var(--color-border)]"
            aria-label="Close modal window"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Media Image */}
          <div className="relative h-64 sm:h-80 overflow-hidden border-b-2 border-[var(--color-border)] bg-gradient-to-r ${project.gradient}">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card)] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <span className="badge-pill bg-[var(--color-accent-crimson)] text-white mb-2 inline-flex border-0">
                ✦ {project.categoryLabel}
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-[var(--color-text-main)] drop-shadow-md">
                {project.title}
              </h3>
            </div>
          </div>

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
