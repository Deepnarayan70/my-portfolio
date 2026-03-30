import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const profiles = [
  { name: 'LeetCode', url: 'https://leetcode.com/u/Deepnarayan03/', accent: '#f59e0b', icon: 'LC' },
  { name: 'Codeforces', url: 'https://codeforces.com/profile/Deep4229', accent: '#1f8acb', icon: 'CF' },
  { name: 'CodeChef', url: 'https://www.codechef.com/users/deepnaryan', accent: '#f97316', icon: 'CC' },
  { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/deepnaryan03', accent: '#10b981', icon: 'HR' },
];

const CodingProfiles = () => {
  return (
    <section id="profiles" className="py-16 mt-16 flex flex-col justify-center">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5 }} className="mb-14 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-heading font-black mb-6">Profiles</h2>
          <p className="max-w-xl leading-relaxed text-lg mx-auto lg:mx-0 mb-10" style={{ color: 'var(--text-secondary)' }}>
            Practicing Data Structures and Algorithms to improve problem-solving skills.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((p, i) => (
            <motion.a key={i} href={p.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.4, delay: i * 0.08 }} className="glass-card-hover p-8 flex flex-col items-center text-center group min-h-[220px]">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black mb-5 group-hover:scale-110 transition-transform" style={{ background: `${p.accent}15`, color: p.accent, border: `1px solid ${p.accent}30` }}>{p.icon}</div>
              <h3 className="font-black text-lg mb-3 tracking-tight" style={{ color: 'var(--text-primary)' }}>{p.name}</h3>
              <span className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-colors" style={{ color: 'var(--text-secondary)' }}>
                <span>View Profile</span>
                <ExternalLink size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
