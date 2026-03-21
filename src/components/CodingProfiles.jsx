import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const profiles = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Deepnarayan03/',
    color: 'text-amber-500 dark:text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    hoverGlow: 'hover:shadow-amber-500/10',
    topBorder: 'border-t-amber-500/40',
    icon: '🟡',
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/Deep4229',
    color: 'text-blue-500 dark:text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    hoverGlow: 'hover:shadow-blue-500/10',
    topBorder: 'border-t-blue-500/40',
    icon: '🔵',
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/deepnaryan',
    color: 'text-orange-500 dark:text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    hoverGlow: 'hover:shadow-orange-500/10',
    topBorder: 'border-t-orange-500/40',
    icon: '🟠',
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/deepnaryan03',
    color: 'text-emerald-500 dark:text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    hoverGlow: 'hover:shadow-emerald-500/10',
    topBorder: 'border-t-emerald-500/40',
    icon: '🟢',
  },
];

const CodingProfiles = () => {
  return (
    <section id="profiles" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center lg:text-left"
        >
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Competitive Programming</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-slate-900 dark:text-white transition-colors">
            Technical <span className="text-gradient">Profiles</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg mx-auto lg:mx-0 transition-colors">
            Consistent engagement in algorithmic challenges to refine problem-solving efficiency and technical logic.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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
              className={`glass-card-hover rounded-3xl p-8 flex flex-col items-center text-center group cursor-pointer border-t-2 ${p.topBorder} ${p.hoverGlow} border-slate-200 dark:border-white/5 shadow-xl transition-all`}
            >
              <div className={`w-16 h-16 rounded-2xl ${p.bg} border ${p.border} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                {p.icon}
              </div>
              <h3 className={`font-bold text-xl mb-3 ${p.color} transition-colors uppercase tracking-wide`}>{p.name}</h3>
              <span className="text-slate-400 dark:text-gray-500 text-xs font-bold flex items-center gap-2 group-hover:text-primary transition-all uppercase tracking-widest">
                <span>View Profile</span>
                <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;

