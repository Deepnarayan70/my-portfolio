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

    // Replace with actual Service ID, Template ID, and Public Key
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
        alert('Failed to send message. Please try again or contact via email directly.');
    });
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
          className="mb-14 text-center lg:text-left"
        >
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Inquiries</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-slate-900 dark:text-white transition-colors">
            Contact <span className="text-gradient">Information</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg mx-auto lg:mx-0 transition-colors">
            Available for technical collaborations, research opportunities, or software engineering inquiries. 
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
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6 glass-card p-10 rounded-3xl relative border border-slate-200 dark:border-white/5 shadow-2xl transition-all">
              {/* Success toast */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute -top-20 left-0 right-0 mx-auto w-fit px-8 py-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 backdrop-blur-xl flex items-center gap-3 shadow-2xl z-50"
                  >
                    <CheckCircle size={20} className="text-emerald-500" />
                    <span className="text-emerald-700 dark:text-emerald-300 text-sm font-bold">
                      Message sent successfully!
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label className="text-[10px] font-bold text-slate-500 dark:text-gray-500 uppercase tracking-widest mb-2.5 block">Full Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="input-glow w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm text-slate-900 dark:text-white focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 dark:text-gray-500 uppercase tracking-widest mb-2.5 block">Email Address</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="input-glow w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm text-slate-900 dark:text-white focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 dark:text-gray-500 uppercase tracking-widest mb-2.5 block">Message Body</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="input-glow w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm text-slate-900 dark:text-white focus:outline-none transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-gray-600"
                  placeholder="Details of the inquiry..."
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="glow-btn flex items-center justify-center gap-3 w-full py-4.5 rounded-2xl bg-gradient-to-r from-primary via-primary to-secondary text-white font-bold text-sm hover:opacity-90 hover:scale-[1.01] transition-all shadow-xl shadow-primary/20 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Inquiry
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
            className="flex flex-col justify-center gap-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {contactLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`glass-card-hover rounded-2xl p-6 flex items-center gap-4 group block border border-slate-200 dark:border-white/5 shadow-lg ${link.hoverGlow} transition-all`}
                >
                  <div className={`w-12 h-12 rounded-xl ${link.bg} border ${link.border} flex items-center justify-center ${link.color} shrink-0 group-hover:scale-110 transition-transform`}>
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-400 dark:text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1 transition-colors">{link.label}</p>
                    <p className="text-slate-900 dark:text-white text-[13px] font-bold truncate group-hover:text-primary transition-colors">
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
                className="glass-card-hover rounded-2xl p-6 flex items-center gap-4 group block bg-primary/5 border border-primary/20 shadow-lg shadow-primary/5 hover:shadow-primary/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                  <FileText size={22} />
                </div>
                <div className="min-w-0">
                  <p className="text-slate-400 dark:text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1 transition-colors">Resume</p>
                  <p className="text-slate-900 dark:text-white text-[13px] font-bold group-hover:text-primary transition-colors">
                    View Portfolio PDF
                  </p>
                </div>
              </a>
            </div>

            <div className="glass-card rounded-2xl p-8 text-center border border-slate-200 dark:border-white/5 shadow-xl transition-all">
              <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed font-semibold italic transition-colors">
                Seeking opportunities to engineer impactful Machine Learning solutions and technical systems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

