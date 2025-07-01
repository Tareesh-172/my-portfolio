
import React from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Bootstrap'], color: 'from-blue-500 to-cyan-500' },
    { category: 'Backend', items: ['Python', 'Django', 'MySQL'], color: 'from-purple-500 to-pink-500' },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code'], color: 'from-green-500 to-teal-500' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile section */}
          <div className="space-y-6">
            <div className="relative">
              <div className="w-64 h-64 mx-auto rounded-2xl bg-gradient-to-r from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-slate-800 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">TP</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">💻</span>
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="space-y-8">
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate Python Full Stack Developer with expertise in building scalable web applications. 
                My journey began with a fascination for problem-solving through code, which led me to master both 
                frontend and backend technologies. I specialize in creating seamless user experiences with modern 
                frameworks like ReactJS while building robust backend systems with Django and MySQL.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My goal is to leverage technology to create innovative solutions that make a real impact. 
                I'm always eager to learn new technologies and collaborate on exciting projects that push 
                the boundaries of what's possible.
              </p>
            </div>

            {/* Skills grid */}
            <div className="grid gap-4">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skillGroup.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">{skillGroup.category[0]}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm">
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
        </div>
      </div>
    </section>
  );
};

export default About;
