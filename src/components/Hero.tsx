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
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="w-1 h-1 bg-blue-400 rounded-full opacity-70"></div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl max-w-xl sm:max-w-4xl mx-4">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              TAREESH PASARLA
            </span>{' '}
            👋
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light">
            Python Full Stack Developer
          </p>

          {/* Animated tech stack */}
          <div className="flex justify-center items-center space-x-2 h-12">
            <span className="text-gray-400 text-sm sm:text-base">Specialized in:</span>
            <div className="relative overflow-hidden w-32 sm:w-40">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTech * 100}%)` }}
              >
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="min-w-max px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold text-blue-400 bg-blue-400/20 rounded-full backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="/tareesh_resume.pdf"
              download="Tareesh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                📄 Download Resume
              </Button>
            </a>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
              onClick={scrollToContact}
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
