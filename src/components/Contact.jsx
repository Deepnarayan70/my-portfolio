import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, Loader2, FileText } from 'lucide-react';
import emailjs from '@emailjs/browser';

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'deepnaryan03@gmail.com',
    href: 'mailto:deepnaryan03@gmail.com',
    color: 'text-blue-500 dark:text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    hoverGlow: 'hover:shadow-blue-500/10',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'Deep Narayan',
    href: 'https://www.linkedin.com/in/linkdin-deep-narayan/',
    color: 'text-sky-500 dark:text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
    hoverGlow: 'hover:shadow-sky-500/10',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'Deepnarayan70',
    href: 'https://github.com/Deepnarayan70',
    color: 'text-slate-600 dark:text-gray-300',
    bg: 'bg-slate-100 dark:bg-white/5',
    border: 'border-slate-200 dark:border-white/10',
    hoverGlow: 'hover:shadow-slate-300/10 dark:hover:shadow-white/5',
  },
];

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Placeholder: Replace with actual Service ID, Template ID, and Public Key
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      formRef.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
        setIsSending(false);
        setShowSuccess(true);
        formRef.current.reset();
        setTimeout(() => setShowSuccess(false), 5000);
    }, (error) => {
        setIsSending(false);
        console.error('EmailJS Error:', error.text);
        alert('Failed to send message. Please contact via email directly.');
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-white/30 dark:bg-slate-900/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center lg:text-left"
        >
          <p className="text-primary font-bold text-xs tracking-[0.3em] uppercase mb-4">Inquiries</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-slate-900 dark:text-white">
            Contact
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto lg:mx-0">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6 bg-white dark:bg-slate-800/40 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm relative">
              {/* Success toast */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute -top-16 left-0 right-0 mx-auto w-fit px-8 py-4 rounded-2xl bg-teal-500/10 border border-teal-500/30 backdrop-blur-xl flex items-center gap-3 z-50"
                  >
                    <CheckCircle size={20} className="text-teal-500" />
                    <span className="text-teal-700 dark:text-teal-300 text-[11px] font-black uppercase tracking-widest">
                      Message Shared
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3 block">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-xl px-5 py-4 text-sm text-slate-900 dark:text-white focus:border-primary/50 focus:outline-none transition-all"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3 block">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-xl px-5 py-4 text-sm text-slate-900 dark:text-white focus:border-primary/50 focus:outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3 block">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-xl px-5 py-4 text-sm text-slate-900 dark:text-white focus:border-primary/50 focus:outline-none transition-all resize-none"
                  placeholder="Inquiry details..."
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="flex items-center justify-center gap-3 w-full py-4.5 rounded-2xl bg-primary text-white font-black text-[11px] uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all disabled:opacity-70"
              >
                {isSending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Processing
                  </>
                ) : (
                  <>
                    <Send size={14} /> Send Message
                  </>
                )}
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
                  className="bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700 rounded-2xl p-6 flex items-center gap-4 group hover:border-primary/30 transition-all shadow-sm"
                >
                  <div className={`w-12 h-12 rounded-xl ${link.bg} border ${link.border} flex items-center justify-center ${link.color} shrink-0 group-hover:scale-110 transition-transform`}>
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500 mb-1">{link.label}</p>
                    <p className="text-slate-900 dark:text-white text-xs font-bold truncate">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
              
              {/* Resume View Card */}
              <a
                href="https://drive.google.com/file/d/1flV5iVZ0-KNwPSowkxw7kRZBXo8Q8c91/view"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-50 dark:bg-slate-800/60 border border-primary/10 rounded-2xl p-6 flex items-center gap-4 group hover:border-primary/30 transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                  <FileText size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] uppercase tracking-widest font-black text-slate-400 dark:text-slate-500 mb-1">Resume</p>
                  <p className="text-slate-900 dark:text-white text-xs font-bold">
                    View Portfolio PDF
                  </p>
                </div>
              </a>
            </div>

            <div className="bg-white dark:bg-slate-800/20 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 text-center">
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-bold italic">
                Open to technical collaborations and data-driven development roles.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

