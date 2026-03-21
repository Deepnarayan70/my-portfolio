import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Rocket, Lightbulb } from 'lucide-react';

const cards = [
  { icon: <Code size={22} />, title: 'Development', text: 'Builds backend systems and applications using Python, Flask, Java, and C++.', accent: '#06b6d4' },
  { icon: <Lightbulb size={22} />, title: 'Problem Solving', text: 'Strong foundation in Data Structures and Algorithms with 300+ problems solved.', accent: '#3b82f6' },
  { icon: <Brain size={22} />, title: 'Data Science', text: 'Works with data analysis, visualization, and predictive modeling using modern tools.', accent: '#8b5cf6' },
  { icon: <Rocket size={22} />, title: 'Learning', text: 'Continuously improving through projects, problem-solving, and exploring new technologies.', accent: '#f59e0b' },
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5 }} className="mb-14 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-heading font-black mb-6">About</h2>
          <p className="max-w-3xl leading-relaxed text-lg mx-auto lg:mx-0" style={{ color: 'var(--text-secondary)' }}>
            Computer Science undergraduate specializing in Data Science and backend development. Experienced in building real-world applications, working with data analysis, and solving algorithmic problems.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card-hover p-7 flex flex-col items-center lg:items-start text-center lg:text-left group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                style={{ background: `${card.accent}15`, color: card.accent, border: `1px solid ${card.accent}30` }}>{card.icon}</div>
              <h3 className="font-black text-lg mb-3 tracking-tight" style={{ color: 'var(--text-primary)' }}>{card.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
