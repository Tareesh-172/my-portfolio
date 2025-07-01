
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <About />
      <Skills />
      <Education />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
};

export default Index;
