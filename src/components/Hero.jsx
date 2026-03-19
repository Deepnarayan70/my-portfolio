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
      {/* Soft Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-primary/5 rounded-full blur-[160px] pointer-events-none opacity-40" />
      <div className="absolute top-[-5%] right-[-5%] w-[450px] h-[450px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-secondary/6 rounded-full blur-[110px] pointer-events-none" />

      <div className="section-container w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-14">

          {/* Left — Text content */}
          <div className="flex-1 w-full text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary-light text-lg mb-1 flex items-center justify-center lg:justify-start gap-2 font-medium"
            >
              <span className="text-2xl">👋</span> Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-heading font-bold mb-2 leading-tight tracking-tight"
            >
              Deep <span className="text-gradient">Narayan</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl text-gray-200 mb-4 font-semibold"
            >
              Data Science Enthusiast | Aspiring Software Engineer
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6"
            >
              <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Building practical ML-based applications and solving real-world problems with data-driven insights.
              </p>
              <p className="text-gray-500 text-base sm:text-lg mt-2 max-w-2xl mx-auto lg:mx-0 font-medium italic">
                Passionate about building real-world ML solutions and continuously improving through DSA and projects.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href="https://drive.google.com/file/d/1flV5iVZ0-KNwPSowkxw7kRZBXo8Q8c91/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-2xl bg-primary hover:bg-primary/80 hover:scale-105 active:scale-95 text-white font-bold flex items-center gap-3 transition-all text-base w-full sm:w-auto justify-center shadow-2xl shadow-primary/20"
              >
                <FileText size={18} /> Download Resume
              </a>
              <a
                href="mailto:deepnaryan03@gmail.com"
                className="px-8 py-3.5 rounded-2xl glass hover:bg-white/10 hover:scale-105 active:scale-95 text-white font-bold flex items-center gap-3 transition-all cursor-pointer text-base w-full sm:w-auto justify-center border border-white/10"
              >
                <Mail size={18} /> Contact Me
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3 glass-card p-2 px-4 rounded-2xl border border-white/5 shadow-2xl shadow-black/40 hover:border-primary/20 transition-all group hover:bg-white/5">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary-light group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-white font-extrabold text-base leading-none">{stat.value}</p>
                    <p className="text-gray-500 text-[10px] mt-1 uppercase tracking-widest font-bold">{stat.label}</p>
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
            className="flex-shrink-0 w-full max-w-sm lg:max-w-[320px]"
          >
            <div className="relative group p-2">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl animate-glow opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Card */}
              <div className="relative glass-card rounded-[35px] p-3 overflow-hidden border border-white/10 shadow-2xl">
                <div className="rounded-[25px] overflow-hidden aspect-square border border-white/5">
                  <img
                    src={profileImg}
                    alt="Deep Narayan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute top-10 -left-5 glass px-4 py-2 rounded-2xl flex items-center gap-2 animate-float shadow-2xl border border-white/10 backdrop-blur-xl">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
                  <span className="text-xs font-bold text-gray-100 italic">Available</span>
                </div>

                <div className="absolute bottom-20 -right-4 glass px-4 py-2 rounded-2xl flex items-center gap-2 animate-float-delay shadow-2xl border border-white/10 backdrop-blur-xl">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-light shadow-[0_0_10px_rgba(129,140,248,0.6)]" />
                  <span className="text-xs font-bold text-gray-100 italic">B.Tech CSE</span>
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
          className="hidden lg:flex justify-center mt-8"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer text-gray-500 hover:text-white transition-colors animate-bounce"
          >
            <ArrowDown size={24} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
