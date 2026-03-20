import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'deepnaryan03@gmail.com',
    href: 'mailto:deepnaryan03@gmail.com',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    hoverGlow: 'hover:shadow-blue-500/10',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'Deep Narayan',
    href: 'https://www.linkedin.com/in/linkdin-deep-narayan/',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
    hoverGlow: 'hover:shadow-sky-500/10',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'Deepnarayan70',
    href: 'https://github.com/Deepnarayan70',
    color: 'text-gray-300',
    bg: 'bg-white/5',
    border: 'border-white/10',
    hoverGlow: 'hover:shadow-white/5',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent('Portfolio Contact - Deep Narayan');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:deepnaryan03@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);

    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-blob" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-primary-light text-sm font-medium tracking-wider uppercase mb-2">Contact</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-lg">
            Interested in collaborating or have an opportunity? Feel free to reach out through any of the platforms below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSendMessage} className="space-y-5 glass-card p-8 rounded-3xl relative border border-white/5 shadow-2xl">
              {/* Success toast */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute -top-16 left-0 right-0 mx-auto w-fit px-6 py-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 backdrop-blur-xl flex items-center gap-3 shadow-xl"
                  >
                    <CheckCircle size={18} className="text-emerald-400" />
                    <span className="text-emerald-300 text-sm font-medium">
                      Email app opened! Please send to complete.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-glow w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none transition-all placeholder:text-gray-600"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-glow w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none transition-all placeholder:text-gray-600"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="input-glow w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none transition-all resize-none placeholder:text-gray-600"
                  placeholder="Write your message..."
                />
              </div>
              <button
                type="submit"
                className="glow-btn flex items-center justify-center gap-2.5 w-full py-4 rounded-xl bg-gradient-to-r from-primary via-primary to-secondary text-white font-bold text-sm hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20 mt-2"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </motion.div>

          {/* Social Links & Resume */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center gap-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`glass-card-hover rounded-2xl p-6 flex items-center gap-4 group block border border-white/5 ${link.hoverGlow} hover:shadow-xl`}
                >
                  <div className={`w-12 h-12 rounded-xl ${link.bg} border ${link.border} flex items-center justify-center ${link.color} shrink-0 group-hover:scale-110 transition-transform`}>
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">{link.label}</p>
                    <p className="text-white text-[13px] font-semibold truncate group-hover:text-primary-light transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
              
              {/* Resume Download Card */}
              <a
                href="https://drive.google.com/file/d/1flV5iVZ0-KNwPSowkxw7kRZBXo8Q8c91/view"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover rounded-2xl p-6 flex items-center gap-4 group block bg-primary/5 border border-primary/20 shadow-lg shadow-primary/5 hover:shadow-primary/10 hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-light shrink-0 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </div>
                <div className="min-w-0">
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">Resume</p>
                  <p className="text-white text-[13px] font-semibold group-hover:text-primary-light transition-colors">
                    Download PDF
                  </p>
                </div>
              </a>
            </div>

            <div className="glass-card rounded-2xl p-8 text-center border border-white/5 shadow-xl">
              <p className="text-gray-400 text-sm leading-relaxed font-medium italic">
                Looking for new opportunities to build impactful AI/ML solutions and grow as a software engineer.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
