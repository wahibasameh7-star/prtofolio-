import React, { useState } from 'react';
import { ArrowUpRight, FolderGit2, Sparkles, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/portfolio';
import ProjectModal from './ProjectModal';

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Computer Vision', 'Machine Learning', 'Deep Learning', 'Data Analysis'];

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/25 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Applied Engineering Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-emerald">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Hands-on machine learning architectures, medical computer vision pipelines, and multimodal forensic systems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-bold shadow-md shadow-emerald-500/25'
                  : 'bento-card text-gray-400 hover:text-white hover:bg-white/5 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bento-card bento-card-hover overflow-hidden flex flex-col justify-between border border-emerald-500/15 group"
            >
              <div>
                {/* Project Image & Pill */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#06090E] flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-2 group-hover:scale-102 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F18]/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-[#06090E]/90 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Accuracy Badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-emerald-950/90 text-emerald-400 border border-emerald-400/40 shadow-lg">
                      {project.keyMetrics[0].value}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300/80 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Highlights directly from CV */}
                  <div className="space-y-2 pt-1 border-t border-white/5">
                    {project.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-300 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 4).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#090E17] text-gray-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors py-2"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] font-mono text-gray-500">
                  {project.tags[0]}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
