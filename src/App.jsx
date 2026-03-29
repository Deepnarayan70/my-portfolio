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

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false; // Light by default
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen font-sans relative">
      {/* Futuristic background */}
      <div className="bg-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main className="relative z-10 max-w-6xl mx-auto overflow-hidden">
        <div id="home"><Hero /></div>
        <div id="about" className="py-16"><About /></div>
        <div id="skills" className="py-16"><Skills /></div>
        <div id="projects" className="py-16"><Projects /></div>
        <div id="profiles" className="py-16"><CodingProfiles /></div>
        <div id="certifications" className="py-16"><Certifications /></div>
        <div id="education" className="py-16"><Education /></div>
        <div id="contact" className="py-16"><Contact /></div>
      </main>

      <footer className="relative z-10 border-t py-10 transition-colors duration-500" style={{ borderColor: 'var(--card-border)', background: 'var(--bg-card)', backdropFilter: 'blur(16px)' }}>
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)' }}>
                  <span className="font-heading font-black text-xs" style={{ color: '#06b6d4' }}>DN</span>
                </div>
               <span className="font-bold text-sm tracking-tight" style={{ color: 'var(--text-primary)' }}>Deep Narayan | Computer Science Student</span>
              </div>
              <p className="text-xs font-semibold opacity-50" style={{ color: 'var(--text-secondary)' }}>© 2026 All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 text-[11px] font-bold uppercase tracking-[0.15em]">
              {[
                { label: 'GitHub', href: 'https://github.com/Deepnarayan70' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/linkdin-deep-narayan/' },
                { label: 'Email', href: 'mailto:deepnaryan03@gmail.com' },
              ].map(link => (
                <a key={link.label} href={link.href} target={link.href.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer" className="transition-colors hover:text-cyan-500" style={{ color: 'var(--text-secondary)' }}>{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
