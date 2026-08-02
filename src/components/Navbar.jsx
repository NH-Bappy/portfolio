import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Hero', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#about' },
    { label: 'Skills Stack', href: '#skills' },
    { label: 'Education & Cert', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-[var(--color-bg)]/90 backdrop-blur-md border-b-2 border-[var(--color-border)] shadow-md'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Tag */}
        <a
          href="#hero"
          className="flex items-center gap-2 group cursor-pointer text-decoration-none"
        >
          <img
            src="/profile.png"
            alt={personalInfo.name}
            className="w-9 h-9 rounded-full border-2 border-[var(--color-border)] object-cover shadow-[2px_2px_0px_var(--color-border)] group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-display font-bold text-base tracking-wider uppercase leading-none text-[var(--color-text-main)]">
              {personalInfo.name}
            </span>
            <span className="font-tech text-[10px] text-[var(--color-text-muted)] tracking-widest uppercase">
              2026 Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-[var(--color-card)]/80 backdrop-blur border-2 border-[var(--color-border)] px-4 py-1.5 rounded-full shadow-[3px_3px_0px_var(--color-border)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1 text-xs font-tech font-bold uppercase tracking-wider text-[var(--color-text-main)] hover:text-[var(--color-accent-crimson)] hover:bg-[var(--color-pill-bg)] rounded-full transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA + Theme Toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1 px-4 py-1.5 bg-[var(--color-accent-crimson)] text-white border-2 border-[var(--color-border)] rounded-full font-tech font-bold text-xs uppercase tracking-wider shadow-[2px_2px_0px_var(--color-border)] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_var(--color-border)] transition-all"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md border-2 border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text-main)] shadow-[2px_2px_0px_var(--color-border)]"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-card)] border-b-2 border-[var(--color-border)] px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-tech font-bold uppercase tracking-wider text-[var(--color-text-main)] border-b border-[var(--color-border-subtle)] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent-salmon)]" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 bg-[var(--color-accent-crimson)] text-white border-2 border-[var(--color-border)] font-tech font-bold text-sm uppercase tracking-wider rounded-md shadow-[3px_3px_0px_var(--color-border)]"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
