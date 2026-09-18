import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f9f8fe] text-slate-900 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 text-center text-xs text-slate-500 border-t border-slate-200/60 bg-[#f9f8fe]">
        <p>© {new Date().getFullYear()} Zineb Kechkar. Built with React &amp; Tailwind CSS.</p>
      </footer>
    </div>
  );
}
