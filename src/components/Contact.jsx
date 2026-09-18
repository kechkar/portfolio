import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Globe, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', inquiry: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 900);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#f9f8fe] text-slate-900 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        {/* Main Card Enclosing the Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/40 p-8 sm:p-12 lg:p-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* ── Left Column: Information & Details ── */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-slate-900 tracking-tight mb-4 sm:whitespace-nowrap">
                  Let's work together
                </h2>

                {/* Description */}
                <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed mb-8">
                  I'm always excited for new projects. Whether you need a website, a web app, or just want to collaborate on a UI/UX or graphic design project, feel free to reach out!
                </p>

                {/* Contact Info Items */}
                <div className="space-y-5 mb-8">
                  {/* Email Item */}
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100/80 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-0.5">
                        EMAIL
                      </p>
                      <a
                        href="mailto:kechkar_zineb.fs@univ-boumerdes.dz"
                        className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors break-all"
                      >
                        kechkar_zineb.fs@univ-boumerdes.dz
                      </a>
                    </div>
                  </div>

                  {/* Location Item */}
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100/80 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-0.5">
                        LOCATION
                      </p>
                      <p className="text-sm sm:text-[15px] font-semibold text-slate-800">
                        Bouira, Algeria
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="h-px bg-slate-100 w-full mb-6" />

                {/* Find Me On / Social Links */}
                <div className="mb-8">
                  <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-3">
                    FIND ME ON
                  </p>
                  <div className="flex items-center gap-3">
                    {/* GitHub */}
                    <a
                      href="https://github.com/kechkar"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-100/80 flex items-center justify-center transition-all duration-200 shadow-xs"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/zineb-kechkar-407805296/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-100/80 flex items-center justify-center transition-all duration-200 shadow-xs"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>

                    {/* Portfolio / Website */}
                    <a
                      href="https://portfolio-cyan-one-27.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Portfolio Website"
                      className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-100/80 flex items-center justify-center transition-all duration-200 shadow-xs"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Available for Work Card */}
              <div className="flex items-center gap-3.5 bg-blue-50/60 border border-blue-100/80 rounded-2xl p-4">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div>
                  <p className="text-xs font-bold text-slate-900">Available for work</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Open to freelance projects, internships and full-time opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Right Column: Interactive Form ── */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Your Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold tracking-wider text-slate-500 uppercase mb-2"
                    >
                      YOUR NAME
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all shadow-xs"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold tracking-wider text-slate-500 uppercase mb-2"
                    >
                      EMAIL ADDRESS
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all shadow-xs"
                    />
                  </div>
                </div>

                {/* Row 2: Project Inquiry */}
                <div>
                  <label
                    htmlFor="contact-inquiry"
                    className="block text-xs font-bold tracking-wider text-slate-500 uppercase mb-2"
                  >
                    PROJECT INQUIRY
                  </label>
                  <div className="relative">
                    <select
                      id="contact-inquiry"
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                      className="w-full appearance-none px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all pr-10 cursor-pointer shadow-xs"
                    >
                      <option value="" disabled className="text-slate-400">
                        Select a project type
                      </option>
                      <option value="web">Web Development</option>
                      <option value="app">App Development</option>
                      <option value="uiux">UI/UX Design</option>
                      <option value="branding">Branding & Graphic Design</option>
                      <option value="fullstack">Full Stack Application</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Row 3: Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold tracking-wider text-slate-500 uppercase mb-2"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all resize-y min-h-[130px] shadow-xs"
                  />
                </div>

                {/* Submit Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                )}

                {/* Row 4: Send Message Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-md shadow-blue-500/25 hover:shadow-blue-500/35 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <span>Send Message</span>
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
