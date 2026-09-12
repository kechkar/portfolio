import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, ChevronRight } from 'lucide-react';
import bricoImg from '../assets/images/brico.png';
import hospitalImg from '../assets/images/HOSPITAL.png';
import hosImg from '../assets/images/hos.png';

export default function Projects() {
  const projects = [
    {
      id: '01',
      title: 'BricoDz',
      tagline: 'All your construction needs in one platform',
      description:
        'BricoDz is a digital platform (web and mobile app) that connects clients with trusted artisans, material vendors, and equipment renters in Algeria.',
      badge: 'Startup Project',
      badgePlacement: 'split', // badge on far right
      badgeStyle: 'orange',
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
      caseStudyUrl: 'https://bricodz-website.onrender.com/',
      imageSrc: bricoImg,
      fallbackImg: '/images/brico.png',
      imagePosition: 'left', // image on left, info on right
      buttons: [
        {
          label: 'View case study',
          href: 'https://bricodz-website.onrender.com/',
          variant: 'gradient',
          icon: 'arrow',
        },
        {
          label: 'Live Demo (Web)',
          href: 'https://bricodz-website.onrender.com/',
          variant: 'outline',
          icon: 'external',
        },
      ],
    },
    {
      id: '02',
      title: 'Hospital Internship Management System',
      tagline: 'A centralized platform for managing hospital internships',
      description:
        'A digital platform that simplifies hospital internship management, from student applications to placements and evaluations.',
      badge: 'HOSPITAL MANAGEMENT SYSTEM',
      badgePlacement: 'adjacent', // badge right next to 02
      badgeStyle: 'blue',
      statusText: 'Complete internship management in one platform',
      techStack: [
        'React.js',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'MongoDB',
      ],
      liveUrl: 'https://hospital-managment-inky-seven.vercel.app/',
      caseStudyUrl: 'https://hospital-managment-inky-seven.vercel.app/',
      imageSrc: hosImg,
      fallbackImg: '/images/hos.png',
      imagePosition: 'right', // text on left, image on right
      buttons: [
        {
          label: 'View case study',
          href: 'https://hospital-managment-inky-seven.vercel.app/',
          variant: 'gradient',
          icon: 'arrow',
        },
        {
          label: 'Live Demo (Web)',
          href: 'https://hospital-managment-inky-seven.vercel.app/',
          variant: 'outline',
          icon: 'external',
        },
      ],
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
          {projects.map((project) => {
            const isImageRight = project.imagePosition === 'right';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                  {/* Image Column */}
                  <div
                    className={`w-full ${isImageRight
                        ? 'lg:col-span-6 lg:order-2 order-2'
                        : 'lg:col-span-7 lg:order-1 order-1'
                      }`}
                  >
                    <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-[#f4f3f8]">
                      <img
                        src={project.imageSrc}
                        alt={`${project.title} Showcase`}
                        className="w-full h-auto object-contain rounded-2xl contrast-[1.02] saturate-[1.02] [image-rendering:-webkit-optimize-contrast]"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = project.fallbackImg;
                        }}
                      />
                    </div>
                  </div>

                  {/* Project Info & Details Column */}
                  <div
                    className={`flex flex-col justify-between h-full space-y-5 ${isImageRight
                        ? 'lg:col-span-6 lg:order-1 order-1'
                        : 'lg:col-span-5 lg:order-2 order-2'
                      }`}
                  >
                    <div>
                      {/* ID and Tag Row */}
                      {project.badgePlacement === 'adjacent' ? (
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-blue-500 font-bold text-sm sm:text-base tracking-wide">
                            {project.id}
                          </span>
                          <span className="bg-[#eff6ff] text-[#2563eb] font-bold text-xs px-3.5 py-1 rounded-full border border-blue-100 uppercase tracking-wider">
                            {project.badge}
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-blue-500/80 font-bold text-sm sm:text-base tracking-wide">
                            {project.id}
                          </span>
                          <span className="bg-[#fff3eb] text-[#ff6622] font-bold text-xs px-3.5 py-1 rounded-full border border-orange-100">
                            {project.badge}
                          </span>
                        </div>
                      )}

                      {/* Main Project Title */}
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2 leading-[1.18] max-w-md">
                        {project.title}
                      </h3>

                      {/* Subtitle / Tagline */}
                      <p className="text-slate-500 font-medium text-base sm:text-lg mb-4">
                        {project.tagline}
                      </p>

                      {/* Description Paragraph */}
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal mb-6">
                        {project.description}
                      </p>

                      {/* Status / Feature Pill Box */}
                      <div className="bg-[#f2f7fc] border border-blue-100/60 rounded-2xl p-3.5 sm:p-4 mb-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                          <span className="text-slate-700 font-semibold text-xs sm:text-sm">
                            {project.statusText}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-[#f1f5f9] text-slate-700 font-medium text-xs sm:text-[13px] px-3 sm:px-3.5 py-1.5 rounded-xl border border-slate-200/60 whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      {project.buttons.map((btn, bIdx) => {
                        if (btn.variant === 'primary-blue') {
                          return (
                            <a
                              key={bIdx}
                              href={btn.href}
                              target={btn.href.startsWith('http') ? '_blank' : undefined}
                              rel={btn.href.startsWith('http') ? 'noreferrer' : undefined}
                              className="bg-[#1d6fe9] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center gap-2"
                            >
                              <span>{btn.label}</span>
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          );
                        }

                        if (btn.variant === 'gradient') {
                          return (
                            <a
                              key={bIdx}
                              href={btn.href}
                              target={btn.href.startsWith('http') ? '_blank' : undefined}
                              rel={btn.href.startsWith('http') ? 'noreferrer' : undefined}
                              className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:opacity-95 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center gap-2"
                            >
                              <span>{btn.label}</span>
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          );
                        }

                        return (
                          <a
                            key={bIdx}
                            href={btn.href}
                            target={btn.href.startsWith('http') ? '_blank' : undefined}
                            rel={btn.href.startsWith('http') ? 'noreferrer' : undefined}
                            className="bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 transition-colors flex items-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4 text-slate-400" />
                            <span>{btn.label}</span>
                          </a>
                        );
                      })}
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
