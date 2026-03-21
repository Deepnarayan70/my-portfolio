import React from 'react';
import { motion } from 'framer-motion';
import { Github, Activity, HeartPulse, Bot } from 'lucide-react';

const projects = [
  {
    title: 'Stock Market Trading Simulator',
    description: 'Developed a predictive trading system using Linear Regression for 7-day price forecasting and portfolio management simulations.',
    icon: <Activity size={24} />,
    tech: ['Python', 'Flask', 'scikit-learn', 'yfinance'],
    github: 'https://github.com/Deepnarayan70/ai-stock-trading-simulator',
    color: 'text-blue-500',
    bg: 'bg-blue-500/5',
    border: 'border-blue-500/10',
  },
  {
    title: 'EduPrep Assistant',
    description: 'Built an intelligent examination assistant using the Gemini API for automated question generation and study material summarization.',
    icon: <Bot size={24} />,
    tech: ['Python', 'Gemini API', 'Flask', 'JavaScript'],
    github: 'https://github.com/Deepnarayan70/AI-EXAM-Preparation-BOT',
    color: 'text-teal-500',
    bg: 'bg-teal-500/5',
    border: 'border-teal-500/10',
  },
  {
    title: 'Diabetes Prediction System',
    description: 'Designed a diagnostic tool using classification algorithms to predict diabetes risk based on medical feature datasets.',
    icon: <HeartPulse size={24} />,
    tech: ['Python', 'Pandas', 'scikit-learn', 'Matplotlib'],
    github: 'https://github.com/Deepnarayan70/diabetes-prediction_Project',
    color: 'text-primary',
    bg: 'bg-primary/5',
    border: 'border-primary/10',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-white/30 dark:bg-slate-900/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center lg:text-left"
        >
          <p className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-slate-900 dark:text-white">
            Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-white dark:bg-slate-800/40 rounded-3xl p-8 flex flex-col border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/30 transition-all h-full"
            >
              <div className={`w-14 h-14 rounded-2xl ${project.bg} border ${project.border} flex items-center justify-center ${project.color} mb-8 group-hover:scale-110 transition-transform duration-300`}>
                {project.icon}
              </div>

              <h3 className="text-slate-900 dark:text-white font-bold text-2xl mb-4 leading-tight">{project.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-medium">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-700/50">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-gray-500 hover:text-primary dark:hover:text-white transition-all"
                >
                  <Github size={16} /> 
                  <span>Source Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

