import React from 'react';
import { ArrowRight, Mail, Linkedin, Phone, Cpu, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-circuit-pattern"
    >
      {/* Background Cyber Glow Spheres */}
      <div className="absolute top-1/4 left-10 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 translate-x-1/2 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Real-time Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-mono tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Delta University • 4th Year AI & Embedded Systems</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <p className="text-gray-400 text-base sm:text-lg font-mono">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {personalInfo.fullName}
              </h1>
              <div className="pt-1">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient-emerald">
                  Machine Learning, Computer Vision
                </span>
                <span className="block text-lg sm:text-xl font-medium text-gray-300 mt-1 font-mono">
                  & Embedded Systems / IoT
                </span>
              </div>
            </div>

            {/* Summary directly from CV */}
            <p className="text-gray-300/90 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.summary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-black font-bold text-sm transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F1623] hover:bg-[#151F32] border border-emerald-500/30 hover:border-emerald-400/60 text-gray-200 font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white/5 hover:bg-emerald-500/10 text-gray-300 hover:text-emerald-400 border border-white/10 text-sm font-medium transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-emerald-400" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Quick Tech Hardware & Model Pills */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-gray-400">
              <span className="text-gray-500 uppercase tracking-wider text-[11px]">Stack:</span>
              <span className="px-2.5 py-1 rounded-md bg-[#0F1623] border border-emerald-500/20 text-emerald-300">
                ESP32 / IoT
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#0F1623] border border-emerald-500/20 text-emerald-300">
                CNN & Vision
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#0F1623] border border-emerald-500/20 text-emerald-300">
                XGBoost / ML
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#0F1623] border border-emerald-500/20 text-emerald-300">
                Flask APIs
              </span>
            </div>

          </div>

          {/* Right Column: Formal Suit Portrait Showcase Card */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              {/* Emerald & Mint Ambient Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 rounded-3xl blur-xl opacity-35 group-hover:opacity-55 transition duration-1000 group-hover:duration-200" />

              {/* Obsidian Card Container */}
              <div className="relative rounded-3xl p-3 sm:p-4 bg-[#0B111A]/95 border border-emerald-500/35 backdrop-blur-xl shadow-2xl">
                
                {/* Tech Hardware Corner Brackets */}
                <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-emerald-400" />
                <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-emerald-400" />
                <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-emerald-400" />
                <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-emerald-400" />

                {/* Portrait Image Container - Displaying Sameh in sharp formal suit */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#111A29] to-[#080D15] aspect-[3/4] flex items-end justify-center">
                  <img
                    src={personalInfo.avatar}
                    alt="Sameh Reda Wahiba - AI & Embedded IoT Engineer"
                    className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-102"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B111A] via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-11/12 px-4 py-2.5 rounded-xl bg-[#0F1623]/95 border border-emerald-500/40 backdrop-blur-md shadow-2xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-white tracking-wide">
                      AI & Embedded Systems
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-500/30">
                    Delta Univ.
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
