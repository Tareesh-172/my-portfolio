import React from 'react';
const About = () => {
  return <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
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
          </div>
        </div>
      </div>
    </section>;
};
export default About;