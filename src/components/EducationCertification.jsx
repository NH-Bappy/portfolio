import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, Building2, CheckCircle2, Star, Users, ShieldCheck } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function EducationCertification() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all'
    ? education
    : activeFilter === 'education'
      ? education.filter(item => item.type === 'Education')
      : education.filter(item => item.type === 'Certification');

  return (
    <section id="education" className="py-16 sm:py-24 relative bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4 sm:gap-6 border-b-2 border-[var(--color-border)] pb-6">
          <div>
            <h2 className="font-display font-extrabold text-xl sm:text-4xl uppercase text-[var(--color-text-main)]">
              EDUCATION &amp; CERTIFICATION
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center overflow-x-auto no-scrollbar gap-2 sm:gap-2.5 pb-1 md:pb-0">
            {[
              { id: 'all', label: 'All Credentials' },
              { id: 'education', label: 'Education' },
              { id: 'certification', label: 'Certifications' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full border-2 border-[var(--color-border)] font-tech text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 ${activeFilter === tab.id
                  ? 'bg-[var(--color-accent-crimson)] text-white shadow-[3px_3px_0px_var(--color-border)]'
                  : 'bg-[var(--color-card)] text-[var(--color-text-main)] hover:bg-[var(--color-pill-bg)]'
                  }`}
              >
                ✦ {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Education & Certification Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              const isEdu = item.type === 'Education';
              return (
                <motion.div
                  key={item.degree + idx}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="retro-card p-5 sm:p-8 flex flex-col justify-between relative group hover:border-[var(--color-accent-crimson)] transition-colors"
                >
                  <div>
                    {/* Header Row */}
                    <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        {item.logo ? (
                          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[var(--color-border)] ${item.logo.includes('outskill') ? 'bg-[#071514] p-2' : 'bg-white p-1'
                            } shadow-[3px_3px_0px_var(--color-border)] group-hover:scale-105 transition-all flex items-center justify-center shrink-0 overflow-hidden`}>
                            <img
                              src={item.logo}
                              alt={item.institution || item.degree}
                              className="w-full h-full object-contain rounded-full"
                            />
                          </div>
                        ) : (
                          <div className={`p-3 sm:p-3.5 rounded-full border-2 border-[var(--color-border)] ${isEdu ? 'bg-[var(--color-card-secondary)] text-[var(--color-accent-sage)]' : 'bg-[var(--color-card-secondary)] text-[var(--color-accent-salmon)]'
                            } shadow-[3px_3px_0px_var(--color-border)] group-hover:rotate-6 transition-transform flex items-center justify-center shrink-0`}>
                            {isEdu ? <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" /> : <Award className="w-5 h-5 sm:w-6 sm:h-6" />}
                          </div>
                        )}
                        <div>
                          <span className={`badge-pill text-[10px] font-bold tracking-wider uppercase inline-block mb-1 ${isEdu ? 'bg-[var(--color-accent-sage)] text-white' : 'bg-[var(--color-accent-crimson)] text-white'
                            }`}>
                            {item.badge || item.type}
                          </span>
                          <span className="font-tech text-xs font-bold text-[var(--color-accent-salmon)] block">
                            ✦ {item.period}
                          </span>
                        </div>
                      </div>

                      <span className="font-tech text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[var(--color-card-secondary)] border border-[var(--color-border)] text-[var(--color-text-muted)] shrink-0">
                        {item.type}
                      </span>
                    </div>

                    {/* Degree Title & Institution */}
                    <h3 className="font-display font-extrabold text-xl text-[var(--color-text-main)] mb-1 group-hover:text-[var(--color-accent-crimson)] transition-colors">
                      {item.degree}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      {item.institution && (
                        <div className="flex items-center gap-1.5 font-tech text-xs font-semibold text-[var(--color-accent-sage)]">
                          <Building2 className="w-3.5 h-3.5" />
                          <span>{item.institution}</span>
                        </div>
                      )}

                      {item.grade && (
                        <div className="flex items-center gap-1 font-tech text-xs font-bold text-[var(--color-accent-yellow)] bg-[var(--color-card-secondary)] px-2 py-0.5 rounded border border-[var(--color-border-subtle)]">
                          <Star className="w-3 h-3 fill-current" />
                          <span>Grade: {item.grade}</span>
                        </div>
                      )}

                      {item.credentialId && (
                        <div className="flex items-center gap-1 font-tech text-xs font-bold text-[var(--color-accent-crimson)] bg-[var(--color-card-secondary)] px-2.5 py-0.5 rounded border border-[var(--color-border-subtle)]">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Credential ID: {item.credentialId}</span>
                        </div>
                      )}
                    </div>

                    {/* Activities and societies */}
                    {item.activities && item.activities.length > 0 && (
                      <div className="mb-4 p-3 rounded bg-[var(--color-card-secondary)]/70 border border-[var(--color-border-subtle)]">
                        <div className="flex items-center gap-1.5 font-tech text-xs font-bold text-[var(--color-text-main)] uppercase tracking-wider mb-2">
                          <Users className="w-3.5 h-3.5 text-[var(--color-accent-salmon)]" />
                          <span>Activities &amp; Societies</span>
                        </div>
                        <ul className="space-y-1">
                          {item.activities.map((act, aIdx) => (
                            <li key={aIdx} className="font-body text-xs text-[var(--color-text-muted)] flex items-start gap-1.5">
                              <span className="text-[var(--color-accent-crimson)] font-bold">✦</span>
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Detail Description */}
                    <div className="font-body text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed mb-6 space-y-3">
                      {item.detail.split('\n\n').map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Accent Footer */}
                  <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between font-tech text-[11px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent-crimson)]" />
                      Verified Credential
                    </span>
                    <span className="text-[var(--color-accent-salmon)] font-mono">
                      STATUS: {item.period.includes('Learning') || item.badge.includes('Progress') ? 'IN PROGRESS' : item.period.includes('2026') || item.period.includes('Present') ? 'ENROLLED' : 'COMPLETED'}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
