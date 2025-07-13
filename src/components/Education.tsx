import React from 'react';
import { Card } from '@/components/ui/card';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Electronic & Communication Engineering (ECE)",
      institution: "At JNTU Gurajada Vizianagaram",
      year: "2021 - 2025",
      description: "Developed a solid foundation in core electronics and communication concepts, while independently building strong skills in Web development.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      degree: "Full Stack Development (Internship)",
      field: "ReactJS & Python, Django",
      institution: "WebTech software solutions",
      year: "2025",
      description: "Specialized certification in Python Django backend and ReactJS, HTML, CSS, JavaScript frontend development and SQL database.",
      color: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-slate-700 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">Education & Internship</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 sm:p-8 hover:bg-white/15 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${edu.color} flex items-center justify-center flex-shrink-0 mb-4 sm:mb-0`}>
                    <span className="text-white font-bold text-lg">🎓</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-1">{edu.degree}</h3>
                    <h4 className="text-gray-300 font-semibold mb-2">{edu.field}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <span className="text-gray-400 font-medium">{edu.institution}</span>
                      <span className={`px-3 py-1 bg-gradient-to-r ${edu.color} text-white text-sm font-semibold rounded-full`}>
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
