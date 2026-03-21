import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech Computer Science Engineering',
    institution: 'Lovely Professional University',
    period: '2023 – Present',
    detail: 'CGPA: 8.1 / 10.0',
    color: 'border-primary',
  },
  {
    degree: 'Higher Secondary Education (Class 12)',
    institution: 'Kendriya Vidyalaya',
    period: '2023',
    detail: 'Percentage: 70.6%',
    color: 'border-secondary',
  },
  {
    degree: 'Secondary Education (Class 10)',
    institution: 'Kendriya Vidyalaya',
    period: '2021',
    detail: 'Percentage: 90.4%',
    color: 'border-emerald-500',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-white/30 dark:bg-slate-900/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center lg:text-left"
        >
          <p className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4">Qualifications</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-slate-900 dark:text-white">
            Education
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto lg:mx-0">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-slate-200 dark:bg-slate-700" />

          <div className="space-y-8">
            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <span className={`absolute left-0 top-2 w-[24px] h-[24px] rounded-full bg-white dark:bg-slate-900 border-4 ${edu.color} shadow-sm transition-all`} />

                <div className="bg-white dark:bg-slate-800/40 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-2.5 text-[10px] font-black text-slate-400 dark:text-slate-500 mb-4 uppercase tracking-[0.2em]">
                    <Calendar size={12} className="text-primary" />
                    {edu.period}
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-2">{edu.degree}</h3>
                  <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4">{edu.institution}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{edu.detail}</p>
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

