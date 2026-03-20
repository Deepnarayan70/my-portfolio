import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech Computer Science Engineering',
    institution: 'Lovely Professional University',
    period: '2023 – Present',
    detail: 'CGPA: 8.1',
    color: 'border-primary',
    ring: 'ring-primary/20',
    glow: 'shadow-primary/20',
    dotBg: 'bg-primary/20',
  },
  {
    degree: 'Class 12',
    institution: 'Kendriya Vidyalaya',
    period: 'Completed',
    detail: 'Percentage: 70.6%',
    color: 'border-secondary',
    ring: 'ring-secondary/20',
    glow: 'shadow-secondary/20',
    dotBg: 'bg-secondary/20',
  },
  {
    degree: 'Class 10',
    institution: 'Kendriya Vidyalaya',
    period: 'Completed',
    detail: 'Percentage: 90.4%',
    color: 'border-accent',
    ring: 'ring-accent/20',
    glow: 'shadow-accent/20',
    dotBg: 'bg-accent/20',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-primary-light text-sm font-medium tracking-wider uppercase mb-2">Education</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Academic <span className="text-gradient">background</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-2xl">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/30 via-secondary/20 to-accent/10" />

          <div className="space-y-8">
            {educationData.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-10"
              >
                {/* Timeline dot with glow */}
                <span className={`absolute left-0 top-2 w-[23px] h-[23px] rounded-full bg-background border-2 ${edu.color} ring-4 ${edu.ring} shadow-lg ${edu.glow}`} />

                <div className="glass-card-hover rounded-2xl p-7">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar size={13} />
                    {edu.period}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">{edu.degree}</h3>
                  <p className="text-primary-light text-sm font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.detail}</p>
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
