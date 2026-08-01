import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experiences, education } from '../data/portfolioData';

export default function AboutExperience() {
  return (
    <section id="about" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-12 border-b-2 border-[var(--color-border)] pb-4">
          <span className="text-2xl text-[var(--color-accent-crimson)]">✦</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase text-[var(--color-text-main)]">
            ABOUT &amp; EXPERIENCE
          </h2>
          <span className="font-tech text-xs uppercase font-bold text-[var(--color-text-muted)] tracking-widest ml-auto hidden sm:inline">
            CAREER &amp; FORMATIONS
          </span>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Experiences (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="retro-card p-6 sm:p-8 flex-1">
              <div className="flex items-center gap-2 mb-6 border-b border-[var(--color-border-subtle)] pb-3">
                <Briefcase className="w-5 h-5 text-[var(--color-accent-crimson)]" />
                <h3 className="font-display font-bold text-xl uppercase tracking-tight text-[var(--color-text-main)]">
                  ✦ EXPERIENCES
                </h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <div
                    key={idx}
                    className="relative pl-6 border-l-2 border-[var(--color-accent-crimson)] group"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[var(--color-accent-crimson)] border border-[var(--color-card)] group-hover:scale-125 transition-transform" />
                    
                    <span className="font-tech text-xs font-bold text-[var(--color-accent-salmon)] uppercase tracking-wider block mb-1">
                      {exp.period}
                    </span>
                    <h4 className="font-display font-bold text-base text-[var(--color-text-main)]">
                      {exp.role}
                    </h4>
                    <span className="font-tech text-xs font-semibold text-[var(--color-accent-sage)] block mb-2">
                      {exp.company}
                    </span>
                    <p className="font-body text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 2: Formations / Education & Languages (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="retro-card p-6 flex-1 flex flex-col justify-between">
              
              {/* Formations Block */}
              <div>
                <div className="flex items-center gap-2 mb-6 border-b border-[var(--color-border-subtle)] pb-3">
                  <GraduationCap className="w-5 h-5 text-[var(--color-accent-sage)]" />
                  <h3 className="font-display font-bold text-xl uppercase tracking-tight text-[var(--color-text-main)]">
                    ✦ FORMATIONS
                  </h3>
                </div>

                <div className="space-y-6">
                  {education.map((edu, idx) => (
                    <div key={idx} className="bg-[var(--color-card-secondary)] p-4 rounded border border-[var(--color-border)]">
                      <span className="font-tech text-xs font-bold text-[var(--color-accent-yellow)] uppercase block mb-1">
                        {edu.period}
                      </span>
                      <h4 className="font-display font-bold text-sm text-[var(--color-text-main)] mb-1">
                        {edu.degree}
                      </h4>
                      <p className="font-body text-xs text-[var(--color-text-muted)]">
                        {edu.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>



            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
