import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Wrench, BookOpen } from 'lucide-react';

const skillGroups = [
  {
    title: 'Programming',
    skills: ['Python', 'C++', 'Java', 'SQL'],
    color: 'from-blue-500 to-cyan-400',
    tagBg: 'bg-blue-500/10',
    tagBorder: 'border-blue-500/20',
    tagText: 'text-blue-300',
    borderAccent: 'border-t-blue-500/40',
    hoverGlow: 'hover:shadow-blue-500/10',
    icon: <Code size={20} />,
    iconColor: 'text-blue-400',
  },
  {
    title: 'ML / Data Science',
    skills: ['Pandas', 'NumPy', 'scikit-learn'],
    color: 'from-purple-500 to-pink-400',
    tagBg: 'bg-purple-500/10',
    tagBorder: 'border-purple-500/20',
    tagText: 'text-purple-300',
    borderAccent: 'border-t-purple-500/40',
    hoverGlow: 'hover:shadow-purple-500/10',
    icon: <Database size={20} />,
    iconColor: 'text-purple-400',
  },
  {
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'Flask'],
    color: 'from-emerald-400 to-teal-400',
    tagBg: 'bg-emerald-500/10',
    tagBorder: 'border-emerald-500/20',
    tagText: 'text-emerald-300',
    borderAccent: 'border-t-emerald-500/40',
    hoverGlow: 'hover:shadow-emerald-500/10',
    icon: <Globe size={20} />,
    iconColor: 'text-emerald-400',
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Power BI'],
    color: 'from-orange-400 to-amber-400',
    tagBg: 'bg-orange-500/10',
    tagBorder: 'border-orange-500/20',
    tagText: 'text-orange-300',
    borderAccent: 'border-t-orange-500/40',
    hoverGlow: 'hover:shadow-orange-500/10',
    icon: <Wrench size={20} />,
    iconColor: 'text-orange-400',
  },
  {
    title: 'Core CS',
    skills: ['DSA', 'OOP', 'DBMS'],
    color: 'from-rose-400 to-red-400',
    tagBg: 'bg-rose-500/10',
    tagBorder: 'border-rose-500/20',
    tagText: 'text-rose-300',
    borderAccent: 'border-t-rose-500/40',
    hoverGlow: 'hover:shadow-rose-500/10',
    icon: <BookOpen size={20} />,
    iconColor: 'text-rose-400',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-primary-light text-sm font-medium tracking-wider uppercase mb-2">Skills</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Technologies I <span className="text-gradient">work with</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-lg">
            A snapshot of the tools and technologies I use to build projects and solve problems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`glass-card-hover rounded-2xl p-7 border-t-2 ${group.borderAccent} ${group.hoverGlow} hover:shadow-xl`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${group.iconColor}`}>
                  {group.icon}
                </div>
                <h3 className="text-white font-semibold text-lg">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    className={`px-4 py-2 text-xs font-semibold rounded-xl ${group.tagBg} border ${group.tagBorder} ${group.tagText} transition-all hover:scale-105`}
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
