import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 flex justify-center">
            <div className="w-64 h-64 max-w-[300px] max-h-[300px] rounded-2xl bg-gradient-to-r from-blue-400 to-purple-600 p-1">
              <div className="w-full h-full rounded-2xl bg-slate-800 overflow-hidden">
                <img
                  src="tar.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover object-top scale-105 rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 sm:p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Hi, I’m Tareesh — an ECE graduate (2025) with a strong passion for full-stack web development and building user-friendly applications.
                I enjoy working with modern technologies like React JS, JavaScript, Python (Django), SQL, HTML, CSS, and Bootstrap.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                During my internships, I got practical experience in front-end and full stack development. 
                I worked with teams, met deadlines, and learned how software is built in real-world web apps.
                I've worked on real-world projects like an e-commerce website and a weather app, using skills like UI/UX design, API integration, and full-stack development.
                I enjoy solving problems with code and always try to learn new tools and technologies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm dedicated, focused, and self-motivated, and I always strive to complete my tasks on time.<br />
                In my free time, I enjoy listening to music, which helps me relax and stay motivated.<br />
                That’s all about me...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
