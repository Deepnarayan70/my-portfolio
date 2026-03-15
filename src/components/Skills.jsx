import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 80 }
      ],
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Data Science & ML",
      skills: [
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 85 },
        { name: "Scikit-learn", level: 75 }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", level: 80 },
        { name: "HTML & CSS", level: 90 },
        { name: "Flask", level: 75 }
      ],
      color: "from-emerald-400 to-teal-500"
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Power BI", level: 80 },
        { name: "Excel", level: 85 }
      ],
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 relative bg-surface/30">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A comprehensive look at my technical expertise across languages, data structures, and tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl hover:bg-white/[0.07] transition-colors border border-white/5"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className={`w-2 h-6 rounded-full bg-gradient-to-b ${category.color}`} />
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm tracking-widest">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-surface rounded-full h-2 overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} relative`}
                      >
                        {/* Shimmer effect inside the bar */}
                        <div className="absolute inset-x-0 top-0 h-full bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
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
