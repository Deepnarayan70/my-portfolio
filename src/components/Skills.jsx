import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, BookOpen } from 'lucide-react';

const skillGroups = [
  { title: 'Programming', skills: ['Python', 'C++', 'Java', 'SQL'], accent: '#06b6d4', icon: <Code size={20} /> },
  { title: 'Data Science', skills: ['Pandas', 'NumPy', 'scikit-learn'], accent: '#8b5cf6', icon: <Database size={20} /> },
  { title: 'Web & Tools', skills: ['Flask', 'HTML/CSS', 'Git', 'GitHub'], accent: '#3b82f6', icon: <Globe size={20} /> },
  { title: 'Core CS', skills: ['DSA', 'OOP', 'DBMS', 'OS'], accent: '#f59e0b', icon: <BookOpen size={20} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5 }} className="mb-12 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-heading font-black mb-4">Technical Skills</h2>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.4, delay: i * 0.1 }} 
              className="glass-card p-8 group hover:border-cyan-500/30 transition-all border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ background: `${group.accent}15`, color: group.accent, border: `1px solid ${group.accent}30` }}>{group.icon}</div>
                <h3 className="font-black text-lg tracking-tight" style={{ color: 'var(--text-primary)' }}>{group.title}</h3>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                {group.skills.map((skill, j) => (
                  <React.Fragment key={j}>
                    <span className="text-[12px] font-bold uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
                      {skill}
                    </span>
                    {j < group.skills.length - 1 && <span className="text-cyan-500 opacity-50 font-black scale-110 mx-1"> • </span>}
                  </React.Fragment>
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
