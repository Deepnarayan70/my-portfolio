import React from 'react';
import { motion } from 'framer-motion';
import { Github, Activity, HeartPulse, Bot } from 'lucide-react';

const projects = [
  {
    title: 'Stock Market Trading Simulator',
    description: 'Machine Learning-based trading system providing price forecasting and portfolio tracking. Utilizes Linear Regression for 7-day predictive analytics with integrated buy/sell simulation.',
    icon: <Activity size={24} />,
    tech: ['Python', 'Flask', 'scikit-learn', 'yfinance'],
    github: 'https://github.com/Deepnarayan70/ai-stock-trading-simulator',
    color: 'text-blue-500 dark:text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    glowColor: 'hover:shadow-blue-500/10',
    topBorder: 'from-blue-500/50 to-blue-500/0',
  },
  {
    title: 'EduPrep Assistant',
    description: 'AI-driven examination assistant leveraging the Gemini API. Facilitates student preparation through automated question generation and intelligent study material summarization.',
    icon: <Bot size={24} />,
    tech: ['Python', 'Gemini API', 'Flask', 'JavaScript'],
    github: 'https://github.com/Deepnarayan70/AI-EXAM-Preparation-BOT',
    color: 'text-emerald-500 dark:text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    glowColor: 'hover:shadow-emerald-500/10',
    topBorder: 'from-emerald-500/50 to-emerald-500/0',
  },
  {
    title: 'Diabetes Prediction System',
    description: 'ML model designed to predict diabetes risk using healthcare datasets. Includes comparative analysis of Logistic Regression, Decision Tree, and advanced classification algorithms.',
    icon: <HeartPulse size={24} />,
    tech: ['Python', 'Pandas', 'scikit-learn', 'Matplotlib'],
    github: 'https://github.com/Deepnarayan70/diabetes-prediction_Project',
    color: 'text-primary dark:text-primary-light',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
    glowColor: 'hover:shadow-primary/10',
    topBorder: 'from-primary/50 to-primary/0',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center lg:text-left"
        >
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Technical Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-slate-900 dark:text-white transition-colors">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg mx-auto lg:mx-0 transition-colors">
            A selection of technical implementations focusing on Machine Learning, Artificial Intelligence, and data-driven problem solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`group glass-card-hover rounded-3xl p-8 flex flex-col relative overflow-hidden ${project.glowColor} border border-slate-200 dark:border-white/5 shadow-xl transition-all h-full`}
            >
              {/* Top gradient edge */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${project.topBorder}`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${project.bg} border ${project.border} flex items-center justify-center ${project.color} mb-8 group-hover:scale-110 transition-transform duration-300`}>
                {project.icon}
              </div>

              <h3 className="text-slate-900 dark:text-white font-bold text-2xl mb-4 font-heading transition-colors">{project.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow transition-colors">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 text-[11px] font-bold text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl backdrop-blur-md transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              <div className="pt-6 border-t border-slate-100 dark:border-white/10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-all group/link"
                >
                  <Github size={18} className="group-hover/link:rotate-12 transition-transform" /> 
                  <span>View Source Code</span>
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

