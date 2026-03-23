import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, Code, GraduationCap, Target } from 'lucide-react';
import { Link } from 'react-scroll';
import profileImg from '../assets/profile.png';

const Hero = () => {
  const stats = [
    { icon: <Target size={18} />, value: '300+', label: 'Problems Solved' },
    { icon: <Code size={18} />, value: '5+', label: 'Projects Built' },
    { icon: <GraduationCap size={18} />, value: 'B.Tech', label: 'CSE Student' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden">
      <div className="section-container w-full max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-[1.4] w-full text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] mb-6"
              style={{ background: 'rgba(6,182,212,0.12)', color: '#06b6d4', border: '1px solid rgba(6,182,212,0.25)' }}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#06b6d4', boxShadow: '0 0 8px rgba(6,182,212,0.6)' }} />
              <span>Open to Internships & Entry-Level Roles</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black mb-5 leading-[1.05] tracking-tighter">
              <span className="text-gradient">Deep Narayan</span>
            </motion.h1>

            <motion.h2 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl lg:text-3xl mb-6 font-semibold tracking-tight" style={{ color: 'var(--text-secondary)' }}>
              B.Tech CSE Student | Data Science & Software Development
            </motion.h2>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-10">
              <p className="text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Building data-driven applications and scalable backend systems to solve real-world problems.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Link to="contact" smooth={true} duration={500} className="btn-primary w-full sm:w-auto justify-center cursor-pointer">
                <Mail size={18} /> Contact
              </Link>
              <a href="https://drive.google.com/file/d/1HwbiZPcfAu8MVbs8SRV3JJUGtwxG8qf1/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto justify-center">
                <FileText size={18} /> Resume
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              {stats.map((stat, i) => (
                <div key={i} className="glass-card py-4 px-5 flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: 'rgba(6,182,212,0.1)', color: '#06b6d4' }}>
                    {stat.icon}
                  </div>
                  <div>
                    <p className="font-black text-base leading-none" style={{ color: 'var(--text-primary)' }}>{stat.value}</p>
                    <p className="text-[9px] mt-1 uppercase tracking-wider font-bold" style={{ color: 'var(--text-secondary)' }}>{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, type: "spring", damping: 20 }}
            className="flex-shrink-0 w-full max-w-xs sm:max-w-sm lg:max-w-[420px] relative">
            <div className="absolute inset-0 blur-[100px] rounded-full scale-110 pointer-events-none" style={{ background: 'rgba(6,182,212,0.12)' }} />
            <div className="relative animate-float">
              <div className="rounded-3xl overflow-hidden aspect-square relative z-10 group"
                style={{ boxShadow: '0 24px 60px var(--card-shadow), 0 0 40px rgba(6,182,212,0.08)', border: '1px solid var(--card-border)' }}>
                <img src={profileImg} alt="Deep Narayan" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute -bottom-3 -left-3 sm:-left-6 px-5 py-3 rounded-2xl flex items-center gap-2.5 z-20 glass-card">
                <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: '#06b6d4', boxShadow: '0 0 10px rgba(6,182,212,0.6)' }} />
                <span className="text-xs font-black uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>B.Tech CSE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
