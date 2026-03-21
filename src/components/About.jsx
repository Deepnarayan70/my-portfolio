import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Rocket, Lightbulb } from 'lucide-react';

const cards = [
  {
    icon: <Code size={22} />,
    title: 'Development',
    text: 'Proficiency in building data-driven applications and robust backend systems using Python and Flask.',
    color: 'text-teal-500',
    bg: 'bg-teal-500/5',
    border: 'border-teal-500/10',
  },
  {
    icon: <Lightbulb size={22} />,
    title: 'Problem Solving',
    text: 'Strong foundation in Data Structures and Algorithms with a focus on efficient, scalable computational logic.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/5',
    border: 'border-blue-500/10',
  },
  {
    icon: <Brain size={22} />,
    title: 'Data Science',
    text: 'Experienced in statistical analysis, predictive modeling, and deriving actionable insights from complex datasets.',
    color: 'text-primary',
    bg: 'bg-primary/5',
    border: 'border-primary/10',
  },
  {
    icon: <Rocket size={22} />,
    title: 'Learning',
    text: 'Dedicated to continuous improvement and staying current with industry-leading analytical tools and methodologies.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/5',
    border: 'border-indigo-500/10',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white/30 dark:bg-slate-900/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center lg:text-left"
        >
          <p className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4">Introduction</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-slate-900 dark:text-white">
            About
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed text-lg mx-auto lg:mx-0 font-medium">
            Computer Science student with a focused commitment to Data Science and back-end engineering. Specialized in building analytical systems that leverage data-driven insights to solve complex real-world problems.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white dark:bg-slate-800/40 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${card.bg} border ${card.border} flex items-center justify-center ${card.color} mb-8 transition-transform group-hover:scale-110`}>
                {card.icon}
              </div>
              <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-4">{card.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
