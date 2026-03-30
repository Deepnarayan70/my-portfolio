import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, BookOpen } from 'lucide-react';

const skillGroups = [
  { title: 'Programming', skills: ['Python', 'C++', 'Java', 'SQL', 'JavaScript'], accent: '#06b6d4', icon: <Code size={20} /> },
  { title: 'Data Science', skills: ['Pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Power BI'], accent: '#8b5cf6', icon: <Database size={20} /> },
  { title: 'Web & Tools', skills: ['Flask', 'HTML', 'CSS', 'Git', 'GitHub', 'REST APIs'], accent: '#3b82f6', icon: <Globe size={20} /> },
  { title: 'Core CS', skills: ['DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks'], accent: '#f59e0b', icon: <BookOpen size={20} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 mt-16">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5 }} className="mb-12 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-heading font-black mb-4">Technical Skills</h2>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.4, delay: i * 0.1 }} 
              className="glass-card-hover p-6 lg:p-7 group transition-all duration-300 border flex flex-col items-center text-center shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:-translate-y-1 w-full">
              <div className="flex flex-col items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 mb-1"
                  style={{ background: `${group.accent}15`, color: group.accent, border: `1px solid ${group.accent}30` }}>{group.icon}</div>
                <h3 className="font-black text-lg tracking-tight" style={{ color: 'var(--text-primary)' }}>{group.title}</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-auto w-full">
                {group.skills.map((skill, j) => (
                  <span key={j} className="px-3 py-1.5 rounded-xl text-[13px] font-bold tracking-wide transition-transform hover:scale-105"
                    style={{ background: `${group.accent}10`, border: `1px solid ${group.accent}25`, color: 'var(--text-primary)' }}>
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
