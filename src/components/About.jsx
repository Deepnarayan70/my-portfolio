import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Rocket, Lightbulb } from 'lucide-react';

const cards = [
  {
    icon: <Code size={22} />,
    title: 'Development',
    text: 'Building functional web applications using Flask with a focus on clean, intuitive interfaces.',
    color: 'text-blue-500 dark:text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    topBorder: 'border-t-blue-500/40',
    hoverGlow: 'hover:shadow-blue-500/10',
  },
  {
    icon: <Lightbulb size={22} />,
    title: 'Problem Solving',
    text: 'Proficient in Data Structures and Algorithms with consistent practice on platforms like LeetCode.',
    color: 'text-amber-500 dark:text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    topBorder: 'border-t-amber-500/40',
    hoverGlow: 'hover:shadow-amber-500/10',
  },
  {
    icon: <Brain size={22} />,
    title: 'Machine Learning',
    text: 'Experienced in developing predictive models using Pandas, NumPy, and scikit-learn.',
    color: 'text-primary dark:text-primary-light',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
    topBorder: 'border-t-primary/40',
    hoverGlow: 'hover:shadow-primary/10',
  },
  {
    icon: <Rocket size={22} />,
    title: 'Technical Growth',
    text: 'Dedicated to continuous learning and technical excellence through projects and coding challenges.',
    color: 'text-emerald-500 dark:text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    topBorder: 'border-t-emerald-500/40',
    hoverGlow: 'hover:shadow-emerald-500/10',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="section-container">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center lg:text-left"
        >
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2">About</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-5 text-slate-900 dark:text-white transition-colors">
            Transforming Complex Ideas into <span className="text-gradient">Intelligent Solutions</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed text-lg mx-auto lg:mx-0 transition-colors">
            Computer Science student with a specialized focus on Machine Learning, Data Science, and Engineering. Passionate about solving complex logical challenges and building scalable applications that drive meaningful impact through data-driven insights.
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
              className={`glass-card-hover rounded-2xl p-7 border-t-2 ${card.topBorder} ${card.hoverGlow} border-slate-200 dark:border-white/5 shadow-xl transition-all`}
            >
              <div className={`w-12 h-12 rounded-xl ${card.bg} border ${card.border} flex items-center justify-center ${card.color} mb-6 transition-colors`}>
                {card.icon}
              </div>
              <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-3 transition-colors">{card.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed transition-colors">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
