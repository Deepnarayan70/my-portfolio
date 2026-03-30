import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 flex flex-col justify-center">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: '-80px' }} 
          transition={{ duration: 0.5 }} 
          className="text-left max-w-3xl"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-black mb-10">About Me</h2>
          
          <div className="leading-relaxed text-lg space-y-6 text-gray-400 font-medium mb-12">
            <p>
              I am Deep Narayan, a B.Tech Computer Science student at Lovely Professional University (2023–2027).
            </p>
            <p>
              I focus on backend development and data science, building real-world applications using Python and Flask. I work with data analysis tools like Pandas and NumPy and apply machine learning techniques to create practical solutions.
            </p>
            <p>
              I regularly practice Data Structures and Algorithms to strengthen problem-solving and logical thinking.
            </p>
          </div>

          {/* Impact Section */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl border bg-cyan-500/5 border-cyan-500/10 max-w-sm text-left inline-block">
            <div className="text-4xl font-black text-cyan-500 mb-1">300+</div>
            <div className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Problems Solved</div>
            <p className="text-base font-medium leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Active on LeetCode, Codeforces, and HackerRank
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
