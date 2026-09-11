import React from 'react';
import { motion } from 'framer-motion';
import { Folder, Award, GraduationCap, ExternalLink, Rocket, Code2, Pencil, Palette } from 'lucide-react';
import avatarImg from '../assets/images/avatar.png';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#f9f8fe] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Label Badge */}
        <div className="mb-8 sm:mb-12">
          <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100/80">
            ABOUT ME
          </span>
        </div>

        {/* Top Profile Content Grid */}
        <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-14">
          
          {/* Avatar Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shrink-0 border-4 border-slate-100 shadow-xl bg-gradient-to-b from-amber-50 to-orange-100"
          >
            <img
              src={avatarImg}
              alt="Zineb Kechkar Portrait"
              className="w-full h-full object-cover object-top scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/avatar.png";
              }}
            />
          </motion.div>

          {/* Text Content & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6"
          >
            {/* Name Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Zineb Kechkar
            </h2>

            {/* Stat Cards Row */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-8 py-1">
              
              {/* Stat 1: Projects */}
              <div className="flex items-center gap-2.5">
                <div className="text-slate-800">
                  <Folder className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    PROJECTS
                  </div>
                  <div className="text-base sm:text-lg font-bold text-blue-600 leading-none mt-0.5">
                    10+
                  </div>
                </div>
              </div>

              <div className="hidden sm:block w-[1px] h-7 bg-slate-200" />

              {/* Stat 2: Certificates */}
              <div className="flex items-center gap-2.5">
                <div className="text-slate-800">
                  <Award className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    CERTIFICATES
                  </div>
                  <div className="text-base sm:text-lg font-bold text-blue-600 leading-none mt-0.5">
                    3+
                  </div>
                </div>
              </div>

              <div className="hidden sm:block w-[1px] h-7 bg-slate-200" />

              {/* Stat 3: BSIT Graduated */}
              <div className="flex items-center gap-2.5">
                <div className="text-slate-800">
                  <GraduationCap className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    BSIT GRADUATED
                  </div>
                  <div className="text-base sm:text-lg font-bold text-blue-600 leading-none mt-0.5">
                    2026
                  </div>
                </div>
              </div>

            </div>

            {/* Paragraphs */}
            <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                I'm a <strong className="text-slate-900 font-bold">Full Stack Developer</strong>,{' '}
                <strong className="text-slate-900 font-bold">UI/UX Designer</strong>, and{' '}
                <strong className="text-slate-900 font-bold">Graphic Designer</strong> with a Licence Professionnelle in Computer Science (Web Development and Infographie) from the{' '}
                <a href="#about" className="text-blue-600 font-bold hover:underline">
                  University of Boumerdes
                </a>, graduated in <strong className="text-slate-900 font-bold">June 2026</strong>.
              </p>

              <p>
                I combine technical expertise with creative design to build modern web and mobile applications, intuitive user experiences, and engaging visual identities.
              </p>

              <p>
                I'm also the <strong className="text-slate-900 font-bold">founder and builder</strong> of a startup{' '}
                <a 
                  href="https://bricodz-website.onrender.com/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>BricoDz</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>.
              </p>
            </div>

          </motion.div>

        </div>

        {/* Bottom Feature Cards Grid (5 Column Layout in 1 Line) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 mt-10 sm:mt-12"
        >
          {/* Card 1: Licence Pro in CS */}
          <div className="bg-slate-50/80 border border-slate-200/90 shadow-sm rounded-2xl p-4 hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-100/70 text-indigo-600 flex items-center justify-center mb-3">
                <GraduationCap className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug mb-1">
                Licence Pro in CS
              </h3>
            </div>
            <div className="mt-2">
              <a href="#about" className="text-blue-600 font-semibold text-xs hover:underline block mb-0.5">
                University of Boumerdes
              </a>
              <p className="text-slate-500 text-[11px] font-medium">
                Graduated June 2026
              </p>
            </div>
          </div>

          {/* Card 2: Startup Founder */}
          <div className="bg-slate-50/80 border border-slate-200/90 shadow-sm rounded-2xl p-4 hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-100/70 text-rose-500 flex items-center justify-center mb-3">
                <Rocket className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug mb-2">
                Startup Founder
              </h3>
              <p className="text-slate-600 text-xs leading-snug">
                <a 
                  href="https://bricodz-website.onrender.com/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>BricoDz</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>

          {/* Card 3: Build */}
          <div className="bg-slate-50/80 border border-slate-200/90 shadow-sm rounded-2xl p-4 hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center mb-3">
                <Code2 className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug mb-2">
                Build
              </h3>
              <p className="text-slate-600 text-xs leading-snug">
                I develop robust web &amp; mobile app using modern technologies.
              </p>
            </div>
          </div>

          {/* Card 4: Design */}
          <div className="bg-slate-50/80 border border-slate-200/90 shadow-sm rounded-2xl p-4 hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-pink-100/70 text-pink-500 flex items-center justify-center mb-3">
                <Pencil className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug mb-2">
                Design
              </h3>
              <p className="text-slate-600 text-xs leading-snug">
                I design intuitive UI/UX experiences
              </p>
            </div>
          </div>

          {/* Card 5: Create */}
          <div className="bg-slate-50/80 border border-slate-200/90 shadow-sm rounded-2xl p-4 hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-500 flex items-center justify-center mb-3">
                <Palette className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug mb-2">
                Create
              </h3>
              <p className="text-slate-600 text-xs leading-snug">
                I create graphics that bring brands to life.
              </p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
