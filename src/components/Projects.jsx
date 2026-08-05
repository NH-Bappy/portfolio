import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects({ onSelectProject }) {
  const [filter, setFilter] = useState('all');
  const [modalProject, setModalProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Front-End' },
    { id: 'backend', name: 'Back-End' },
    { id: 'fullstack', name: 'Full-Stack' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const handleOpenProject = (project) => {
    if (onSelectProject) {
      onSelectProject(project);
    } else {
      setModalProject(project);
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b-2 border-[var(--color-border)] pb-6">
          <div>
            <h2 className="font-display font-extrabold text-xl sm:text-4xl uppercase text-[var(--color-text-main)]">
              FEATURED PROJECTS
            </h2>
          </div>

          {/* Filters */}
          <div className="flex items-center overflow-x-auto no-scrollbar gap-2 pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-full border-2 border-[var(--color-border)] font-tech text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 ${filter === cat.id
                  ? 'bg-[var(--color-accent-salmon)] text-white shadow-[3px_3px_0px_var(--color-border)]'
                  : 'bg-[var(--color-card)] text-[var(--color-text-main)] hover:bg-[var(--color-pill-bg)]'
                  }`}
              >
                ✦ {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="retro-card group overflow-hidden flex flex-col justify-between"
              >
                {/* Poster Card Header */}
                <div>
                  {/* Top Bar Metadata */}
                  <div className="p-3.5 sm:p-4 border-b-2 border-[var(--color-border)] bg-[var(--color-card-secondary)] flex items-center justify-between font-tech text-[11px] sm:text-xs font-bold gap-2">
                    <span className="text-[var(--color-accent-crimson)] shrink-0">.{String(idx + 1).padStart(2, '0')}</span>
                    <span className="uppercase text-[var(--color-text-main)] truncate text-center">✦ {project.categoryLabel}</span>
                    <span className="text-[var(--color-text-muted)] shrink-0">{project.year}</span>
                  </div>

                  {/* Thumbnail Image Container */}
                  <div className="relative aspect-video overflow-hidden border-b-2 border-[var(--color-border)] bg-slate-950 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Hover Overlay Button */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <button
                        onClick={() => handleOpenProject(project)}
                        className="px-5 py-2.5 bg-[var(--color-accent-crimson)] text-white border-2 border-white rounded-full font-tech font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 cursor-pointer hover:scale-105"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Project Page</span>
                      </button>
                    </div>
                  </div>

                  {/* Content Info */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display font-bold text-lg sm:text-2xl text-[var(--color-text-main)] mb-2 group-hover:text-[var(--color-accent-crimson)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-tech text-xs font-semibold text-[var(--color-accent-sage)] mb-4">
                      {project.subtitle}
                    </p>
                    <p className="font-body text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="badge-pill bg-[var(--color-pill-bg)] text-[10px]"
                        >
                          ✦ {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-5 sm:px-6 py-4 border-t-2 border-[var(--color-border)] bg-[var(--color-card-secondary)] flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleOpenProject(project)}
                    className="font-tech text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--color-text-main)] hover:text-[var(--color-accent-crimson)] flex items-center gap-1 transition-colors cursor-pointer min-w-0"
                  >
                    <span className="truncate">Inspect Full Case Study</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full border border-[var(--color-border)] hover:bg-[var(--color-accent-crimson)] hover:text-white transition-colors shrink-0"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Fallback Modal */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
}
