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
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary font-bold text-lg mb-1 flex items-center justify-center lg:justify-start gap-2 tracking-wide"
            >
              Professional Portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-heading font-bold mb-3 leading-tight tracking-tight text-slate-900 dark:text-white"
            >
              Deep <span className="text-gradient-animated">Narayan</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-4xl text-slate-700 dark:text-slate-300 mb-5 font-semibold"
            >
              Data Science Enthusiast | ML-Focused Developer
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <p className="text-slate-500 dark:text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Focused on building practical Machine Learning applications and deriving data-driven insights to solve complex problems.
              </p>
              <p className="text-slate-400 dark:text-slate-500 text-base sm:text-lg mt-2 max-w-2xl mx-auto lg:mx-0 font-medium italic">
                Committed to engineering real-world ML solutions and continuous refinement through DSA and high-impact projects.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <a
                href="https://drive.google.com/file/d/1flV5iVZ0-KNwPSowkxw7kRZBXo8Q8c91/view"
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn px-8 py-3.5 rounded-2xl bg-gradient-to-r from-primary to-secondary hover:scale-105 active:scale-95 text-white font-bold flex items-center gap-3 transition-all text-base w-full sm:w-auto justify-center shadow-xl shadow-primary/20"
              >
                <FileText size={18} /> View Resume
              </a>
              <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="glow-btn px-8 py-3.5 rounded-2xl glass hover:bg-slate-100 dark:hover:bg-white/10 hover:scale-105 active:scale-95 text-slate-700 dark:text-white font-bold flex items-center gap-3 transition-all cursor-pointer text-base w-full sm:w-auto justify-center border border-slate-200 dark:border-white/10 shadow-lg"
                >
                <Mail size={18} /> Contact
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3 glass-card p-2.5 px-5 rounded-2xl border border-slate-200 dark:border-white/5 shadow-xl shadow-black/5 dark:shadow-black/40 hover:border-primary/20 transition-all group hover:bg-slate-50 dark:hover:bg-white/5">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white font-extrabold text-lg leading-none transition-colors">{stat.value}</p>
                    <p className="text-slate-400 dark:text-gray-500 text-[10px] mt-1 uppercase tracking-widest font-bold transition-colors">{stat.label}</p>
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
            className="flex-shrink-0 w-full max-w-sm lg:max-w-[400px]"
          >
            <div className="relative group p-2">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-[45px] bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 blur-2xl animate-glow opacity-50 group-hover:opacity-90 transition-opacity duration-700" />

              {/* Card */}
              <div className="relative glass-card rounded-[40px] p-4 overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
                <div className="rounded-[30px] overflow-hidden aspect-square border border-slate-100 dark:border-white/5">
                  <img
                    src={profileImg}
                    alt="Deep Narayan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute top-10 -left-4 glass px-4 py-2 rounded-2xl flex items-center gap-2 animate-float shadow-2xl border border-slate-200 dark:border-white/10 backdrop-blur-xl transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                  <span className="text-xs font-bold text-slate-700 dark:text-gray-100 italic transition-colors">Available</span>
                </div>

                <div className="absolute bottom-20 -right-4 glass px-4 py-2 rounded-2xl flex items-center gap-2 animate-float-delay shadow-2xl border border-slate-200 dark:border-white/10 backdrop-blur-xl transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(14,165,233,0.6)]" />
                  <span className="text-xs font-bold text-slate-700 dark:text-gray-100 italic transition-colors">B.Tech CSE</span>
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

