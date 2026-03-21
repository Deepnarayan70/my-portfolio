import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const profiles = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Deepnarayan03/',
    color: 'text-amber-500',
    bg: 'bg-amber-500/5',
    border: 'border-amber-500/10',
    icon: 'LC',
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/Deep4229',
    color: 'text-blue-500',
    bg: 'bg-blue-500/5',
    border: 'border-blue-500/10',
    icon: 'CF',
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/deepnaryan',
    color: 'text-orange-500',
    bg: 'bg-orange-500/5',
    border: 'border-orange-500/10',
    icon: 'CC',
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/deepnaryan03',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/5',
    border: 'border-emerald-500/10',
    icon: 'HR',
  },
];

const CodingProfiles = () => {
  return (
    <section id="profiles" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center lg:text-left"
        >
          <p className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4">Benchmarks</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-slate-900 dark:text-white">
            Profiles
          </h2>
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
              className="bg-white dark:bg-slate-800/40 rounded-3xl p-8 flex flex-col items-center text-center group border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className={`w-16 h-16 rounded-2xl ${p.bg} border ${p.border} flex items-center justify-center text-sm font-black mb-6 group-hover:scale-110 transition-transform ${p.color} tracking-tighter`}>
                {p.icon}
              </div>
              <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-white uppercase tracking-wider">{p.name}</h3>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 group-hover:text-primary flex items-center gap-2 transition-all">
                <span>View Profile</span>
                <ExternalLink size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;

