import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-gray-300 selection:bg-primary/30 selection:text-white">
      {/* Ambient blobs */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[5%] left-[10%] w-[400px] h-[400px] rounded-full bg-primary/8 blur-[130px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full bg-secondary/8 blur-[140px] opacity-40" />
      </div>

      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 relative overflow-hidden bg-white/[0.01]">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30 shadow-lg shadow-primary/5">
                  <span className="text-primary-light font-heading font-black text-xs uppercase tracking-tighter">DN</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm tracking-wide">Deep Narayan</span>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Designed & Developed by Deep Narayan</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 font-medium">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8">
              <a
                href="https://github.com/Deepnarayan70"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-light transition-all text-sm font-bold uppercase tracking-widest hover:scale-110 active:scale-90"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/linkdin-deep-narayan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-light transition-all text-sm font-bold uppercase tracking-widest hover:scale-110 active:scale-90"
              >
                LinkedIn
              </a>
              <a
                href="mailto:deepnaryan03@gmail.com"
                className="text-gray-500 hover:text-primary-light transition-all text-sm font-bold uppercase tracking-widest hover:scale-110 active:scale-90"
              >
                Email
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[11px] text-gray-700 font-bold tracking-[0.2em] uppercase">
              Built with React, Vite & Tailwind CSS
            </p>
            <div className="flex items-center gap-4 overflow-hidden rounded-full px-4 py-1.5 border border-white/5 bg-white/5 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Live Portfolio</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
