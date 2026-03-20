import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Rocket, Lightbulb } from 'lucide-react';

const cards = [
  {
    icon: <Code size={22} />,
    title: 'Development',
    text: 'Building simple and functional web applications using Flask and clean UI.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    topBorder: 'border-t-blue-500/40',
    hoverGlow: 'hover:shadow-blue-500/10',
  },
  {
    icon: <Lightbulb size={22} />,
    title: 'Problem Solving',
    text: 'Practicing DSA on platforms like LeetCode to improve logic and coding skills.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    topBorder: 'border-t-amber-500/40',
    hoverGlow: 'hover:shadow-amber-500/10',
  },
  {
    icon: <Brain size={22} />,
    title: 'Machine Learning',
    text: 'Using Pandas, NumPy, and scikit-learn to build predictive models.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    topBorder: 'border-t-purple-500/40',
    hoverGlow: 'hover:shadow-purple-500/10',
  },
  {
    icon: <Rocket size={22} />,
    title: 'Growth',
    text: 'Continuously learning and improving through projects and coding practice.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    topBorder: 'border-t-emerald-500/40',
    hoverGlow: 'hover:shadow-emerald-500/10',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-primary-light text-sm font-medium tracking-wider uppercase mb-2">About Me</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-5">
            Turning ideas into <span className="text-gradient">real-world solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed text-lg">
            I am a Computer Science student with strong interest in Machine Learning, Data Science, and backend development. I enjoy solving problems using DSA and building practical applications that have real-world impact.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`glass-card-hover rounded-2xl p-7 border-t-2 ${card.topBorder} ${card.hoverGlow} hover:shadow-xl`}
            >
              <div className={`w-11 h-11 rounded-xl ${card.bg} border ${card.border} flex items-center justify-center ${card.color} mb-5`}>
                {card.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
