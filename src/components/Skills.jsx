import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Programming',
    skills: ['Python', 'C++', 'Java', 'SQL'],
    color: 'from-blue-500 to-cyan-400',
    tagBg: 'bg-blue-500/10',
    tagBorder: 'border-blue-500/20',
    tagText: 'text-blue-300',
  },
  {
    title: 'ML / Data Science',
    skills: ['Pandas', 'NumPy', 'scikit-learn'],
    color: 'from-purple-500 to-pink-400',
    tagBg: 'bg-purple-500/10',
    tagBorder: 'border-purple-500/20',
    tagText: 'text-purple-300',
  },
  {
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'Flask'],
    color: 'from-emerald-400 to-teal-400',
    tagBg: 'bg-emerald-500/10',
    tagBorder: 'border-emerald-500/20',
    tagText: 'text-emerald-300',
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Power BI'],
    color: 'from-orange-400 to-amber-400',
    tagBg: 'bg-orange-500/10',
    tagBorder: 'border-orange-500/20',
    tagText: 'text-orange-300',
  },
  {
    title: 'Core CS',
    skills: ['DSA', 'OOP', 'DBMS'],
    color: 'from-rose-400 to-red-400',
    tagBg: 'bg-rose-500/10',
    tagBorder: 'border-rose-500/20',
    tagText: 'text-rose-300',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-primary-light text-sm font-medium tracking-wider uppercase mb-2">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Technologies I <span className="text-gradient">work with</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            A snapshot of the tools and technologies I use to build projects and solve problems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card-hover rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className={`w-1.5 h-6 rounded-full bg-gradient-to-b ${group.color}`} />
                <h3 className="text-white font-semibold text-base">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg ${group.tagBg} border ${group.tagBorder} ${group.tagText}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
