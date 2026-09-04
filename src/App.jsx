import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f9f8fe] text-slate-900 selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
    </div>
  );
}
