import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Download my resume to learn more about my experience, skills, and achievements.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 sm:p-8 md:p-12">
            <div className="text-center space-y-8">
              <div className="flex justify-center">
                <div className="w-24 h-32 bg-gradient-to-b from-white/20 to-white/10 rounded-lg border border-white/20 flex items-center justify-center">
                  <div className="space-y-2">
                    <div className="w-16 h-1 bg-white/30 rounded mx-auto"></div>
                    <div className="w-12 h-1 bg-white/30 rounded mx-auto"></div>
                    <div className="w-14 h-1 bg-white/30 rounded mx-auto"></div>
                    <div className="w-10 h-1 bg-white/30 rounded mx-auto"></div>
                    <div className="w-16 h-1 bg-white/30 rounded mx-auto"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white">TAREESH PASARLA</h3>
                <p className="text-xl text-gray-300">Python Full Stack Developer</p>
                <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Comprehensive overview of my technical skills, internship experience, education, and projects. Perfect for recruiters and collaborators to understand my capabilities and career journey.
                </p>
              </div>

              {/* Responsive Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">6+</span>
                  </div>
                  <p className="text-white font-semibold">Months Internship</p>
                  <p className="text-gray-400 text-sm">Full Stack Development</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">4+</span>
                  </div>
                  <p className="text-white font-semibold">Projects Completed</p>
                  <p className="text-gray-400 text-sm">Web Applications</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl">8+</span>
                  </div>
                  <p className="text-white font-semibold">Technologies</p>
                  <p className="text-gray-400 text-sm">In Front-End & Back-End</p>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="/tareesh_resume.pdf"
                  download="Tareesh_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 sm:px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    📄 Download Resume
                  </Button>
                </a>
                <p className="text-gray-400 text-sm mt-4">
                  PDF format • Last updated: June 2025
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;
