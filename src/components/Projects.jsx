import React from 'react';
import { motion } from 'framer-motion';
import { Github, Activity, HeartPulse, Bot } from 'lucide-react';

const projects = [
  { title: 'Stock Market Trading Simulator', description: 'Developed a stock trading system with price prediction using Linear Regression and portfolio tracking.', icon: <Activity size={22} />, tech: ['Python', 'Flask', 'scikit-learn'], github: 'https://github.com/Deepnarayan70/ai-stock-trading-simulator', accent: '#06b6d4' },
  { title: 'EduPrep Assistant', description: 'Built an AI-powered assistant using Gemini API for automated question generation and study summarization.', icon: <Bot size={22} />, tech: ['Python', 'Gemini API', 'Flask'], github: 'https://github.com/Deepnarayan70/AI-EXAM-Preparation-BOT', accent: '#3b82f6' },
  { title: 'Diabetes Prediction System', description: 'Created a classification-based model to predict diabetes risk using healthcare data.', icon: <HeartPulse size={22} />, tech: ['Python', 'Pandas', 'scikit-learn'], github: 'https://github.com/Deepnarayan70/diabetes-prediction_Project', accent: '#8b5cf6' },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5 }} className="mb-14 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-heading font-black mb-6">Projects</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass-card-hover group flex flex-col">
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: `${project.accent}15`, color: project.accent, border: `1px solid ${project.accent}30` }}>{project.icon}</div>
                  <h3 className="text-lg font-black leading-tight tracking-tight" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                </div>
                <p className="text-sm mb-6 leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, j) => (
                    <span key={j} className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-lg" style={{ background: 'var(--bg-card)', border: '1px solid var(--card-border)', color: 'var(--text-secondary)' }}>{t}</span>
                  ))}
                </div>
                <div className="mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full btn-primary justify-center py-3"><Github size={16} /> View Code</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
