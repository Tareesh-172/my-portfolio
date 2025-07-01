
import React from 'react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skills = [
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Bootstrap'], color: 'from-blue-500 to-cyan-500' },
    { category: 'Backend', items: ['Python', 'Django', 'MySQL'], color: 'from-purple-500 to-pink-500' },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code'], color: 'from-green-500 to-teal-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-800 to-slate-700 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full"></div>
        </div>

        {/* Skills grid */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center space-x-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skillGroup.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-2xl">{skillGroup.category[0]}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-xl mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-600/50 transition-colors">
                        {skill}
                      </span>
                    ))}
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

export default Skills;
