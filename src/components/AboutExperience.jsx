import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Heart, Sparkles, Paintbrush, Gamepad2, Music } from 'lucide-react';
import { experiences, education, aptitudes, hobbies } from '../data/portfolioData';

export default function AboutExperience() {
  const getHobbyIcon = (iconName) => {
    switch (iconName) {
      case 'Paintbrush': return <Paintbrush className="w-5 h-5 text-[var(--color-accent-salmon)]" />;
      case 'Gamepad2': return <Gamepad2 className="w-5 h-5 text-[var(--color-accent-sage)]" />;
      case 'Music': return <Music className="w-5 h-5 text-[var(--color-accent-yellow)]" />;
      default: return <Sparkles className="w-5 h-5 text-[var(--color-accent-crimson)]" />;
    }
  };

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
            CAREER &amp; APTITUDES
          </span>
        </div>

        {/* 3-Column Editorial Grid (Inspired by Image 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Experiences (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col"
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

          {/* Column 2: Formations / Education & Languages (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3 flex flex-col"
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

              {/* Language Level Indicator (Inspired by Image 2 languages block) */}
              <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)]">
                <h4 className="font-tech font-bold text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
                  LANGUAGES
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-tech font-bold mb-1">
                      <span>FRENCH</span>
                      <span className="text-[var(--color-accent-salmon)]">NATIVE</span>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--color-pill-bg)] overflow-hidden border border-[var(--color-border)]">
                      <div className="h-full bg-[var(--color-accent-salmon)] w-[100%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-tech font-bold mb-1">
                      <span>ENGLISH</span>
                      <span className="text-[var(--color-accent-sage)]">FLUENT (C1)</span>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--color-pill-bg)] overflow-hidden border border-[var(--color-border)]">
                      <div className="h-full bg-[var(--color-accent-sage)] w-[90%]" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Column 3: Aptitudes & Hobbies Grid (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* Aptitudes / Key Tools Badge Grid */}
            <div className="retro-card p-6">
              <div className="flex items-center gap-2 mb-4 border-b border-[var(--color-border-subtle)] pb-3">
                <Award className="w-5 h-5 text-[var(--color-accent-yellow)]" />
                <h3 className="font-display font-bold text-xl uppercase tracking-tight text-[var(--color-text-main)]">
                  ✦ APTITUDES
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {aptitudes.map((apt, idx) => (
                  <span
                    key={idx}
                    className="badge-pill hover:bg-[var(--color-accent-sage)] hover:text-white transition-colors cursor-default"
                  >
                    ✦ {apt}
                  </span>
                ))}
              </div>
            </div>

            {/* Hobbies Cards (Inspired by Image 1 Hobbies block) */}
            <div className="retro-card p-6 flex-1">
              <div className="flex items-center gap-2 mb-4 border-b border-[var(--color-border-subtle)] pb-3">
                <Heart className="w-5 h-5 text-[var(--color-accent-salmon)]" />
                <h3 className="font-display font-bold text-xl uppercase tracking-tight text-[var(--color-text-main)]">
                  ✦ HOBBIES &amp; PASSIONS
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {hobbies.map((hobby, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[var(--color-card-secondary)] rounded-md border border-[var(--color-border)] flex flex-col items-center justify-center text-center gap-2 hover:border-[var(--color-accent-crimson)] transition-colors"
                  >
                    {getHobbyIcon(hobby.icon)}
                    <span className="font-tech text-xs font-bold text-[var(--color-text-main)] uppercase">
                      {hobby.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
