import React from 'react';
import { motion } from 'framer-motion';
import { Github, Activity, HeartPulse, Bot } from 'lucide-react';

const projects = [
  { title: 'Stock Market Trading Simulator', description: 'Built a stock trading simulator with price prediction and portfolio tracking.', icon: <Activity size={22} />, tech: ['Python', 'Pandas', 'Flask'], github: '#', accent: '#06b6d4' },
  { title: 'EduPrep Assistant', description: 'Developed an AI-based assistant to help students with exam preparation.', icon: <Bot size={22} />, tech: ['Python', 'HTML/CSS', 'JavaScript'], github: '#', accent: '#3b82f6' },
  { title: 'Diabetes Prediction System', description: 'Created a machine learning model to predict diabetes risk using healthcare data.', icon: <HeartPulse size={22} />, tech: ['Python', 'Scikit-learn', 'NumPy'], github: '#', accent: '#8b5cf6' },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-20">
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
                <div className="flex flex-wrap items-center gap-x-1 gap-y-1 mb-6">
                  {project.tech.map((t, j) => (
                    <React.Fragment key={j}>
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{t}</span>
                      {j < project.tech.length - 1 && <span className="text-cyan-500 font-black px-1"> • </span>}
                    </React.Fragment>
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
