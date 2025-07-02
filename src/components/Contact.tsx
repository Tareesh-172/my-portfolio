import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon."
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <section id="contact" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to bring your ideas? Let's discuss your next project or collaboration opportunity.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact form */}
            <Card className="backdrop-blur-lg bg-white/10 border border-white/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or just say hello!" rows={6} className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400 resize-none" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>

            {/* Contact info and social links */}
            <div className="space-y-8">
              <Card className="backdrop-blur-lg bg-white/10 border border-white/20 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">📧</span>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <p className="text-white font-semibold">tareeshpasarla430@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">📱</span>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Phone</p>
                      <p className="text-white font-semibold">+91  - 7569906172</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">📍</span>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Location</p>
                      <p className="text-white font-semibold">Bangalore</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social media links */}
              <Card className="backdrop-blur-lg bg-white/10 border border-white/20 p-8">
                <h3 className="text-xl font-bold text-white mb-6">Connect with me</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="lg" className="flex-1 border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105" onClick={() => window.open('https://github.com/Tareesh-172', '_blank')}>
                    <Github className="w-5 h-5 mr-2" />
                    GitHub 
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 border-white/20 text-white hover:bg-blue-600 transition-all duration-300 hover:scale-105" onClick={() => window.open('https://www.linkedin.com/in/pasarla-tareesh/', '_blank')}>
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <Button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50" size="lg">
        <ArrowUp className="w-5 h-5" />
      </Button>
    </section>;
};
export default Contact;