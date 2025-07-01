import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
const Hero = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const techStack = ['ReactJS', 'Django', 'Python', 'MySQL', 'Bootstrap', 'JavaScript'];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech(prev => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => <div key={i} className="absolute animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 2}s`
      }}>
            <div className="w-1 h-1 bg-blue-400 rounded-full opacity-70"></div>
          </div>)}
      </div>

      {/* Glass morphism container */}
      <div className="relative z-10 text-center p-8 rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl max-w-4xl mx-4">
        {/* Profile image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">T</span>
              </div>
            </div>
            
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">TAREESH PASARLA</span> 👋
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Python Full Stack Developer
            </p>
          </div>

          {/* Animated tech stack */}
          <div className="flex justify-center items-center space-x-2 h-12">
            <span className="text-gray-400">Specialized in:</span>
            <div className="relative overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{
              transform: `translateX(-${currentTech * 100}%)`
            }}>
                {techStack.map((tech, index) => <span key={index} className="min-w-max px-4 py-2 text-lg font-semibold text-blue-400 bg-blue-400/20 rounded-full backdrop-blur-sm">
                    {tech}
                  </span>)}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl" onClick={() => window.open('/resume.pdf', '_blank')}>
              Download Resume
            </Button>
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm" onClick={scrollToContact}>
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>;
};
export default Hero;