import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      type="button"
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-emerald-400 shadow-xl shadow-emerald-950/40 hover:bg-emerald-500 hover:text-obsidian-bg transition-all duration-300 hover:scale-110 active:scale-95 group backdrop-blur-md cursor-pointer"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}
