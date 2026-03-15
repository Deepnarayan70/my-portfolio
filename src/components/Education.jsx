import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-12 relative bg-surface/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Qualifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary" size={28} />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="relative border-l border-white/10 ml-3 pl-8 pb-8 space-y-12">
              <div className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-2 border-primary ring-4 ring-primary/20" />
                
                <div className="glass p-6 rounded-xl hover:bg-surface/60 transition-colors relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <div className="flex items-center gap-2 text-sm text-primary font-semibold mb-2">
                    <Calendar size={14} /> 2021 - 2025
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">B.Tech Computer Science Engineering</h4>
                  <p className="text-lg text-gray-300 mb-4 tracking-wide font-heading">Lovely Professional University</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Focusing on software engineering principles, machine learning, and advanced data structures. Participating in hackathons and building practical applications.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-secondary" size={28} />
              <h3 className="text-2xl font-bold text-white">Certificates</h3>
            </div>
            
            <div className="relative border-l border-white/10 ml-3 pl-8 pb-8 space-y-8">
              
              <div className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-2 border-secondary ring-4 ring-secondary/20" />
                
                <div className="glass p-5 rounded-xl hover:bg-surface/60 transition-colors">
                  <h4 className="text-lg font-bold text-white mb-1">Machine Learning with Data Science</h4>
                  <p className="text-secondary font-medium text-sm mb-2">CipherSchools</p>
                  <p className="text-gray-400 text-sm">Comprehensive training focused on practical implementation of ML algorithms using Python data stacks.</p>
                </div>
              </div>
              
              <div className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-2 border-secondary ring-4 ring-secondary/20" />
                
                <div className="glass p-5 rounded-xl hover:bg-surface/60 transition-colors">
                  <h4 className="text-lg font-bold text-white mb-1">Generative AI Certification</h4>
                  <p className="text-secondary font-medium text-sm mb-2">Industry Certification</p>
                  <p className="text-gray-400 text-sm">Mastering the fundamentals of Large Language Models and prompt engineering architectures.</p>
                </div>
              </div>

              <div className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-2 border-secondary ring-4 ring-secondary/20" />
                
                <div className="glass p-5 rounded-xl hover:bg-surface/60 transition-colors">
                  <h4 className="text-lg font-bold text-white mb-1">Excel Training Program</h4>
                  <p className="text-secondary font-medium text-sm mb-2">Data Analysis Foundation</p>
                  <p className="text-gray-400 text-sm">Advanced data manipulation, pivot tables, and statistical analysis using Microsoft Excel.</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
