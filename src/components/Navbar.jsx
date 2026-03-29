import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Profiles', to: 'profiles' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-opacity-80 backdrop-blur-xl border-b shadow-sm' : 'py-5 bg-transparent'}`} 
      style={{ borderColor: isScrolled ? 'var(--card-border)' : 'transparent', background: isScrolled ? 'var(--bg-card)' : 'transparent' }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer group">
          <span className="text-2xl font-heading font-black tracking-tighter transition-transform group-hover:scale-105 inline-block" style={{ color: 'var(--text-primary)' }}>
            DEEP<span className="text-cyan-500">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} spy={true} smooth={true} offset={-80} duration={500} activeClass="text-cyan-500" 
              className="cursor-pointer text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-cyan-500 opacity-70 hover:opacity-100" style={{ color: 'var(--text-primary)' }}>
              {link.name}
            </Link>
          ))}
          <div className="w-[1px] h-4 bg-gray-500 opacity-20 mx-2" />
          <button onClick={toggleTheme} className="p-2 rounded-xl transition-all duration-300 hover:rotate-12 hover:scale-110" style={{ background: 'var(--bg-card)', border: '1px solid var(--card-border)', color: 'var(--text-secondary)' }} aria-label="Toggle theme">
            {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </nav>

        <button className="lg:hidden p-2" style={{ color: 'var(--text-primary)' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`lg:hidden absolute top-full left-0 w-full p-6 flex flex-col gap-4 transform transition-all duration-300 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`} 
        style={{ background: 'var(--bg-card)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--card-border)' }}>
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileMenuOpen(false)} 
            className="cursor-pointer text-xs font-bold uppercase tracking-widest p-2 rounded-lg transition-colors hover:bg-cyan-500/10" style={{ color: 'var(--text-secondary)' }}>
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
