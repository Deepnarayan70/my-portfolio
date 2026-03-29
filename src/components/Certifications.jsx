import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certs = [
  { title: 'Salesforce Certified AI Associate', issuer: 'Salesforce', url: 'https://drive.google.com/file/d/1ig4rPdfjmimCQ_WjwX8DA_DRSz-zUwlg/view', accent: '#3b82f6' },
  { title: 'NPTEL Cloud Computing', issuer: 'IIT Kharagpur', url: 'https://drive.google.com/file/d/1XFtnkaGMqm02GUH5NA8wvH7B77WXKpwU/view', accent: '#8b5cf6' },
  { title: 'C++ Data Structures & Algorithms', issuer: 'Apna College', url: 'https://drive.google.com/file/d/1kcCshhc7Atx7ACQPJsnA8QQV_DqK37Bf/view', accent: '#10b981' },
  { title: 'Machine Learning with Data Science', issuer: 'CipherSchools', url: 'https://drive.google.com/file/d/1FAj47ott9ZGituV20kYRmVLeWtvrHSye/view', accent: '#f59e0b' },
];

const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen flex flex-col justify-center py-20">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5 }} className="mb-14 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-heading font-black mb-6">Certifications</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-5">
          {certs.map((cert, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.4, delay: i * 0.08 }} className="glass-card-hover p-7 flex items-start gap-5 group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110" style={{ background: `${cert.accent}15`, color: cert.accent, border: `1px solid ${cert.accent}30` }}>
                <Award size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-black text-lg mb-2 leading-tight tracking-tight group-hover:text-cyan-500 transition-colors" style={{ color: 'var(--text-primary)' }}>{cert.title}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--text-secondary)' }}>{cert.issuer}</p>
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-colors group/link" style={{ color: '#06b6d4' }}>
                  <span className="border-b transition-colors" style={{ borderColor: 'rgba(6,182,212,0.3)' }}>Verify Credential</span>
                  <ExternalLink size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
