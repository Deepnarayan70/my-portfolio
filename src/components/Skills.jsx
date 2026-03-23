import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, BookOpen } from 'lucide-react';

const skillGroups = [
  { title: 'Programming', skills: ['Python', 'C++', 'Java', 'SQL'], accent: '#06b6d4', icon: <Code size={20} /> },
  { title: 'Data & ML', skills: ['Pandas', 'NumPy', 'scikit-learn', 'Power BI'], accent: '#8b5cf6', icon: <Database size={20} /> },
  { title: 'Web & Tools', skills: ['Flask', 'HTML/CSS', 'Git', 'GitHub'], accent: '#3b82f6', icon: <Globe size={20} /> },
  { title: 'Core CS', skills: ['DSA', 'OOP', 'DBMS', 'OS'], accent: '#f59e0b', icon: <BookOpen size={20} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-20">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5 }} className="mb-14 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-heading font-black mb-6">Skills</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.4, delay: i * 0.08 }} className="glass-card-hover p-6 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ background: `${group.accent}15`, color: group.accent, border: `1px solid ${group.accent}30` }}>{group.icon}</div>
                <h3 className="font-black text-lg tracking-tight" style={{ color: 'var(--text-primary)' }}>{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <span key={j} className="px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all duration-200 cursor-default"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--card-border)', color: 'var(--text-secondary)' }}
                    onMouseOver={e => { e.target.style.background = group.accent; e.target.style.color = 'white'; e.target.style.borderColor = group.accent; e.target.style.boxShadow = `0 0 15px ${group.accent}40`; }}
                    onMouseOut={e => { e.target.style.background = 'var(--bg-card)'; e.target.style.color = 'var(--text-secondary)'; e.target.style.borderColor = 'var(--card-border)'; e.target.style.boxShadow = 'none'; }}>
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
