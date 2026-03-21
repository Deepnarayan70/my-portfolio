import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Wrench, BookOpen } from 'lucide-react';

const skillGroups = [
  {
    title: 'Programming',
    skills: ['Python', 'C++', 'Java', 'SQL'],
    color: 'text-blue-500 dark:text-blue-400',
    tagBg: 'bg-blue-500/5 dark:bg-blue-500/10',
    tagBorder: 'border-blue-500/10 dark:border-blue-500/20',
    tagText: 'text-blue-600 dark:text-blue-300',
    borderAccent: 'border-t-blue-500/40',
    hoverGlow: 'hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10',
    icon: <Code size={20} />,
  },
  {
    title: 'Machine Learning',
    skills: ['Pandas', 'NumPy', 'scikit-learn', 'Data Mining'],
    color: 'text-primary dark:text-primary-light',
    tagBg: 'bg-primary/5 dark:bg-primary/10',
    tagBorder: 'border-primary/10 dark:border-primary/20',
    tagText: 'text-primary dark:text-primary-light',
    borderAccent: 'border-t-primary/40',
    hoverGlow: 'hover:shadow-primary/5 dark:hover:shadow-primary/10',
    icon: <Database size={20} />,
  },
  {
    title: 'Web Dev & Tools',
    skills: ['HTML/CSS', 'Flask', 'Git/GitHub', 'Power BI'],
    color: 'text-emerald-500 dark:text-emerald-400',
    tagBg: 'bg-emerald-500/5 dark:bg-emerald-500/10',
    tagBorder: 'border-emerald-500/10 dark:border-emerald-500/20',
    tagText: 'text-emerald-600 dark:text-emerald-300',
    borderAccent: 'border-t-emerald-500/40',
    hoverGlow: 'hover:shadow-emerald-500/5 dark:hover:shadow-emerald-500/10',
    icon: <Globe size={20} />,
  },
  {
    title: 'Core CS',
    skills: ['DSA', 'OOP', 'DBMS'],
    color: 'text-rose-500 dark:text-rose-400',
    tagBg: 'bg-rose-500/5 dark:bg-rose-500/10',
    tagBorder: 'border-rose-500/10 dark:border-rose-500/20',
    tagText: 'text-rose-600 dark:text-rose-300',
    borderAccent: 'border-t-rose-500/40',
    hoverGlow: 'hover:shadow-rose-500/5 dark:hover:shadow-rose-500/10',
    icon: <BookOpen size={20} />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center lg:text-left"
        >
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Technical Proficiency</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-slate-900 dark:text-white transition-colors">
            Skills & <span className="text-gradient">Core Competencies</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg mx-auto lg:mx-0 transition-colors">
            A comprehensive overview of technical skills and tools utilized to engineer high-performance solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`glass-card-hover rounded-2xl p-7 border-t-2 ${group.borderAccent} ${group.hoverGlow} border-slate-200 dark:border-white/10 shadow-xl transition-all`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-11 h-11 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center ${group.color} transition-colors`}>
                  {group.icon}
                </div>
                <h3 className="text-slate-900 dark:text-white font-bold text-lg transition-colors">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    className={`px-4 py-2 text-xs font-bold rounded-xl ${group.tagBg} border ${group.tagBorder} ${group.tagText} transition-all hover:-translate-y-1 shadow-sm`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

