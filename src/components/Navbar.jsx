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
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Profiles', to: 'profiles' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-white/70 dark:bg-background-dark/60 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 shadow-lg shadow-black/5 dark:shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll progress */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center border border-primary/20 dark:border-primary/30 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10 dark:group-hover:shadow-primary/20 transition-all">
            <span className="text-primary font-heading font-bold text-sm">DN</span>
          </div>
          <span className="text-lg font-heading font-semibold text-slate-900 dark:text-white transition-colors duration-300 hidden sm:inline">
            Deep<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="!text-primary font-semibold"
              className="text-slate-500 dark:text-gray-400 hover:text-primary dark:hover:text-gray-200 cursor-pointer text-[13px] tracking-wide transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-all hover:scale-110 active:scale-95"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 transition-all"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-background-dark/80 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 p-5 flex flex-col gap-3 transform transition-all duration-300 ${
          mobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setMobileMenuOpen(false)}
            activeClass="text-primary font-semibold"
            className="text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-white cursor-pointer text-base p-2 transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;

