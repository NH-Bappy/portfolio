import React, { useState, useEffect } from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-[var(--color-border)] bg-[var(--color-card)] hover:bg-[var(--color-pill-bg)] transition-all shadow-[2px_2px_0px_var(--color-border)] active:translate-y-0.5 active:shadow-none text-xs font-bold font-tech tracking-wider uppercase cursor-pointer"
      title={`Switch to ${theme === 'light' ? 'Mythic Dark' : 'Retro Light'} Mode`}
      aria-label="Toggle visual theme"
    >
      <div className="flex items-center gap-1.5">
        {theme === 'light' ? (
          <>
            <Sun className="w-3.5 h-3.5 text-[var(--color-accent-salmon)] animate-spin-slow" />
            <span className="hidden sm:inline">Retro Poster</span>
          </>
        ) : (
          <>
            <Moon className="w-3.5 h-3.5 text-[var(--color-accent-sage)]" />
            <span className="hidden sm:inline">Mythic Dark</span>
          </>
        )}
      </div>
      <Sparkles className="w-3 h-3 text-[var(--color-accent-yellow)]" />
    </button>
  );
}
