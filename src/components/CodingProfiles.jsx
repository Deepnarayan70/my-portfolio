import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const profiles = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Deepnarayan03/',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    hoverGlow: 'hover:shadow-amber-500/10',
    topBorder: 'border-t-amber-500/40',
    icon: '🟡',
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/Deep4229',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    hoverGlow: 'hover:shadow-blue-500/10',
    topBorder: 'border-t-blue-500/40',
    icon: '🔵',
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/deepnaryan',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    hoverGlow: 'hover:shadow-orange-500/10',
    topBorder: 'border-t-orange-500/40',
    icon: '🟠',
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/deepnaryan03',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    hoverGlow: 'hover:shadow-emerald-500/10',
    topBorder: 'border-t-emerald-500/40',
    icon: '🟢',
  },
];

const CodingProfiles = () => {
  return (
    <section id="profiles" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-primary-light text-sm font-medium tracking-wider uppercase mb-2">Coding Profiles</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Where I <span className="text-gradient">practice</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-lg">
            Practicing Data Structures and Algorithms regularly to sharpen problem-solving skills.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {profiles.map((p, i) => (
            <motion.a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`glass-card-hover rounded-2xl p-7 flex flex-col items-center text-center group cursor-pointer border-t-2 ${p.topBorder} ${p.hoverGlow} hover:shadow-xl`}
            >
              <div className={`w-14 h-14 rounded-2xl ${p.bg} border ${p.border} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform`}>
                {p.icon}
              </div>
              <h3 className={`font-semibold text-lg mb-3 ${p.color}`}>{p.name}</h3>
              <span className="text-gray-500 text-xs flex items-center gap-1.5 group-hover:text-gray-300 group-hover:underline transition-all">
                Visit Profile <ExternalLink size={12} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
