import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certs = [
  {
    title: 'Salesforce Certified AI Associate',
    issuer: 'Salesforce',
    url: 'https://drive.google.com/file/d/1ig4rPdfjmimCQ_WjwX8DA_DRSz-zUwlg/view',
    color: 'text-primary',
    bg: 'bg-primary/5',
    border: 'border-primary/10',
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL | IIT Kharagpur',
    url: 'https://drive.google.com/file/d/1XFtnkaGMqm02GUH5NA8wvH7B77WXKpwU/view',
    color: 'text-blue-500',
    bg: 'bg-blue-500/5',
    border: 'border-blue-500/10',
  },
  {
    title: 'C++ Data Structures & Algorithms',
    issuer: 'Apna College',
    url: 'https://drive.google.com/file/d/1kcCshhc7Atx7ACQPJsnA8QQV_DqK37Bf/view',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/5',
    border: 'border-emerald-500/10',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'CipherSchools',
    url: 'https://drive.google.com/file/d/1FAj47ott9ZGituV20kYRmVLeWtvrHSye/view',
    color: 'text-amber-500',
    bg: 'bg-amber-500/5',
    border: 'border-amber-500/10',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden bg-white/30 dark:bg-slate-900/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center lg:text-left"
        >
          <p className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4">Recognition</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-slate-900 dark:text-white">
            Certifications
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white dark:bg-slate-800/40 rounded-3xl p-8 flex items-start gap-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${cert.bg} border ${cert.border} flex items-center justify-center ${cert.color} shrink-0 mt-1 transition-transform group-hover:scale-110`}>
                <Award size={26} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-4 leading-tight">{cert.title}</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">{cert.issuer}</p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.15em] text-primary hover:text-secondary dark:hover:text-primary-light transition-all"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={14} />
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

