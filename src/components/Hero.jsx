import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, FileText, Code, Cpu, Target } from 'lucide-react';
import { Link } from 'react-scroll';
import profileImg from '../assets/profile.png';

const Hero = () => {
  const stats = [
    { icon: <Target size={18} />, value: '300+', label: 'Problems Solved' },
    { icon: <Code size={18} />, value: '3+', label: 'Projects Built' },
    { icon: <Cpu size={18} />, value: 'ML', label: 'Focus Area' },
  ];

  return (
    <section id="home" className="min-h-[90vh] flex items-center pt-24 pb-8 relative overflow-hidden">
      {/* Radial spotlight behind hero */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-[-5%] right-[-5%] w-[450px] h-[450px] bg-primary/8 rounded-full blur-[120px] pointer-events-none animate-blob" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[110px] pointer-events-none animate-blob-delay" />

      <div className="section-container w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left — Text content */}
          <div className="flex-[1.2] w-full text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>Available for new opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-heading font-bold mb-4 leading-tight tracking-tight text-slate-900 dark:text-white"
            >
              Deep <span className="text-gradient">Narayan</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-4xl text-slate-800 dark:text-slate-200 mb-6 font-bold tracking-tight"
            >
              Data Science Enthusiast | Data-Driven Developer
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-10"
            >
              <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Building data-driven solutions and analytical systems to solve real-world problems.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <a
                href="https://drive.google.com/file/d/1flV5iVZ0-KNwPSowkxw7kRZBXo8Q8c91/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-primary hover:bg-primary-dark transition-all text-white font-bold flex items-center gap-3 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText size={20} /> View Resume
              </a>
              <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="px-8 py-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-primary transition-all text-slate-900 dark:text-white font-bold flex items-center gap-3 shadow-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                <Mail size={20} /> Contact
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-800/30 p-3 px-6 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center text-primary">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white font-bold text-xl leading-none">{stat.value}</p>
                    <p className="text-slate-400 dark:text-slate-500 text-[10px] mt-1 uppercase tracking-widest font-extrabold">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-shrink-0 w-full max-w-sm lg:max-w-[450px]"
          >
            <div className="relative group p-4">
              {/* Subtle background glow */}
              <div className="absolute inset-0 rounded-[45px] bg-primary/10 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Card */}
              <div className="relative bg-white dark:bg-slate-800/50 rounded-[40px] p-5 border border-slate-100 dark:border-slate-700 shadow-2xl overflow-hidden">
                <div className="rounded-[30px] overflow-hidden aspect-square border-4 border-slate-50 dark:border-slate-700/50">
                  <img
                    src={profileImg}
                    alt="Deep Narayan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>

                {/* Status Badges */}
                <div className="absolute top-10 -left-6 bg-green-500 text-white px-5 py-2.5 rounded-2xl flex items-center gap-2 shadow-xl border border-green-400/50 animate-float">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest">Available</span>
                </div>

                <div className="absolute bottom-16 -right-6 bg-white dark:bg-slate-800 px-5 py-2.5 rounded-2xl flex items-center gap-2 shadow-xl border border-slate-100 dark:border-slate-700 animate-float-delay">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="text-xs font-bold text-slate-800 dark:text-gray-100 italic">B.Tech CSE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden lg:flex justify-center mt-12"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer text-slate-400 dark:text-gray-500 hover:text-primary dark:hover:text-white transition-colors animate-bounce"
          >
            <ArrowDown size={24} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

