import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Server, Database, Cloud, Wrench, Sparkles, Terminal, CheckCircle2, Layers } from 'lucide-react';
import { skillSections, skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const getSectionIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[var(--color-accent-crimson)]" />;
      case 'Server':
        return <Server className="w-6 h-6 text-[var(--color-accent-salmon)]" />;
      case 'Database':
        return <Database className="w-6 h-6 text-[var(--color-accent-yellow)]" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-[var(--color-accent-sage)]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[var(--color-accent-crimson)]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[var(--color-accent-crimson)]" />;
    }
  };

  const filteredSections = activeCategory === 'all'
    ? skillSections
    : skillSections.filter(sec => sec.id === activeCategory);

  return (
    <section id="skills" className="py-16 sm:py-24 relative bg-[var(--color-card)]/50 border-y-2 border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-display font-extrabold text-xl sm:text-4xl uppercase text-[var(--color-text-main)]">
              SKILLS &amp; TECHNOLOGIES
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center overflow-x-auto no-scrollbar gap-2 pb-1 md:pb-0">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full border-2 border-[var(--color-border)] font-tech text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 ${activeCategory === cat.id
                    ? 'bg-[var(--color-accent-crimson)] text-white shadow-[3px_3px_0px_var(--color-border)]'
                    : 'bg-[var(--color-card)] text-[var(--color-text-main)] hover:bg-[var(--color-pill-bg)]'
                  }`}
              >
                ✦ {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Skill Section Boxes */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSections.map((section) => (
              <motion.div
                key={section.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 20 }}
                transition={{ duration: 0.3 }}
                className="retro-card p-5 sm:p-6 flex flex-col justify-between relative group hover:border-[var(--color-accent-crimson)] transition-colors"
              >
                <div>
                  {/* Box Header Bar */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-3 rounded-lg border-2 border-[var(--color-border)] bg-[var(--color-card-secondary)] shadow-[2px_2px_0px_var(--color-border)] group-hover:rotate-3 transition-transform shrink-0">
                        {getSectionIcon(section.icon)}
                      </div>
                      <div className="min-w-0">
                        <span className={`badge-pill text-[10px] font-bold tracking-wider mb-1 ${section.badgeColor}`}>
                          {section.title}
                        </span>
                        <h3 className="font-display font-extrabold text-lg sm:text-xl text-[var(--color-text-main)] truncate">
                          {section.subtitle}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Section Description */}
                  <p className="font-tech text-xs text-[var(--color-text-muted)] mb-5 leading-relaxed">
                    {section.description}
                  </p>

                  {/* Divider line */}
                  <div className="border-t-2 border-dashed border-[var(--color-border-subtle)] my-4" />

                  {/* Skills Grid inside Box */}
                  <div className="grid grid-cols-1 gap-2.5">
                    {section.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2.5 rounded-md border-2 border-[var(--color-border)] bg-[var(--color-card-secondary)]/60 hover:bg-[var(--color-pill-bg)] transition-colors gap-2"
                      >
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-crimson)] shrink-0" />
                          <span className="font-display font-bold text-xs sm:text-sm text-[var(--color-text-main)] truncate">
                            {skill.name}
                          </span>
                        </div>
                        <span className="font-tech text-[10px] uppercase font-semibold text-[var(--color-text-muted)] px-2 py-0.5 rounded bg-[var(--color-card)] border border-[var(--color-border-subtle)] shrink-0">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Box Footer Badge */}
                <div className="mt-6 pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between font-tech text-[11px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider">
                  <span>✦ {section.skills.length} TECHNOLOGIES</span>
                  <span className="text-[var(--color-accent-crimson)] font-mono">CATEGORY: {section.id}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
