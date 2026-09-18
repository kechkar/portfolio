import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, ChevronRight, ChevronLeft, Github, Globe, X } from 'lucide-react';
import bricoImg from '../assets/images/brico.png';
import hospitalImg from '../assets/images/HOSPITAL.png';
import hosImg from '../assets/images/hos.png';
import rommifyImg from '../assets/images/rommify.png';
import design1Img from '../assets/images/design1.png';
import design2Img from '../assets/images/DESIGN2.png';
import bricoFlyerImg from '../assets/images/BricoDz-Flyer.png';
import worktrackImg from '../assets/images/worktrack.png';
import mainlogoImg from '../assets/images/mainlogo.png';

export default function Projects() {
  const [selectedDesign, setSelectedDesign] = useState(null);
  // Start at 0: original 3 cards visible first, clicking → right reveals the new cards.
  const [activeSlide, setActiveSlide] = useState(0);

  const designWorks = [
    {
      id: '01',
      title: 'Poster Design',
      description: 'Creative poster design with a modern and artistic look.',
      imageSrc: design1Img,
      fallbackImg: '/images/design1.png',
      objectPosition: 'center top',
    },
    {
      id: '02',
      title: 'Social Media Post',
      description: 'Promotional design for a burger restaurant with a bold and appetizing style.',
      imageSrc: design2Img,
      fallbackImg: '/images/DESIGN2.png',
      objectPosition: 'center',
    },
    {
      id: '03',
      title: 'Flyer Design',
      description: 'Promotional flyer design for BricoDz platform with a clean and professional look.',
      imageSrc: bricoFlyerImg,
      fallbackImg: '/images/BricoDz-Flyer.png',
      objectPosition: 'center top',
    },
    {
      id: '04',
      title: 'WorkTrack Logo',
      description: 'Logo designed for WorkTrack, a task and project management application, combining productivity and clarity in a modern identity.',
      imageSrc: worktrackImg,
      fallbackImg: '/images/worktrack.png',
      objectPosition: '15% center',
    },
    {
      id: '05',
      title: 'University of Boumerdes — Logo Redesign',
      description: 'Redesign of the official logo of the University of Boumerdes, modernizing its visual identity while preserving institutional values.',
      imageSrc: mainlogoImg,
      fallbackImg: '/images/Main_logo.png',
      objectPosition: 'center',
    },
  ];

  const CARDS_PER_PAGE = 3; // desktop visible cards
  const maxStart = Math.max(0, designWorks.length - CARDS_PER_PAGE);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => Math.min(maxStart, prev + 1));
  };

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
    {
      id: '03',
      title: 'Rommify',
      tagline: 'Paint, Decor & Home Improvement',
      description:
        'A modern and responsive website for a paint and home decor brand, showcasing products and services with a clean and elegant design. I also designed the brand identity, including the logo and promotional flyer.',
      badge: 'WEB & BRANDING PROJECT',
      badgePlacement: 'adjacent', // badge right next to 03
      badgeStyle: 'blue',
      statusText: 'Live website showcasing products and branding',
      techStack: [
        'HTML',
        'CSS',
        'JavaScript',
        'Logo Design',
        'Flyer Design',
      ],
      liveUrl: 'https://rommify-3d-paint-decor.vercel.app/',
      caseStudyUrl: 'https://rommify-3d-paint-decor.vercel.app/',
      imageSrc: rommifyImg,
      fallbackImg: '/images/rommify.png',
      imagePosition: 'left', // image on left, info on right
      imageColSpan: 'lg:col-span-6',
      infoColSpan: 'lg:col-span-6',
      buttons: [
        {
          label: 'View case study',
          href: 'https://rommify-3d-paint-decor.vercel.app/',
          variant: 'gradient',
          icon: 'arrow',
        },
        {
          label: 'Live Demo (Web)',
          href: 'https://rommify-3d-paint-decor.vercel.app/',
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
            const imgCol = project.imageColSpan || (isImageRight ? 'lg:col-span-6' : 'lg:col-span-7');
            const infoCol = project.infoColSpan || (isImageRight ? 'lg:col-span-6' : 'lg:col-span-5');

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
                    className={`w-full ${imgCol} ${isImageRight
                        ? 'lg:order-2 order-2'
                        : 'lg:order-1 order-1'
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
                    className={`flex flex-col justify-between h-full space-y-5 ${infoCol} ${isImageRight
                        ? 'lg:order-1 order-1'
                        : 'lg:order-2 order-2'
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
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                      {project.buttons.map((btn, bIdx) => {
                        if (btn.variant === 'primary-blue') {
                          return (
                            <a
                              key={bIdx}
                              href={btn.href}
                              target={btn.href.startsWith('http') ? '_blank' : undefined}
                              rel={btn.href.startsWith('http') ? 'noreferrer' : undefined}
                              className="bg-[#1d6fe9] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center gap-2 whitespace-nowrap shrink-0"
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
                              className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:opacity-95 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center gap-2 whitespace-nowrap shrink-0"
                            >
                              <span>{btn.label}</span>
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          );
                        }

                        if (btn.variant === 'link') {
                          return (
                            <a
                              key={bIdx}
                              href={btn.href}
                              target={btn.href.startsWith('http') ? '_blank' : undefined}
                              rel={btn.href.startsWith('http') ? 'noreferrer' : undefined}
                              className="text-slate-700 hover:text-blue-600 font-semibold text-xs sm:text-sm transition-colors flex items-center gap-2 py-2 group whitespace-nowrap"
                            >
                              {btn.icon === 'github' && (
                                <Github className="w-4 h-4 text-slate-800 group-hover:text-blue-600 transition-colors" />
                              )}
                              {btn.icon === 'globe' && (
                                <Globe className="w-4 h-4 text-slate-600 group-hover:text-blue-600 transition-colors" />
                              )}
                              {btn.icon === 'external' && (
                                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-colors" />
                              )}
                              <span>{btn.label}</span>
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

        {/* ================= DESIGN WORK SHOWCASE SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full pt-16 sm:pt-20 lg:pt-24"
        >
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100/80 inline-block mb-3">
              DESIGN WORK
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
              Visual Designs for Real Brands
            </h3>
            <p className="text-slate-500 font-medium text-xs sm:text-sm md:text-base leading-relaxed">
              Logos, flyers, and social media designs created to build strong and consistent brand identities.
            </p>
          </div>

          {/* Carousel / Grid Container with Navigation Arrows */}
          <div className="relative px-0 sm:px-3 lg:px-5">
            {/* Prev Arrow */}
            <button
              onClick={handlePrevSlide}
              aria-label="Previous Design"
              disabled={activeSlide === 0}
              className="absolute -left-3 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:scale-110 active:scale-95 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Sliding Carousel Window */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6 sm:gap-8"
                animate={{ x: `calc(-${activeSlide} * (100% / 3 + 2rem / 3 * 2))` }}
                transition={{ type: 'spring', stiffness: 300, damping: 35 }}
              >
                {designWorks.map((work) => (
                  <div
                    key={work.id}
                    onClick={() => setSelectedDesign(work)}
                    className="group relative shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] h-[360px] sm:h-[390px] lg:h-[410px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl border border-slate-200/70 bg-slate-900 transition-all duration-500"
                  >
                    {/* High-res Image */}
                    <img
                      src={work.imageSrc}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ objectPosition: work.objectPosition || 'center' }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = work.fallbackImg;
                      }}
                    />

                    {/* Dark Vignette / Gradient Overlay - Hidden initially, Reveals on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    {/* Title & Description Overlay - Hidden until Hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-20 flex items-end justify-between gap-3 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                      <div className="flex-1 min-w-0 pr-2">
                        <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1">
                          {work.title}
                        </h4>
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal line-clamp-2">
                          {work.description}
                        </p>
                      </div>

                      {/* View Button */}
                      <div className="w-10 h-10 rounded-2xl bg-white/15 hover:bg-white/30 border border-white/25 backdrop-blur-md flex items-center justify-center text-white shrink-0 transition-all shadow-md">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Next Arrow */}
            <button
              onClick={handleNextSlide}
              aria-label="Next Design"
              disabled={activeSlide >= maxStart}
              className="absolute -right-3 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:scale-110 active:scale-95 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.2]" />
            </button>
          </div>

          {/* Pagination Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxStart + 1 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveSlide(dotIdx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeSlide === dotIdx
                    ? 'w-7 bg-blue-600'
                    : 'w-2.5 bg-blue-200 hover:bg-blue-300'
                }`}
                aria-label={`Design slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* ================= LIGHTBOX PREVIEW MODAL ================= */}
        <AnimatePresence>
          {selectedDesign && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDesign(null)}
              className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden border border-slate-700/60 shadow-2xl flex flex-col"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {selectedDesign.title}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {selectedDesign.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedDesign(null)}
                    aria-label="Close modal"
                    className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Image Display */}
                <div className="p-4 sm:p-6 overflow-y-auto flex items-center justify-center bg-slate-950">
                  <img
                    src={selectedDesign.imageSrc}
                    alt={selectedDesign.title}
                    className="max-h-[72vh] w-auto object-contain rounded-2xl shadow-xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
