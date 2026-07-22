import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { marqueeItems } from '../data/portfolioData';

export default function MarqueeTicker() {
  const tickerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(tickerRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: 'none',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-[var(--color-card)] border-y-2 border-[var(--color-border)] py-2.5 overflow-hidden shadow-[0_4px_12px_var(--color-shadow)]">
      <div
        ref={tickerRef}
        className="flex whitespace-nowrap gap-8 w-max font-tech font-bold uppercase text-xs sm:text-sm tracking-widest text-[var(--color-text-main)]"
      >
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="hover:text-[var(--color-accent-crimson)] transition-colors cursor-default">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
