import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certs = [
  {
    title: 'Salesforce Certified AI Associate',
    issuer: 'Salesforce',
    url: 'https://drive.google.com/file/d/1ig4rPdfjmimCQ_WjwX8DA_DRSz-zUwlg/view',
    color: 'text-primary dark:text-primary-light',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL | IIT Kharagpur',
    url: 'https://drive.google.com/file/d/1XFtnkaGMqm02GUH5NA8wvH7B77WXKpwU/view',
    color: 'text-blue-500 dark:text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    title: 'C++ Data Structures & Algorithms',
    issuer: 'Apna College',
    url: 'https://drive.google.com/file/d/1kcCshhc7Atx7ACQPJsnA8QQV_DqK37Bf/view',
    color: 'text-emerald-500 dark:text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'CipherSchools',
    url: 'https://drive.google.com/file/d/1FAj47ott9ZGituV20kYRmVLeWtvrHSye/view',
    color: 'text-amber-500 dark:text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center lg:text-left"
        >
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Recognition</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-slate-900 dark:text-white transition-colors">
            Professional <span className="text-gradient">Certifications</span>
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
              className="glass-card-hover rounded-3xl p-8 flex items-start gap-6 border border-slate-200 dark:border-white/5 shadow-xl transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl ${cert.bg} border ${cert.border} flex items-center justify-center ${cert.color} shrink-0 mt-1 transition-colors shadow-sm`}>
                <Award size={26} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-2 transition-colors">{cert.title}</h3>
                <p className="text-slate-400 dark:text-gray-500 text-sm font-bold uppercase tracking-widest mb-5 transition-colors">{cert.issuer}</p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-bold text-xs hover:text-secondary dark:hover:text-primary-light transition-all uppercase tracking-widest group/link"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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

