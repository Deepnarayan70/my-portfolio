import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Wrench, BookOpen } from 'lucide-react';

const skillGroups = [
  {
    title: 'Programming',
    skills: ['Python', 'C++', 'Java', 'SQL'],
    color: 'text-blue-500',
    icon: <Code size={20} />,
  },
  {
    title: 'Machine Learning',
    skills: ['Pandas', 'NumPy', 'scikit-learn', 'Data Mining'],
    color: 'text-primary',
    icon: <Database size={20} />,
  },
  {
    title: 'Tools',
    skills: ['HTML/CSS', 'Flask', 'Git/GitHub', 'Power BI'],
    color: 'text-emerald-500',
    icon: <Wrench size={20} />,
  },
  {
    title: 'Core CS',
    skills: ['DSA', 'OOP', 'DBMS'],
    color: 'text-rose-500',
    icon: <BookOpen size={20} />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center lg:text-left"
        >
          <p className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4">Expertise</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-slate-900 dark:text-white">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white dark:bg-slate-800/30 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 flex items-center justify-center ${group.color}`}>
                  {group.icon}
                </div>
                <h3 className="text-slate-900 dark:text-white font-bold text-lg">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-4 py-2 text-[11px] font-black uppercase tracking-widest rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-400"
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

