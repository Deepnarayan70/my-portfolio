import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity, Database, CloudRain, Utensils } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI Stock Trading Simulator",
      description: "A comprehensive Flask web application that simulates stock trading and predicts prices using a Linear Regression machine learning model.",
      icon: <Activity className="text-primary mb-4" size={32} />,
      tech: ["Flask", "Python", "yfinance", "Scikit-Learn"],
      features: [
        "User authentication system",
        "Stock buy/sell simulation",
        "Portfolio & ROI tracking",
        "7-day ML price prediction"
      ],
      github: "https://github.com/deepnarayan/ai-stock-trading",
      demo: "#",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderHover: "hover:border-blue-500/50"
    },
    {
      title: "Diabetes Prediction System",
      description: "Machine learning application analyzing health dataset metrics to predict diabetes risk using multiple algorithms for higher accuracy.",
      icon: <Database className="text-purple-400 mb-4" size={32} />,
      tech: ["Python", "Pandas", "Logistic Regression", "Decision Tree"],
      features: [
        "Health dataset analysis",
        "Comparative model evaluation",
        "Risk probability scoring"
      ],
      github: "https://github.com/deepnarayan/diabetes-prediction",
      demo: "#",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderHover: "hover:border-purple-500/50"
    },
    {
      title: "Weather Forecast Dashboard",
      description: "An interactive Power BI dashboard providing deep dive analytics and visually appealing data visualizations for weather forecasting.",
      icon: <CloudRain className="text-emerald-400 mb-4" size={32} />,
      tech: ["Power BI", "Data Analytics", "Data Visualization"],
      features: [
        "Interactive filtering",
        "Historical trend analysis",
        "Predictive visualization layouts"
      ],
      github: "https://github.com/deepnarayan/weather-dashboard",
      demo: "#",
      gradient: "from-emerald-500/20 to-teal-500/20",
      borderHover: "hover:border-emerald-500/50"
    },
    {
      title: "Foodz Menu Website",
      description: "A modern, highly responsive restaurant menu website showcasing a clean UI design and interactive dish filtering.",
      icon: <Utensils className="text-orange-400 mb-4" size={32} />,
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: [
        "Interactive cuisine filtering",
        "Modern UI/UX principles",
        "Mobile-first approach"
      ],
      github: "https://github.com/deepnarayan/foodz-menu",
      demo: "#",
      gradient: "from-orange-500/20 to-red-500/20",
      borderHover: "hover:border-orange-500/50"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 px-6 md:px-12 relative">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work focusing on Machine Learning, Full-Stack Development, and Data Analytics.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={`glass-card rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 ${project.borderHover} hover:-translate-y-2`}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${project.gradient} rounded-full blur-3xl -mr-20 -mt-20 z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                {project.icon}
                
                <h3 className="text-2xl font-bold font-heading text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="mb-6 space-y-2">
                  <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">Features:</span>
                  <ul className="text-sm text-gray-400 list-disc list-inside">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-3 py-1 text-xs font-medium text-white/90 bg-white/10 rounded-full border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                  {/*
                  <a 
                    href={project.demo} 
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-blue-400 transition-colors ml-auto"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
