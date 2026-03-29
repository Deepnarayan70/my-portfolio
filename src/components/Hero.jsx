import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';
import { Link } from 'react-scroll';
import profileImg from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="flex-1 w-full text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] mb-8"
              style={{ background: 'rgba(6,182,212,0.1)', color: '#06b6d4', border: '1px solid rgba(6,182,212,0.2)' }}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#06b6d4' }} />
              <span>Available for Collaborations</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-heading font-black mb-6 leading-none tracking-tighter">
              <span className="text-gradient">Deep Narayan</span>
            </motion.h1>

            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl lg:text-3xl mb-8 font-bold tracking-tight text-gray-400">
              B.Tech CSE Student & Backend Enthusiast
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 text-gray-500 font-medium">
              Building data-driven applications and scalable backend systems to solve real-world problems.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Link to="contact" smooth={true} duration={500} className="btn-primary w-full sm:w-auto px-10 py-4 justify-center cursor-pointer text-sm font-black uppercase tracking-widest">
                <Mail size={18} className="mr-2" /> Contact Me
              </Link>
              <a href="https://drive.google.com/file/d/1HwbiZPcfAu8MVbs8SRV3JJUGtwxG8qf1/view?usp=sharing" target="_blank" rel="noopener noreferrer" 
                className="btn-secondary w-full sm:w-auto px-10 py-4 justify-center cursor-pointer text-sm font-black uppercase tracking-widest">
                <FileText size={18} className="mr-2" /> Resume
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Profile Image */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 w-full max-w-xs sm:max-w-sm lg:max-w-md relative">
            <div className="absolute inset-0 blur-[100px] rounded-full scale-110 pointer-events-none" style={{ background: 'rgba(6,182,212,0.15)' }} />
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-square border-2"
                style={{ boxShadow: '0 24px 60px var(--card-shadow)', borderColor: 'var(--card-border)', background: 'var(--bg-card)' }}>
                <img src={profileImg} alt="Deep Narayan" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
