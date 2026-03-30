import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap } from 'lucide-react';

const educationData = [
  { 
    degree: 'B.Tech Computer Science and Engineering', 
    institution: 'Lovely Professional University', 
    period: '2023 – 2027', 
    detail: 'CGPA: 8.1' 
  },
  { 
    degree: 'Class 12', 
    institution: 'Kendriya Vidyalaya, Paschim Vihar, Delhi', 
    period: '2023', 
    detail: '70.6%' 
  },
  { 
    degree: 'Class 10', 
    institution: 'Kendriya Vidyalaya, Paschim Vihar, Delhi', 
    period: '2021', 
    detail: '90.4%' 
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 mt-16 font-sans">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5 }} className="mb-12 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-heading font-black mb-4 tracking-tighter">Education</h2>
        </motion.div>
        
        <div className="grid gap-6">
          {educationData.map((edu, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.4, delay: i * 0.1 }} 
              className="glass-card p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-[var(--card-border)] hover:border-cyan-500/30 transition-all rounded-3xl"
              style={{ background: 'var(--bg-card)' }}>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'rgba(6,182,212,0.1)', color: '#06b6d4', border: '1px solid rgba(6,182,212,0.2)' }}>
                  <GraduationCap size={28} />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mb-1 text-cyan-500">
                    <Calendar size={12} /> {edu.period}
                  </div>
                  <h3 className="font-black text-2xl mb-1 tracking-tight" style={{ color: 'var(--text-primary)' }}>{edu.degree}</h3>
                  <p className="font-bold text-base text-gray-500">{edu.institution}</p>
                </div>
              </div>
              <div className="sm:text-right">
                <div className="inline-block px-5 py-2.5 rounded-2xl text-sm font-black tracking-tighter bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                  {edu.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
