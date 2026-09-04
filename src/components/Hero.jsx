import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Github, Linkedin, Mail, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-6 pb-20 lg:pt-12 lg:pb-32 overflow-hidden bg-[#f9f8fe]">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Background Wavy Curves SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full h-48 pointer-events-none opacity-40 -z-10"
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,128L60,117.3C120,107,240,85,360,96C480,107,600,149,720,154.7C840,160,960,128,1080,112C1200,96,1320,96,1380,96L1440,96L1440,200L1380,200C1320,200,1200,200,1080,200C960,200,840,200,720,200C600,200,480,200,360,200C240,200,120,200,60,200L0,200Z"
          fill="url(#wave-gradient)"
        />
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(224, 231, 255, 0.4)" />
            <stop offset="50%" stopColor="rgba(243, 232, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(219, 234, 254, 0.4)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: INTRO CONTENT ================= */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6 sm:space-y-8 text-left"
          >
            {/* Main Title Heading */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
                Hi, I'm
              </h2>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900">
                Zineb <span className="text-gradient-primary">Kechkar</span>
              </h1>
            </div>

            {/* Subheading Tagline */}
            <p className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug">
              I build modern{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                web &amp; mobile
              </span>{' '}
              applications.
            </p>

            {/* Paragraph Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
              Full Stack Developer &amp; UI/UX Designer passionate about building scalable solutions and designing intuitive, user-friendly digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-white border-2 border-indigo-400/50 text-indigo-950 font-bold text-base shadow-sm hover:border-indigo-600 hover:bg-indigo-50/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Contact Me</span>
                <MessageCircle className="w-5 h-5 text-indigo-600" />
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 pt-4 relative z-10">
              {/* GitHub Card */}
              <a
                href="https://github.com/kechkar"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center hover:border-slate-400 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                <svg className="w-6 h-6 fill-slate-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/zineb-kechkar-407805296"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center hover:border-blue-400 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                <svg className="w-6 h-6 fill-[#0077B5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* Mail Card */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kechkar_zineb.fs@univ-boumerdes.dz"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center hover:border-indigo-400 hover:shadow-md hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
            </div>
          </motion.div>


          {/* ================= RIGHT COLUMN: VISUAL SPOTLIGHT ================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 relative flex items-center justify-center mt-6 lg:mt-0"
          >
            {/* Concentric Glow Circles & Dot Pattern */}
            <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] lg:w-[480px] lg:h-[480px] flex items-center justify-center">
              
              {/* Dot Grid Background */}
              <div className="absolute inset-0 bg-grid-dots opacity-70 rounded-full -z-10 scale-110" />

              {/* Outer Decorative Soft Purple Gradient Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-indigo-200/50 bg-gradient-to-br from-indigo-100/30 to-purple-100/10 animate-pulse-glow" />
              
              {/* Inner White Glow Halo */}
              <div className="absolute inset-6 rounded-full bg-white/60 shadow-xl backdrop-blur-sm" />

              {/* Main Avatar Container */}
              <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-indigo-500/15 bg-gradient-to-b from-amber-50 to-orange-100 flex items-center justify-center">
                <img
                  src="file:///C:/Users/ACS/.gemini/antigravity/brain/dd091c7f-980b-48d9-acd7-5017af090ded/avatar_zineb_1787615099978.png"
                  alt="Zineb Kechkar Portrait"
                  className="w-full h-full object-cover object-top scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/avatar.png";
                  }}
                />
              </div>

              {/* ================= FLOATING CARD 1: Full Stack Developer ================= */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-4 sm:-left-8 bottom-12 sm:bottom-16 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-100 max-w-[210px] sm:max-w-[230px] z-20"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                    <Code2 className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      Full Stack Developer
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1 text-[11px] font-semibold text-slate-500 leading-tight">
                      <span>React</span> • <span>Node.js</span> • <span>MongoDB</span> • <span>Android</span> • <span>Express</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ================= FLOATING TECH BADGES ================= */}
              
              {/* Badge 1: Figma (Bottom Center) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-2.5 shadow-lg border border-slate-100 z-20 flex items-center justify-center"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#1ABCFE"/>
                    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                  </svg>
                </div>
              </motion.div>

              {/* Badge 2: Adobe Illustrator (Right Mid) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 bg-[#330000] text-[#FF9A00] font-black text-sm rounded-2xl w-11 h-11 shadow-lg border border-amber-900/30 z-20 flex items-center justify-center tracking-tighter"
              >
                Ai
              </motion.div>

              {/* Badge 3: Node.js / JS (Lower Right) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute right-4 sm:right-6 bottom-24 sm:bottom-28 bg-white rounded-2xl p-2.5 shadow-lg border border-slate-100 z-20 flex items-center justify-center"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 font-extrabold text-xs flex items-center justify-center border border-emerald-200">
                  [JS]
                </div>
              </motion.div>

              {/* Badge 4: Android Logo (Bottom Right) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute right-12 sm:right-16 -bottom-2 bg-white rounded-2xl p-2.5 shadow-lg border border-slate-100 z-20 flex items-center justify-center"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#3DDC84" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.523 15.3414C17.0583 15.3414 16.6809 14.964 16.6809 14.4993C16.6809 14.0347 17.0583 13.6573 17.523 13.6573C17.9877 13.6573 18.3651 14.0347 18.3651 14.4993C18.3651 14.964 17.9877 15.3414 17.523 15.3414ZM6.477 15.3414C6.0123 15.3414 5.6349 14.964 5.6349 14.4993C5.6349 14.0347 6.0123 13.6573 6.477 13.6573C6.9417 13.6573 7.3191 14.0347 7.3191 14.4993C7.3191 14.964 6.9417 15.3414 6.477 15.3414ZM17.8767 10.9634L19.5294 8.0991C19.6644 7.8654 19.5843 7.5663 19.3506 7.4313C19.1169 7.2963 18.8178 7.3764 18.6828 7.6101L17.001 10.5237C15.5262 9.8517 13.8402 9.4722 12.0003 9.4722C10.1604 9.4722 8.4744 9.8517 7.0002 10.5237L5.3178 7.6101C5.1828 7.3764 4.8837 7.2963 4.65 7.4313C4.4163 7.5663 4.3362 7.8654 4.4712 8.0991L6.1239 10.9634C2.6505 12.8718 0.2646 16.3842 0 20.4705H24C23.7354 16.3842 21.3495 12.8718 17.8767 10.9634Z" />
                  </svg>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
