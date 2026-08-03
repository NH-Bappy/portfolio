import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[var(--color-bg)] border-t-2 border-[var(--color-border)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Poster Frame Footer Box */}
        <div className="retro-frame p-5 sm:p-8 bg-[var(--color-card)] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded border-2 border-[var(--color-border)] bg-[var(--color-accent-crimson)] text-white flex items-center justify-center font-display font-bold text-sm shrink-0">
              ✦
            </div>
            <div>
              <h4 className="font-display font-bold text-base sm:text-lg uppercase tracking-wider text-[var(--color-text-main)]">
                {personalInfo.name}
              </h4>
              <p className="font-tech text-xs text-[var(--color-text-muted)]">
                {personalInfo.title}
              </p>
            </div>
          </div>

          {/* Middle Copyright & Quote */}
          <div className="text-center font-tech text-xs text-[var(--color-text-muted)]">
            <p className="flex items-center justify-center gap-1.5 font-bold uppercase tracking-widest text-[var(--color-text-main)]">
              <span>✦ 2026 EDITION ✦</span>
            </p>
            <p className="mt-1 text-[11px] sm:text-xs">
              Engineered with React 19, Vite, Tailwind CSS, GSAP &amp; Framer Motion.
            </p>
          </div>

          {/* Right Scroll Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full border-2 border-[var(--color-border)] bg-[var(--color-card-secondary)] hover:bg-[var(--color-accent-crimson)] hover:text-white transition-all shadow-[2px_2px_0px_var(--color-border)] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_var(--color-border)] cursor-pointer shrink-0"
            aria-label="Scroll to top of page"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

      </div>
    </footer>
  );
}
