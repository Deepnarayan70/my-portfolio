import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-gray-200 selection:bg-primary/30 selection:text-white">
      {/* Background ambient blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 bg-background pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] mix-blend-screen opacity-50 animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[120px] mix-blend-screen opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-blue-500/10 blur-[100px] mix-blend-screen opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Deep Narayan. All rights reserved.</p>
        <p className="mt-2 text-xs opacity-50">Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
