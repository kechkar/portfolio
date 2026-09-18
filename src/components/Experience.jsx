import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';
import algTelecomImg from '../assets/images/algtelecom.png';
import sonatrachImg from '../assets/images/sonatrach.png';
import incubatorImg from '../assets/images/incubator.png';

const experiences = [
  {
    id: 1,
    type: 'INTERNSHIP',
    company: 'Algérie Télécom – Bouira',
    period: 'Jan – Feb 2024',
    title: 'Internship Discovered at Algeria Telecom-Bouira',
    description:
      "A general discovery internship at Algérie Télécom – Bouira, carried out at the Technical Enterprise Center (CTE) from January 20 to February 1, 2024. Explored the company's different services, and their telecommunications equipment, with exposure to Cisco Packet Tracer.",
    year: '2024',
    icon: <Briefcase className="w-4 h-4 text-blue-600" />,
    image: { src: algTelecomImg, fallback: '/images/alg telecom.png', alt: 'Algérie Télécom' },
  },
  {
    id: 2,
    type: 'INTERNSHIP',
    company: 'SONATRACH – Division Exploration-Boumerdas',
    period: 'May – June 2025',
    title: 'Internship | SONATRACH – Division Exploration-Boumerdas',
    description:
      'Designed the official logo for the Division Exploration (SONATRACH), reflecting the core concepts of geology, geophysics and petrophysics, and integrated it into the company’s internal systems.',
    year: '2025',
    icon: <Briefcase className="w-4 h-4 text-blue-600" />,
    image: { src: sonatrachImg, fallback: '/images/sonatrach.png', alt: 'SONATRACH Division Exploration' },
  },
  {
    id: 3,
    type: 'INTERNSHIP',
    company: 'University Incubator',
    period: 'Dec – June 2026',
    title: 'Internship | Startup Project : BricoDz University Incubator',
    description:
      'Building and designing a digital platform that connects clients with qualified artisans, trusted vendors, and equipment rentals.',
    year: '2026',
    icon: <Briefcase className="w-4 h-4 text-blue-600" />,
    image: { src: incubatorImg, fallback: '/images/incubator.png', alt: 'BricoDz University Incubator' },
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#f9f8fe] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">

        {/* Section Label — left-aligned */}
        <div className="mb-8 sm:mb-12">
          <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase bg-blue-50 px-3.5 py-1.5 rounded-lg border border-blue-100/80">
            EXPERIENCE
          </span>
        </div>

        {/* Section Title — centered */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-16 sm:mb-20 text-center">
          Professional Work Experience
        </h2>

        {/* Timeline */}
        <div className="relative">

          {/* Continuous vertical line running down between the timeline items */}
          <div className="absolute left-14 sm:left-16 top-6 bottom-28 w-0.5 bg-gradient-to-b from-blue-400 via-blue-200 to-slate-200 hidden sm:block" />

          <div className="space-y-16 sm:space-y-24">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-10 sm:gap-20 lg:gap-28 relative"
              >
                {/* ── Left: Icon Node + Year ── */}
                <div className="flex flex-col items-center shrink-0 w-28 sm:w-32 pt-1">
                  {/* Circular node with animated pop */}
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.15 }}
                    className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 border-2 border-blue-200/90 shadow-md shadow-blue-100/50 mb-3"
                  >
                    {exp.icon}
                  </motion.div>

                  {/* Year display */}
                  <span className="text-slate-900 font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-none text-center">
                    {exp.year}
                  </span>
                </div>

                {/* ── Right: Content — open layout shifted to the right ── */}
                <div className="flex-1 pl-4 sm:pl-10 lg:pl-14">

                  {/* Meta row: pill badge for INTERNSHIP (company) + period */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 max-w-3xl">
                    <span className="inline-flex items-center gap-1.5 bg-blue-50/90 text-blue-600 font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full border border-blue-100/80 tracking-wide shadow-xs">
                      <span>{exp.type}</span>
                      <span className="font-semibold text-blue-500/90">({exp.company})</span>
                    </span>
                    <span className="text-blue-600 text-xs sm:text-sm font-semibold">
                      {exp.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight mb-3 leading-snug max-w-3xl">
                    {exp.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed max-w-3xl mb-8">
                    {exp.description}
                  </p>

                  {/* Floating image — full-width aligned, per-image cropping */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg shadow-slate-200/60 border border-slate-200/80 bg-white"
                  >
                    <img
                      src={exp.image.src}
                      alt={exp.image.alt}
                      className={
                        exp.id === 1
                          ? "w-full h-auto object-contain block"
                          : exp.id === 2
                          ? "w-full max-h-[360px] object-cover object-top block"
                          : "w-full h-auto object-contain block"
                      }
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = exp.image.fallback;
                      }}
                    />
                  </motion.div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
