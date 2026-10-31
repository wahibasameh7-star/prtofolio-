import React from 'react';
import { Cpu, Eye, ShieldAlert, Layers, GraduationCap, CheckCircle2, Sparkles, Activity } from 'lucide-react';
import { personalInfo, bentoHighlights } from '../data/portfolio';

export default function BentoAbout() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/25 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Engineering Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-emerald">Sameh</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Bridging the gap between intelligent software algorithms (Machine Learning / Deep Learning) and real-world hardware devices (Embedded Systems / IoT).
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Bento Box 1: Core Story (Span 2 cols) */}
          <div className="md:col-span-2 bento-card bento-card-hover p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/20">
                  Engineering Journey
                </span>
                <span className="text-xs text-gray-500 font-mono">Faculty of AI • 4th Year</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Artificial Intelligence with Physical Hardware Integration
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-2 text-emerald-400">
                <GraduationCap className="w-4 h-4" />
                Delta University for Science and Technology
              </span>
              <span className="text-gray-400">Class of 2027</span>
            </div>
          </div>

          {/* Bento Box 2: Stats (Span 1 col) */}
          <div className="md:col-span-1 bento-card bento-card-hover p-6 sm:p-7 flex flex-col justify-between border-emerald-500/25">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-5">
                <span className="text-xs font-mono uppercase text-gray-300 font-semibold">
                  Verified Benchmarks
                </span>
                <Activity className="w-4 h-4 text-emerald-400" />
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                {personalInfo.stats.map((stat, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-[#090E17] border border-emerald-500/15">
                    <div className="text-xl sm:text-2xl font-black text-gradient-emerald font-mono">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-gray-400 mt-1 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-[11px] text-emerald-300 font-mono">
              ● Hands-on applied project pipelines
            </div>
          </div>

          {/* Bento Box 3, 4, 5: 3 Equal Pillars */}
          {bentoHighlights.slice(0, 3).map((item, idx) => (
            <div 
              key={idx} 
              className="bento-card bento-card-hover p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#090E17] border border-white/10 text-emerald-300">
                    {item.tag}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-400/80" />
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                <span>Active Track</span>
                <span className="text-emerald-400">● Production Ready</span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
