import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, BrainCircuit } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 relative">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-primary/20" />
              
              <h3 className="text-2xl font-heading font-bold mb-6 text-white">Who am I?</h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                I am <strong className="text-white">Deep Narayan</strong>, a passionate B.Tech Computer Science Engineering student studying at <strong className="text-primary font-medium">Lovely Professional University</strong>.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                My journey in tech revolves around <strong className="text-white">Machine Learning, Data Science, and Software Development</strong>. I thrive on extracting meaning from complex data sets and translating those insights into functional, performant applications.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Whether it's training a predictive model, conceptualizing a data dashboard, or engineering a responsive web interface, I approach every project with curiosity and a desire to build solutions that matter.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Highlight Cards */}
            <div className="glass hover:bg-surface/60 transition-colors p-6 rounded-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                <GraduationCap className="text-blue-400" size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg mb-1">Computer Science Engineering</h4>
                <p className="text-gray-400 text-sm">Pursuing a rigorous B.Tech degree focusing on core CS fundamentals and advanced methodologies.</p>
              </div>
            </div>

            <div className="glass hover:bg-surface/60 transition-colors p-6 rounded-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                <BrainCircuit className="text-purple-400" size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg mb-1">Data Science & ML</h4>
                <p className="text-gray-400 text-sm">Passionate about extracting patterns from data and employing algorithmic predictions to solve real problems.</p>
              </div>
            </div>

            <div className="glass hover:bg-surface/60 transition-colors p-6 rounded-xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                <Code className="text-emerald-400" size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg mb-1">Software Development</h4>
                <p className="text-gray-400 text-sm">Building responsive web apps and robust backends tailored to user needs and business logic.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
