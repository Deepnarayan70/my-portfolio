import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certs = [
  {
    title: 'Salesforce Certified AI Associate',
    issuer: 'Salesforce',
    url: 'https://drive.google.com/file/d/1ig4rPdfjmimCQ_WjwX8DA_DRSz-zUwlg/view',
  },
  {
    title: 'NPTEL Cloud Computing',
    issuer: 'IIT Kharagpur',
    url: 'https://drive.google.com/file/d/1XFtnkaGMqm02GUH5NA8wvH7B77WXKpwU/view',
  },
  {
    title: 'C++ DSA Course',
    issuer: 'Apna College',
    url: 'https://drive.google.com/file/d/1kcCshhc7Atx7ACQPJsnA8QQV_DqK37Bf/view',
  },
  {
    title: 'Machine Learning',
    issuer: 'CipherSchools',
    url: 'https://drive.google.com/file/d/1FAj47ott9ZGituV20kYRmVLeWtvrHSye/view',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-primary-light text-sm font-medium tracking-wider uppercase mb-2">Certifications</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            My <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card-hover rounded-xl p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                <Award size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-base mb-1">{cert.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{cert.issuer}</p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary-light text-xs font-medium hover:text-white transition-colors"
                >
                  View Certificate <ExternalLink size={12} />
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
