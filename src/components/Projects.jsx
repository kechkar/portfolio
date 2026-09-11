import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, ChevronRight } from 'lucide-react';
import bricoImg from '../assets/images/brico.png';

export default function Projects() {
  const projects = [
    {
      id: '01',
      title: 'BricoDz',
      tagline: 'All your construction needs in one platform',
      description:
        'BricoDz is a digital platform (web and mobile app) that connects clients with trusted artisans, material vendors, and equipment renters in Algeria.',
      badge: 'Startup Project',
      statusText: 'Live in production with real users',
      techStack: [
        'React.js',
        'TypeScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Tailwind CSS',
        'Android',
      ],
      liveUrl: 'https://bricodz-website.onrender.com/',
      imageSrc: bricoImg,
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#f9f8fe] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100/80">
            MY PROJECTS
          </span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-12 sm:mb-16 text-center">
          Selected Work
        </h2>

        {/* Projects List */}
        <div className="w-full space-y-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Column: Enhanced Crisp Showcase Image */}
                <div className="lg:col-span-7 w-full">
                  <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-[#f4f3f8]">
                    <img
                      src={project.imageSrc}
                      alt={`${project.title} Showcase`}
                      className="w-full h-auto object-cover rounded-2xl contrast-[1.03] saturate-[1.02] [image-rendering:-webkit-optimize-contrast]"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/brico.png";
                      }}
                    />
                  </div>
                </div>

                {/* Right Column: Project Info & Details */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-5">
                  
                  <div>
                    {/* ID and Tag Row */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-blue-500/80 font-bold text-sm sm:text-base tracking-wide">
                        {project.id}
                      </span>
                      <span className="bg-[#fff3eb] text-[#ff6622] font-bold text-xs px-3.5 py-1 rounded-full border border-orange-100">
                        {project.badge}
                      </span>
                    </div>

                    {/* Main Project Title */}
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                      {project.title}
                    </h3>

                    {/* Subtitle / Tagline */}
                    <p className="text-slate-500 font-medium text-base sm:text-lg mb-4">
                      {project.tagline}
                    </p>

                    {/* Description Paragraph */}
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium mb-6">
                      {project.description}
                    </p>

                    {/* Status Pill Box */}
                    <div className="bg-[#f0f6ff] border border-blue-100/70 rounded-2xl p-3.5 sm:p-4 mb-6 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                        <span className="text-slate-700 font-bold text-xs sm:text-sm">
                          {project.statusText}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100/80 text-slate-700 font-medium text-xs px-3.5 py-1.5 rounded-xl border border-slate-200/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons Row */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {/* Primary Button: View case study (Using Hero "View My Projects" Blue/Cyan Gradient) */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:opacity-95 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center gap-2"
                    >
                      <span>View case study</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    {/* Secondary Link: Live Demo (Web) */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 transition-colors flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4 text-slate-400" />
                      <span>Live Demo (Web)</span>
                    </a>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
