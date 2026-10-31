import React from 'react';
import { Cpu, Brain, Eye, BarChart3, Wrench, Database, CheckCircle2, Terminal } from 'lucide-react';
import { skillsData } from '../data/portfolio';

export default function TechStack() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Machine Learning":
        return <Brain className="w-5 h-5 text-emerald-400" />;
      case "Deep Learning":
        return <Cpu className="w-5 h-5 text-teal-400" />;
      case "AI Domains & Computer Vision":
        return <Eye className="w-5 h-5 text-mint-400" />;
      case "Embedded Systems & IoT":
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case "Data Analysis & Processing":
        return <BarChart3 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Wrench className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#06090E]/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/25 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-emerald">Tech Stack</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Practical competencies spanning embedded microcontrollers, sensor telemetries, computer vision models, and end-to-end machine learning pipelines.
          </p>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, idx) => (
            <div 
              key={idx}
              className="bento-card bento-card-hover p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-[#090E17] border border-emerald-500/20">
                    {getCategoryIcon(group.category)}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    {group.skills.length} skills
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {group.category}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#090E17] hover:bg-[#111A29] border border-emerald-500/15 hover:border-emerald-400/50 text-xs font-medium text-gray-200 transition-all cursor-default"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                <span>Verified in CV</span>
                <span className="text-emerald-400">● Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
