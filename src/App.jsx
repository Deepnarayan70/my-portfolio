import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen selection:bg-primary/30 selection:text-white relative transition-colors duration-300 ${isDarkMode ? 'dark bg-background-dark text-slate-300' : 'bg-background-light text-slate-900'}`}>
      {/* Particle overlay */}
      <ParticleBackground />

      {/* Animated ambient blobs */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[160px] opacity-20 animate-blob" />
        <div className="absolute bottom-[15%] right-[5%] w-[550px] h-[550px] rounded-full bg-secondary/5 blur-[180px] opacity-15 animate-blob-delay" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[200px] opacity-10 animate-blob-slow" />
      </div>

      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

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
      <footer className="border-t border-slate-200 dark:border-white/5 py-12 relative overflow-hidden bg-slate-50 dark:bg-white/[0.01]">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30 shadow-lg shadow-primary/5">
                  <span className="text-primary font-heading font-black text-xs uppercase tracking-tighter">DN</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-900 dark:text-white font-bold text-sm tracking-wide transition-colors">Deep Narayan</span>
                  <span className="text-[10px] text-slate-500 dark:text-gray-500 font-bold uppercase tracking-widest transition-colors">Designed & Developed by Deep Narayan</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 dark:text-gray-600 font-medium transition-colors">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8">
              <a
                href="https://github.com/Deepnarayan70"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-gray-500 hover:text-primary transition-all text-sm font-bold uppercase tracking-widest hover:scale-110 active:scale-90"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/linkdin-deep-narayan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-gray-500 hover:text-primary transition-all text-sm font-bold uppercase tracking-widest hover:scale-110 active:scale-90"
              >
                LinkedIn
              </a>
              <a
                href="mailto:deepnaryan03@gmail.com"
                className="text-slate-500 dark:text-gray-500 hover:text-primary transition-all text-sm font-bold uppercase tracking-widest hover:scale-110 active:scale-90"
              >
                Email
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[11px] text-slate-400 dark:text-gray-700 font-bold tracking-[0.2em] uppercase transition-colors">
              Built with React, Vite & Tailwind CSS
            </p>
            <div className="flex items-center gap-4 overflow-hidden rounded-full px-4 py-1.5 border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-white/5 backdrop-blur-md transition-colors">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              <span className="text-[10px] text-slate-500 dark:text-gray-400 font-bold uppercase tracking-widest transition-colors">Live Portfolio</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
