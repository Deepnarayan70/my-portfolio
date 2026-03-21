import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(height > 0 ? (winScroll / height) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Profiles', to: 'profiles' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Education', to: 'education' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2.5' : 'py-4'}`}
      style={isScrolled ? { background: 'var(--bg-card)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--card-border)' } : {}}
    >
      <div className="absolute bottom-0 left-0 h-[2px] transition-all duration-300" style={{ width: `${scrollProgress}%`, background: 'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)', boxShadow: '0 0 10px rgba(6,182,212,0.5)' }} />

      <div className="section-container flex items-center justify-between">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <span className="text-xl font-heading font-black tracking-tighter" style={{ color: 'var(--text-primary)' }}>
            DEEP<span style={{ color: '#06b6d4' }}>.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} spy={true} smooth={true} offset={-80} duration={500} activeClass="!text-cyan-500" className="cursor-pointer text-[13px] font-semibold tracking-tight transition-colors" style={{ color: 'var(--text-secondary)' }}>
              {link.name}
            </Link>
          ))}

          {/* Theme toggle */}
          <button onClick={toggleTheme} className="p-2 rounded-xl transition-all duration-300 hover:scale-110" style={{ background: 'var(--bg-card)', border: '1px solid var(--card-border)', color: 'var(--text-secondary)' }} aria-label="Toggle theme">
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <Link to="contact" smooth={true} duration={500} offset={-80} className="btn-primary px-5 py-2 text-xs cursor-pointer">Contact</Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggleTheme} className="p-2 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--card-border)', color: 'var(--text-secondary)' }}>
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button style={{ color: 'var(--text-primary)' }} className="p-1" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full p-5 flex flex-col gap-3 transform transition-all duration-300 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`} style={{ background: 'var(--bg-card)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--card-border)' }}>
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileMenuOpen(false)} className="cursor-pointer text-sm font-semibold p-3 rounded-lg transition-colors" style={{ color: 'var(--text-secondary)' }}>
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
