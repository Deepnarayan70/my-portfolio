import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, Github, Mail, Code2, FileText } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 px-6 md:px-12 object-contain relative">
      <div className="container mx-auto z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="flex-1 w-full text-center md:text-left mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-secondary font-medium tracking-wider uppercase text-sm md:text-base mb-4 inline-block px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
              Welcome to my portfolio
            </h2>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I'm <span className="text-gradient">Deep Narayan</span>
          </motion.h1>
          
          <motion.div 
            className="text-xl md:text-3xl font-medium text-gray-300 mb-6 h-12 md:h-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="opacity-80">I am a </span>
            <span className="text-white font-semibold">
              <Typewriter
                words={[
                  'Computer Science Student',
                  'Data Science Enthusiast',
                  'Machine Learning Explorer',
                  'Software Developer'
                ]}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </motion.div>
          
          <motion.p 
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Building intelligent solutions with data and code. Passionate about transforming complex problems into elegant, user-centric applications.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="projects" 
              smooth={true} 
              duration={500}
              offset={-80}
              className="px-8 py-3.5 rounded-full bg-primary hover:bg-blue-600 text-white font-medium flex items-center gap-2 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] cursor-pointer w-full sm:w-auto justify-center"
            >
              View Projects <ArrowRight size={18} />
            </Link>
            
            <a 
              href="https://drive.google.com/file/d/1SNnh969lktCnu17YhaxyL9Kd52e93bh6/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full glass hover:bg-white/10 text-white font-medium flex items-center gap-2 transition-all hover:scale-105 w-full sm:w-auto justify-center whitespace-nowrap"
            >
              <FileText size={18} /> Resume
            </a>
            
            <a 
              href="https://github.com/Deepnarayan70" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full glass hover:bg-white/10 text-white font-medium flex items-center gap-2 transition-all hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Github size={18} /> GitHub
            </a>
            
            <Link 
              to="contact" 
              smooth={true} 
              duration={500}
              offset={-80}
              className="px-8 py-3.5 rounded-full glass hover:bg-white/10 text-white font-medium flex items-center gap-2 transition-all hover:scale-105 cursor-pointer w-full sm:w-auto justify-center"
            >
              <Mail size={18} /> Contact
            </Link>
          </motion.div>
        </div>
        
        {/* Placeholder Graphic / Image Area */}
        <motion.div 
          className="flex-1 w-full max-w-md hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-full aspect-square">
            {/* Decorative background circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 blur-2xl animate-pulse" />
            
            {/* Glassmorphism shape to hold abstract content or user image */}
            <div className="absolute inset-4 rounded-[2rem] glass-card overflow-hidden flex items-center justify-center border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Code2 className="text-white/20 w-32 h-32 group-hover:scale-110 transition-transform duration-500 group-hover:text-primary/40" strokeWidth={1} />
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-10 -left-6 glass px-4 py-2 rounded-xl flex items-center gap-2"
            >
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-semibold">Web Dev</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-12 -right-6 glass px-4 py-2 rounded-xl flex items-center gap-2"
            >
              <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-xs font-semibold">Machine Learning</span>
            </motion.div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
