import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const educationData = [
  { degree: 'B.Tech Computer Science Engineering', institution: 'Lovely Professional University', period: '2023 – 2027', detail: 'CGPA: 8.1' },
  { degree: 'Higher Secondary (Class 12)', institution: 'Kendriya Vidyalaya', period: '2023', detail: 'Percentage: 70.6%' },
  { degree: 'Secondary (Class 10)', institution: 'Kendriya Vidyalaya', period: '2021', detail: 'Percentage: 90.4%' },
];

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5 }} className="mb-14 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-heading font-black mb-6">Education</h2>
        </motion.div>
        <div className="relative max-w-3xl mx-auto lg:mx-0">
          <div className="absolute left-[11px] top-4 bottom-4 w-[2px]" style={{ background: 'var(--card-border)' }} />
          <div className="space-y-8">
            {educationData.map((edu, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.4, delay: i * 0.1 }} className="relative pl-12 sm:pl-14">
                <span className="absolute left-0 top-3 w-[24px] h-[24px] rounded-full border-[5px] z-10" style={{ background: 'var(--bg-primary)', borderColor: '#06b6d4', boxShadow: '0 0 12px rgba(6,182,212,0.3)' }} />
                <div className="glass-card-hover p-7 group">
                  <div className="flex items-center gap-2.5 text-[10px] font-bold mb-4 uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>
                    <Calendar size={12} style={{ color: '#06b6d4' }} />{edu.period}
                  </div>
                  <h3 className="font-black text-xl mb-2 group-hover:text-cyan-500 transition-colors tracking-tight" style={{ color: 'var(--text-primary)' }}>{edu.degree}</h3>
                  <p className="font-semibold text-xs uppercase tracking-wider mb-4" style={{ color: '#06b6d4' }}>{edu.institution}</p>
                  <div className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide" style={{ background: 'rgba(6,182,212,0.1)', color: '#06b6d4', border: '1px solid rgba(6,182,212,0.2)' }}>{edu.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
