import React from 'react';
import { motion } from 'framer-motion';
import { Github, Activity, HeartPulse, Bot } from 'lucide-react';

const projects = [
  { 
    title: 'Stock Market Trading Simulator', 
    description: 'Built a stock trading simulator that allows users to buy and sell stocks, track portfolio performance, and calculate profit/loss. Implemented 7-day price prediction using Linear Regression and used real-time stock data with yfinance.', 
    icon: <Activity size={22} />, 
    tech: ['Python', 'Flask', 'Pandas', 'yfinance', 'scikit-learn'], 
    github: 'https://github.com/Deepnarayan70/ai-stock-trading-simulator', 
    accent: '#06b6d4' 
  },
  { 
    title: 'EduPrep Assistant', 
    description: 'Developed an AI-based assistant using Gemini API to generate questions and summarize study material. Implemented backend logic to process API responses and support learning workflows.', 
    icon: <Bot size={22} />, 
    tech: ['Python', 'Flask', 'Gemini API', 'HTML', 'CSS', 'JavaScript'], 
    github: 'https://github.com/Deepnarayan70/AI-EXAM-Preparation-BOT', 
    accent: '#3b82f6' 
  },
  { 
    title: 'Diabetes Prediction System', 
    description: 'Built a machine learning model to predict diabetes risk using healthcare datasets. Performed data preprocessing and applied classification algorithms such as Logistic Regression and Decision Tree.', 
    icon: <HeartPulse size={22} />, 
    tech: ['Python', 'Pandas', 'NumPy', 'scikit-learn'], 
    github: 'https://github.com/Deepnarayan70/diabetes-prediction_Project', 
    accent: '#8b5cf6' 
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 mt-16 flex flex-col justify-center">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5 }} className="mb-14 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-heading font-black mb-6">Projects</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass-card-hover group flex flex-col min-h-[400px]">
              <div className="p-10 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: `${project.accent}15`, color: project.accent, border: `1px solid ${project.accent}30` }}>{project.icon}</div>
                  <h3 className="text-xl font-black leading-tight tracking-tight" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                </div>
                <p className="text-[15px] mb-8 leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
                <div className="flex flex-wrap items-center gap-x-1 gap-y-2 mb-8 mt-auto">
                  {project.tech.map((t, j) => (
                    <React.Fragment key={j}>
                      <span className="text-[11px] font-bold uppercase tracking-widest leading-loose" style={{ color: 'var(--text-primary)' }}>{t}</span>
                      {j < project.tech.length - 1 && <span className="text-cyan-500 font-bold mx-2"> • </span>}
                    </React.Fragment>
                  ))}
                </div>
                <div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full btn-primary justify-center py-3.5 mt-2"><Github size={18} className="mr-2" /> View Code</a>
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
