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
    ring: 'ring-primary/20',
    glow: 'shadow-primary/20',
  },
  {
    degree: 'Higher Secondary Education (Class 12)',
    institution: 'Kendriya Vidyalaya',
    period: 'Completed 2023',
    detail: 'Percentage: 70.6%',
    color: 'border-secondary',
    ring: 'ring-secondary/20',
    glow: 'shadow-secondary/20',
  },
  {
    degree: 'Secondary Education (Class 10)',
    institution: 'Kendriya Vidyalaya',
    period: 'Completed 2021',
    detail: 'Percentage: 90.4%',
    color: 'border-accent',
    ring: 'ring-accent/20',
    glow: 'shadow-accent/20',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center lg:text-left"
        >
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Qualifications</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-slate-900 dark:text-white transition-colors">
            Academic <span className="text-gradient">Background</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto lg:mx-0">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-slate-200 dark:bg-gradient-to-b dark:from-primary/30 dark:via-secondary/20 dark:to-accent/10" />

          <div className="space-y-10">
            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-12"
              >
                {/* Timeline dot with glow */}
                <span className={`absolute left-0 top-2 w-[24px] h-[24px] rounded-full bg-white dark:bg-background-dark border-4 ${edu.color} ring-4 ${edu.ring} shadow-lg transition-all`} />

                <div className="glass-card-hover rounded-2xl p-8 border border-slate-200 dark:border-white/5 shadow-xl transition-all">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-slate-400 dark:text-gray-500 mb-4 transition-colors uppercase tracking-widest">
                    <Calendar size={14} className="text-primary" />
                    {edu.period}
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-2 transition-colors">{edu.degree}</h3>
                  <p className="text-primary font-bold text-sm mb-3 transition-colors uppercase tracking-wide">{edu.institution}</p>
                  <p className="text-slate-500 dark:text-gray-400 text-sm font-medium transition-colors">{edu.detail}</p>
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

