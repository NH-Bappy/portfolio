import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function AboutExperience() {
  return (
    <section id="about" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="flex items-center gap-3 mb-12 border-b-2 border-[var(--color-border)] pb-4">
          <span className="text-2xl text-[var(--color-accent-crimson)]">✦</span>
          <h2 className="font-display font-extrabold text-xl sm:text-4xl uppercase text-[var(--color-text-main)]">
            WORK EXPERIENCE
          </h2>
          <span className="font-tech text-xs uppercase font-bold text-[var(--color-text-muted)] tracking-widest ml-auto hidden sm:inline">
            CAREER HISTORY &amp; ROLES
          </span>
        </div>

        {/* Full-width Experience Timeline Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="retro-card p-5 sm:p-10">
            <div className="flex items-center gap-2 mb-8 border-b border-[var(--color-border-subtle)] pb-4">
              <Briefcase className="w-6 h-6 text-[var(--color-accent-crimson)] shrink-0" />
              <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-tight text-[var(--color-text-main)]">
                ✦ PROFESSIONAL EXPERIENCE
              </h3>
            </div>

            <div className="space-y-10">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative pl-5 sm:pl-8 border-l-2 border-[var(--color-accent-crimson)] group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[var(--color-accent-crimson)] border border-[var(--color-card)] group-hover:scale-125 transition-transform" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1.5">
                    <h4 className="font-display font-extrabold text-base sm:text-2xl text-[var(--color-text-main)]">
                      {exp.role}
                    </h4>
                    <span className="font-tech text-[11px] sm:text-xs font-bold text-[var(--color-accent-salmon)] uppercase tracking-wider bg-[var(--color-card-secondary)] px-3 py-1 rounded border border-[var(--color-border-subtle)] w-fit shrink-0">
                      ✦ {exp.period}
                    </span>
                  </div>

                  <span className="font-tech text-xs sm:text-sm font-semibold text-[var(--color-accent-sage)] block mb-3">
                    {exp.company}
                  </span>

                  {exp.description && (
                    <p className="font-body text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed max-w-4xl mb-4">
                      {exp.description}
                    </p>
                  )}

                  {exp.points && exp.points.length > 0 && (
                    <ul className="space-y-2.5 mb-5 max-w-4xl">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 font-body text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                          <span className="text-[var(--color-accent-crimson)] font-bold text-sm shrink-0 mt-0.5">✦</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.techStack && exp.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="font-tech text-[11px] font-semibold px-2.5 py-1 rounded bg-[var(--color-card-secondary)] text-[var(--color-accent-salmon)] border border-[var(--color-border-subtle)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
