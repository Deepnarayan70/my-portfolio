import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-24 sm:py-32">
      <div className="section-container max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: '-80px' }} 
          transition={{ duration: 0.5 }} 
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-black mb-4">About Me</h2>
          <p className="text-xl sm:text-2xl font-bold tracking-tight text-cyan-500 mb-8 uppercase">
            Data Science & Backend Development Enthusiast
          </p>
          
          <div className="max-w-3xl leading-relaxed text-lg mx-auto space-y-6 text-gray-400 font-medium">
            <p>
              I am Deep Narayan, a B.Tech Computer Science student at Lovely Professional University. I focus on building practical applications and solving real-world problems using data-driven approaches.
            </p>
            <p>
              I work with Python, backend development using Flask, and apply data analysis and basic machine learning techniques to create meaningful solutions.
            </p>
            <p>
              Along with development, I regularly practice Data Structures and Algorithms to strengthen problem-solving skills and logical thinking.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8 mt-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.4 }}
            className="glass-card p-10 flex flex-col items-center text-center group border-cyan-500/20"
          >
            <div className="text-5xl font-black mb-4 group-hover:scale-110 transition-transform text-cyan-500">
              300+
            </div>
            <p className="font-bold uppercase tracking-widest text-xs text-gray-500">Problems Solved</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass-card p-10 flex flex-col items-center text-center group border-blue-500/20"
          >
            <h3 className="font-black text-xl mb-6 tracking-tight">Focused Areas</h3>
            <div className="text-sm font-bold tracking-wide text-gray-400">
              Data Science <span className="text-cyan-500 mx-2">•</span> 
              Backend Development <span className="text-cyan-500 mx-2">•</span> 
              Problem Solving
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
