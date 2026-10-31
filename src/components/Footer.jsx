import React from 'react';
import Logo from './Logo';
import { personalInfo } from '../data/portfolio';
import { Linkedin, Mail, Phone, ArrowUp, Heart, Terminal } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-obsidian-card/40 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/60">
          {/* Brand info (md: 5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size="md" />
              <div>
                <span className="font-display font-bold text-lg text-white tracking-tight">
                  Sameh Reda Wahiba
                </span>
                <span className="block text-xs font-mono text-emerald-400">
                  AI &amp; Computer Vision Engineer
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              4th-year Artificial Intelligence student at Delta University for Science &amp; Technology, specializing in Computer Vision, Deep Learning, and Embedded ML solutions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                title="Email Sameh"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                title="Direct Phone"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (md: 3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  About Background
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Technical Stack
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Applied Projects
                </a>
              </li>
              <li>
                <a href="#education" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Education &amp; Languages
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Verification & System Status (md: 4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">
              System Specification
            </h4>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs font-mono space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span>Theme:</span>
                <span className="text-emerald-400">Obsidian &amp; Emerald</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Institution:</span>
                <span className="text-slate-200">Delta University (DUST)</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Verification:</span>
                <span className="text-emerald-400">100% CV Authenticated</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Status:</span>
                <span className="text-amber-400">Open for Opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Sameh Reda Wahiba. Built with React &amp; Tailwind CSS.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors cursor-pointer group"
          >
            <span>Back to Top</span>
            <div className="w-6 h-6 rounded-md bg-slate-900 border border-slate-800 group-hover:border-emerald-500/50 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
