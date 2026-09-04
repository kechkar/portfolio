import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Settings, Pencil, Palette, Cpu } from 'lucide-react';

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Web Development',
      description:
        'Building modern, responsive, and scalable websites and web applications tailored to different needs, from simple sites to complex platforms.',
      icon: Code2,
      iconBg: 'bg-blue-100/70 text-blue-600',
      dotColor: 'bg-blue-600',
      features: [
        { title: 'Responsive & modern design', subtext: 'Clean and performant' },
        { title: 'Full-stack development', subtext: 'Frontend, backend & database' },
        { title: 'Maintenance & optimization', subtext: 'Fast, secure and reliable' },
      ],
    },
    {
      number: '02',
      title: 'App Development',
      description:
        'Creating functional and user-friendly mobile applications designed for real-world needs, with a focus on performance, usability, and scalability.',
      icon: Smartphone,
      iconBg: 'bg-pink-100/70 text-pink-500',
      dotColor: 'bg-pink-500',
      features: [
        { title: 'Android application development', subtext: 'Native & modern apps' },
        { title: 'API integration', subtext: 'Seamless communication' },
        { title: 'Maintenance & optimization', subtext: 'Stable and performant' },
      ],
    },
    {
      number: '03',
      title: 'Internal Tools',
      description:
        'Developing custom digital tools that help organizations simplify workflows, organize data, and improve productivity.',
      icon: Settings,
      iconBg: 'bg-purple-100/70 text-purple-600',
      dotColor: 'bg-purple-600',
      features: [
        { title: 'Management systems', subtext: 'Tailored to your needs' },
        { title: 'Workflow automation', subtext: 'Save time and reduce manual work' },
        { title: 'Data & reporting', subtext: 'Clear insights for better decisions' },
      ],
    },
    {
      number: '04',
      title: 'UI/UX Design',
      description:
        'Designing intuitive interfaces and seamless digital experiences focused on usability, clarity, and user satisfaction.',
      icon: Pencil,
      iconBg: 'bg-amber-100/70 text-amber-500',
      dotColor: 'bg-amber-500',
      features: [
        { title: 'User-centered design', subtext: 'Clean and modern interfaces' },
        { title: 'Wireframes & prototypes', subtext: 'From idea to interactive design' },
        { title: 'Responsive design', subtext: 'Consistent across all devices' },
      ],
    },
    {
      number: '05',
      title: 'Graphic Design',
      description:
        'Creating visual identities and graphic content that communicate ideas and make brands stand out.',
      icon: Palette,
      iconBg: 'bg-pink-100/70 text-pink-500',
      dotColor: 'bg-pink-500',
      features: [
        { title: 'Logo & brand identity', subtext: 'Unique and memorable' },
        { title: 'Social media graphics', subtext: 'Engaging and consistent' },
        { title: 'Marketing & promotional designs', subtext: 'Visual content that converts' },
      ],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#f9f8fe] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          {/* Badge — same style as About */}
          <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100/80">
            MY SERVICES
          </span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-12 sm:mb-16 text-center">
          What I Can Do
        </h2>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Render first 5 Service Cards */}
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-md shadow-slate-200/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Number */}
                  <span className="block text-center font-bold text-slate-700 text-sm sm:text-base mb-4">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 ${service.iconBg}`}>
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 text-center mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-xs sm:text-sm text-center leading-relaxed font-medium mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Feature Pills */}
                <div className="space-y-2.5">
                  {service.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="bg-[#f8fafc] rounded-xl p-3 sm:p-3.5 flex items-start gap-3 border border-slate-100"
                    >
                      <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${service.dotColor}`} />
                      <div>
                        <div className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">
                          {feat.title}
                        </div>
                        <div className="text-blue-600 text-[11px] sm:text-xs font-medium mt-0.5">
                          {feat.subtext}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Tech Stack Card (No Number as requested) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-md shadow-slate-200/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Top spacer matching other cards without showing a number */}
              <div className="h-5 sm:h-6 mb-4" />

              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-100/70 text-emerald-500 flex items-center justify-center mx-auto mb-5">
                <Cpu className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2]" />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 text-center mb-3">
                Tech Stack
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-xs sm:text-sm text-center leading-relaxed font-medium mb-6">
                Technologies and tools I use to build, design, and create.
              </p>
            </div>

            {/* Tech Stack Categories Grid with Original Devicon Logos */}
            <div className="space-y-4 pt-1">
              
              {/* FRONTEND */}
              <div>
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                  FRONTEND
                </div>
                <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                  
                  {/* HTML5 */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-1.5 hover:scale-110 transition-transform" title="HTML5">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-5 h-5 object-contain" />
                  </div>

                  {/* CSS3 */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-1.5 hover:scale-110 transition-transform" title="CSS3">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-5 h-5 object-contain" />
                  </div>

                  {/* JavaScript */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-1 hover:scale-110 transition-transform" title="JavaScript">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-5 h-5 object-contain rounded-sm" />
                  </div>

                  {/* React */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-1.5 hover:scale-110 transition-transform" title="React">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-5 h-5 object-contain" />
                  </div>

                  {/* Vue.js */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-1.5 hover:scale-110 transition-transform" title="Vue.js">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="w-5 h-5 object-contain" />
                  </div>

                </div>
              </div>

              {/* BACKEND */}
              <div>
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                  BACKEND
                </div>
                <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                  
                  {/* Node.js */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-1.5 hover:scale-110 transition-transform" title="Node.js">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-5 h-5 object-contain" />
                  </div>

                  {/* Express.js */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-1 hover:scale-110 transition-transform" title="Express.js">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-5 h-5 object-contain" />
                  </div>

                  {/* MongoDB */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-1.5 hover:scale-110 transition-transform" title="MongoDB">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-5 h-5 object-contain" />
                  </div>

                  {/* Python */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-1.5 hover:scale-110 transition-transform" title="Python">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-5 h-5 object-contain" />
                  </div>

                  {/* Git */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-1.5 hover:scale-110 transition-transform" title="Git">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-5 h-5 object-contain" />
                  </div>

                </div>
              </div>

              {/* TOOLS */}
              <div>
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                  TOOLS
                </div>
                <div className="flex items-center justify-between gap-1 sm:gap-1.5">
                  
                  {/* GitHub */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-1.5 hover:scale-110 transition-transform" title="GitHub">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-5 h-5 object-contain" />
                  </div>

                  {/* Postman */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-1.5 hover:scale-110 transition-transform" title="Postman">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="Postman" className="w-5 h-5 object-contain" />
                  </div>

                  {/* Visual Studio Code */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-1.5 hover:scale-110 transition-transform" title="Visual Studio Code">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="w-5 h-5 object-contain" />
                  </div>

                  {/* Figma */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-1.5 hover:scale-110 transition-transform" title="Figma">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-5 h-5 object-contain" />
                  </div>

                  {/* Adobe Illustrator (Official Dark Orange Square Ai Badge) */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-1 hover:scale-110 transition-transform" title="Adobe Illustrator">
                    <svg viewBox="0 0 128 128" className="w-5 h-5">
                      <rect width="128" height="128" rx="26" fill="#330000"/>
                      <rect x="4" y="4" width="120" height="120" rx="22" fill="none" stroke="#FF7C00" strokeWidth="6"/>
                      <path fill="#FF7C00" d="M43.7 34c-.1 1-.2 1.9-.3 2.85-.1.4-.2.8-.4 1.2L25.8 87.5c0 .1 0 .2-.1.2.1.8.3 1.6.4 2.5a2.6 2.6 0 0 0 2.1 1h10.1c1.3 0 2.5-.9 2.8-2.2l3.6-11.1h17l3.9 11.3c.5 1.3 1.5 2 2.7 2h11.2a2.6 2.6 0 0 0 2.1-1c.2-.7.3-1.6.4-2.4L61.2 33.2a2.6 2.6 0 0 0-2.6-1.9H44.8c-.8 0-1.6.3-2 2.7zm9.5 16.6c.2.7.4 1.4.7 2.2.2.8.5 1.6.8 2.4l.8 2.4c.5 1.8 1 3.3 1.5 4.7h-8c.5-1.6 1-3.2 1.5-4.9.4-1.6 1-3.3 1.5-4.9l.9-2.9h.3zm32.2 41.2H96a2.6 2.6 0 0 0 2.6-2.7V47.9A2.6 2.6 0 0 0 96 45.2H85.4a2.6 2.6 0 0 0-2.7 2.7V89a2.7 2.7 0 0 0 2.8 2.8zM90.5 42.7a6.6 6.6 0 0 0 4.7-1.9 6.8 6.8 0 0 0 1.8-4.9 6.2 6.2 0 0 0-1.8-4.7 6.8 6.8 0 0 0-4.7-1.9 6.4 6.4 0 0 0-4.9 1.9 6.8 6.8 0 0 0-1.8 4.7 6.8 6.8 0 0 0 1.8 4.9 6.3 6.3 0 0 0 4.9 1.9z"/>
                    </svg>
                  </div>

                  {/* Canva (Official Teal Circle Logo) */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-1 hover:scale-110 transition-transform" title="Canva">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" alt="Canva" className="w-5 h-5 object-contain" />
                  </div>

                  {/* Blender */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-1.5 hover:scale-110 transition-transform" title="Blender">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" alt="Blender" className="w-5 h-5 object-contain" />
                  </div>

                </div>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
