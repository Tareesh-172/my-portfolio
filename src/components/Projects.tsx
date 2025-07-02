
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      description: "A responsive weather application that provides real-time weather updates for any location using live API data. Features include temperature, humidity, wind speed, and weather condition icons with a clean and user-friendly UI.",
      image: "weather.png",
      techStack: ["JavaScript", "CSS3","HTML", "Weather API"],
      liveDemo: "https://tareesh-172.github.io/Weather-app/",
      github: "https://github.com/Tareesh-172/Weather-app.git",
      emoji: "🌦️"
    },
    {
      title: "E-commerce Food Website",
      description: "full-stack project food delivery web app platform This project currently has a fully developed frontend, while key backend features such as payments and orders are still under development...",
      image: "food.png",
      techStack: ["Django", "Python", "MySQL", "Bootstrap"],
      liveDemo: "https://smart-app-tau.vercel.app/",

      github: "https://github.com/Tareesh-172/smart-app.git",
      emoji: "🍔"
    },
    {
      title: "Shopping Website",
      description: "full-stack shopping web app This project is currently under development, and key features like payment processing and order management are still being implemented...",
      image: "shopping.png",
      techStack: ["ReactJS", "Django", "MySQL", "Bootstrap"],
      liveDemo: "https://shopping-app-rho-six.vercel.app/",
      github: "https://github.com/Tareesh-172/Shopping-App.git",
      emoji: "🛍️"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Showcasing my best work in web development, from frontend interfaces to full-stack applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group backdrop-blur-lg bg-white/10 border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 text-3xl">{project.emoji}</div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300"
                    onClick={() => window.open(project.liveDemo, '_blank')}
                  >
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Want to see more?</h3>
            <p className="text-gray-300 mb-6">
              Check out my GitHub for more projects and contributions to the developer community.
            </p>
            <Button 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              onClick={() => window.open('https://github.com/Tareesh-172', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
