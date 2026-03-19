import React from 'react';
import { motion } from 'framer-motion';
import { Github, Activity, HeartPulse, Bot } from 'lucide-react';

const projects = [
  {
    title: 'Stock Market Trading Simulator',
    description: 'ML-based trading system with prediction and portfolio tracking. Uses Linear Regression for 7-day price forecasting with buy/sell simulation.',
    icon: <Activity size={24} />,
    tech: ['Python', 'Flask', 'scikit-learn', 'yfinance'],
    github: 'https://github.com/Deepnarayan70/ai-stock-trading-simulator',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    glowHover: 'hover:shadow-blue-500/20',
  },
  {
    title: 'EduPrep Assistant',
    description: 'AI-based exam assistant using Gemini API. Helps students prepare with intelligent question generation and study material summarization.',
    icon: <Bot size={24} />,
    tech: ['Python', 'Gemini API', 'Flask', 'JavaScript'],
    github: 'https://github.com/Deepnarayan70/AI-EXAM-Preparation-BOT',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    glowHover: 'hover:shadow-emerald-500/20',
  },
  {
    title: 'Diabetes Prediction',
    description: 'ML model to predict diabetes using healthcare dataset. Comparative analysis of Logistic Regression, Decision Tree, and more algorithms.',
    icon: <HeartPulse size={24} />,
    tech: ['Python', 'Pandas', 'scikit-learn', 'Matplotlib'],
    github: 'https://github.com/Deepnarayan70/diabetes-prediction_Project',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    glowHover: 'hover:shadow-purple-500/20',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-primary-light text-sm font-medium tracking-wider uppercase mb-2">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Things I've <span className="text-gradient">built</span>
          </h2>
          <p className="text-gray-200 text-lg font-medium mb-3">
            Projects focused on Machine Learning, Data Science, and real-world problem solving.
          </p>
          <p className="text-gray-400 max-w-xl">
            A selection of my recent technical work involving predictive modeling and AI-driven solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`glass-card-hover rounded-2xl p-7 flex flex-col transition-all duration-300 hover:scale-[1.03] active:scale-95 ${project.glowHover} border border-white/5 shadow-xl`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${project.bg} border ${project.border} flex items-center justify-center ${project.color} mb-5 group-hover:scale-110 transition-transform`}>
                {project.icon}
              </div>

              <h3 className="text-white font-bold text-xl mb-3 font-heading">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 text-[11px] font-bold text-gray-300 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              <div className="pt-5 border-t border-white/8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white hover:underline transition-all group/link"
                >
                  <Github size={16} className="group-hover/link:rotate-12 transition-transform" /> View on GitHub
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
