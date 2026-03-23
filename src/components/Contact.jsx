import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, Loader2, FileText } from 'lucide-react';

const contactLinks = [
  { icon: <Mail size={20} />, label: 'Email', value: 'deepnaryan03@gmail.com', href: 'mailto:deepnaryan03@gmail.com', accent: '#06b6d4' },
  { icon: <Linkedin size={20} />, label: 'LinkedIn', value: 'Deep Narayan', href: 'https://www.linkedin.com/in/linkdin-deep-narayan/', accent: '#3b82f6' },
  { icon: <Github size={20} />, label: 'GitHub', value: 'Deepnarayan70', href: 'https://github.com/Deepnarayan70', accent: '#8b5cf6' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    const { user_name, user_email, message } = formData;
    if (!user_name.trim() || !user_email.trim() || !message.trim()) { alert('Please fill in all fields.'); return; }
    setIsSending(true);

    const subject = encodeURIComponent(`Portfolio Contact from ${user_name}`);
    const body = encodeURIComponent(`Name: ${user_name}\nEmail: ${user_email}\n\nMessage:\n${message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=deepnaryan03@gmail.com&su=${subject}&body=${body}`;

    const newWindow = window.open(gmailUrl, '_blank');
    if (!newWindow || newWindow.closed) {
      window.location.href = `mailto:deepnaryan03@gmail.com?subject=${subject}&body=${body}`;
    }

    setIsSending(false);
    setShowSuccess(true);
    setFormData({ user_name: '', user_email: '', message: '' });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-20">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5 }} className="mb-14 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-heading font-black mb-6">Contact</h2>
          <p className="max-w-2xl leading-relaxed text-lg mx-auto lg:mx-0" style={{ color: 'var(--text-secondary)' }}>Feel free to connect for opportunities, collaborations, or project discussions.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 space-y-4">
            {contactLinks.map((link, i) => (
              <motion.a key={i} href={link.href} target={link.href.startsWith('mailto:') ? '_self' : '_blank'} rel="noopener noreferrer" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card-hover py-5 px-6 flex items-center gap-5 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" style={{ background: `${link.accent}15`, color: link.accent, border: `1px solid ${link.accent}30` }}>{link.icon}</div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-widest font-black mb-0.5" style={{ color: 'var(--text-secondary)' }}>{link.label}</p>
                  <p className="text-sm font-bold truncate" style={{ color: 'var(--text-primary)' }}>{link.value}</p>
                </div>
              </motion.a>
            ))}
            <motion.a href="https://drive.google.com/file/d/1HwbiZPcfAu8MVbs8SRV3JJUGtwxG8qf1/view?usp=sharing" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="glass-card-hover py-5 px-6 flex items-center gap-5 group">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" style={{ background: 'rgba(6,182,212,0.1)', color: '#06b6d4', border: '1px solid rgba(6,182,212,0.2)' }}><FileText size={20} /></div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-widest font-black mb-0.5" style={{ color: 'var(--text-secondary)' }}>Resume</p>
                <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>View Resume</p>
              </div>
            </motion.a>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:col-span-3 glass-card p-8 relative overflow-hidden">
            <AnimatePresence>
              {showSuccess && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center" style={{ background: 'var(--bg-card)', backdropFilter: 'blur(8px)' }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)' }}>
                    <CheckCircle size={28} style={{ color: '#06b6d4' }} />
                  </div>
                  <h3 className="text-2xl font-black mb-2" style={{ color: 'var(--text-primary)' }}>Opening Gmail...</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>A new tab should open with your message ready to send.</p>
                  <button onClick={() => setShowSuccess(false)} className="mt-6 btn-secondary text-xs">Dismiss</button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={sendEmail} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest ml-1" style={{ color: 'var(--text-secondary)' }}>Full Name</label>
                  <input type="text" name="user_name" required value={formData.user_name} onChange={handleChange} placeholder="Your name"
                    className="w-full px-5 py-3.5 rounded-xl outline-none transition-all placeholder:opacity-30 font-medium"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--card-border)', color: 'var(--text-primary)' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(6,182,212,0.4)'} onBlur={e => e.target.style.borderColor = 'var(--card-border)'} />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest ml-1" style={{ color: 'var(--text-secondary)' }}>Email Address</label>
                  <input type="email" name="user_email" required value={formData.user_email} onChange={handleChange} placeholder="you@example.com"
                    className="w-full px-5 py-3.5 rounded-xl outline-none transition-all placeholder:opacity-30 font-medium"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--card-border)', color: 'var(--text-primary)' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(6,182,212,0.4)'} onBlur={e => e.target.style.borderColor = 'var(--card-border)'} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest ml-1" style={{ color: 'var(--text-secondary)' }}>Your Message</label>
                <textarea name="message" required rows="4" value={formData.message} onChange={handleChange} placeholder="How can I help you?"
                  className="w-full px-5 py-3.5 rounded-xl outline-none transition-all resize-none placeholder:opacity-30 font-medium"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--card-border)', color: 'var(--text-primary)' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(6,182,212,0.4)'} onBlur={e => e.target.style.borderColor = 'var(--card-border)'} />
              </div>
              <button type="submit" disabled={isSending} className="btn-primary w-full justify-center group">
                {isSending ? <Loader2 size={18} className="animate-spin" /> : <><Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /><span>Send Message</span></>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
