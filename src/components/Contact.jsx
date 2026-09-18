import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, ChevronDown, CheckCircle2, AlertCircle, Send } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────
//  EmailJS credentials  →  replace with your own after setup
//  Guide: https://www.emailjs.com/docs/tutorial/overview/
// ─────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_1w4bok8';
const EMAILJS_TEMPLATE_ID = 'template_hdro2ey';
const EMAILJS_PUBLIC_KEY  = '67D6XJkTPL05J9-S-';

export default function Contact() {
  const formRef = useRef(null);
  const [isSubmitted, setIsSubmitted]   = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setIsSubmitted(true);
      formRef.current.reset();
      setTimeout(() => setIsSubmitted(false), 8000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setErrorMessage('Failed to send. Please email me directly at kechkar_zineb.fs@univ-boumerdes.dz');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#f9f8fe] text-slate-900 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">

        {/* Section Badge */}
        <div className="mb-8 sm:mb-12">
          <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase bg-blue-50 px-3.5 py-1.5 rounded-lg border border-blue-100/80">
            CONTACT
          </span>
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/40 p-8 sm:p-12 lg:p-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* ── Left Column ── */}
            <div className="lg:col-span-5 flex flex-col">
              <div>
                {/* Available for Work Badge */}
                <div className="mb-4">
                  <div className="inline-flex items-center gap-2.5 bg-blue-50/70 border border-blue-100/80 rounded-full px-3.5 py-1.5">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <p className="text-xs font-bold text-slate-800">Available for work</p>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3 sm:whitespace-nowrap">
                  Let's work together
                </h2>

                <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mb-8 max-w-md">
                  I'm always excited for new projects. Whether you need a website, a web app, or just want to collaborate on a UI/UX or graphic design project, feel free to reach out!
                </p>

                {/* Contact Info */}
                <div className="space-y-5 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100/80 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-0.5">EMAIL</p>
                      <a
                        href="mailto:kechkar_zineb.fs@univ-boumerdes.dz"
                        className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors break-all"
                      >
                        kechkar_zineb.fs@univ-boumerdes.dz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100/80 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-0.5">LOCATION</p>
                      <p className="text-sm sm:text-[15px] font-semibold text-slate-800">Bouira, Algeria</p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-slate-100 w-full mb-6" />

                {/* Social Links */}
                <div>
                  <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-3">FIND ME ON</p>
                  <div className="flex items-center gap-3">
                    <a href="https://github.com/kechkar" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                      className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center hover:border-slate-400 hover:shadow-md hover:scale-105 transition-all duration-200">
                      <svg className="w-5 h-5 fill-slate-900" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/zineb-kechkar-407805296" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                      className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center hover:border-blue-400 hover:shadow-md hover:scale-105 transition-all duration-200">
                      <svg className="w-5 h-5 fill-[#0077B5]" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                    </a>
                    <a href="https://wa.me/213542906368" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                      className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center hover:border-emerald-400 hover:shadow-md hover:scale-105 transition-all duration-200">
                      <svg className="w-5 h-5 fill-[#25D366]" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.8 2.53 1.09 2.53.73 2.99.69.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Column: Form ── */}
            <div className="lg:col-span-7">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold tracking-wider text-slate-500 uppercase mb-2">YOUR NAME</label>
                    <input
                      id="contact-name" type="text" name="from_name" required placeholder="John Doe"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold tracking-wider text-slate-500 uppercase mb-2">EMAIL ADDRESS</label>
                    <input
                      id="contact-email" type="email" name="from_email" required placeholder="you@example.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Inquiry */}
                <div>
                  <label htmlFor="contact-inquiry" className="block text-xs font-bold tracking-wider text-slate-500 uppercase mb-2">PROJECT INQUIRY</label>
                  <div className="relative">
                    <select
                      id="contact-inquiry" name="inquiry"
                      className="w-full appearance-none px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all pr-10 cursor-pointer"
                    >
                      <option value="" disabled>Select a project type</option>
                      <option value="Web Development">Web Development</option>
                      <option value="App Development">App Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Branding & Graphic Design">Branding &amp; Graphic Design</option>
                      <option value="Full Stack Application">Full Stack Application</option>
                      <option value="Other Inquiry">Other Inquiry</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Row 3: Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold tracking-wider text-slate-500 uppercase mb-2">MESSAGE</label>
                  <textarea
                    id="contact-message" name="message" rows={5} required placeholder="Tell me about your project..."
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all resize-y min-h-[130px]"
                  />
                </div>

                {/* Success */}
                {isSubmitted && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                )}

                {/* Error */}
                {errorMessage && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {/* Submit */}
                <button
                  type="submit" disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-md shadow-blue-500/25 hover:shadow-blue-500/35 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
