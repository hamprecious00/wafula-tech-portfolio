
import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue/5 via-background to-portfolio-green/5"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Greeting */}
          <p className="text-lg text-muted-foreground mb-4 animate-slide-in-left">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-scale-in">
            <span className="text-gradient">Hamphrey Wafula</span>
          </h1>
          
          {/* Professional Title */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="mb-2">ICT Consultant | Software Developer</p>
            <p>Cybersecurity Enthusiast</p>
          </div>
          
          {/* Brief Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Passionate about creating innovative solutions through code. Specializing in full-stack development, 
            cybersecurity, and technology consulting with a focus on delivering exceptional results.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="flex items-center gap-2 bg-portfolio-blue hover:bg-portfolio-blue-dark">
              <MessageCircle size={20} />
              Hire Me
              <ArrowRight size={16} />
            </Button>
            <Button size="lg" variant="outline" className="flex items-center gap-2">
              <Mail size={20} />
              Let's Connect
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://github.com/hamphreytech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-portfolio-blue hover:text-white transition-all duration-300 card-hover"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/hamphreytech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-portfolio-blue hover:text-white transition-all duration-300 card-hover"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:hamphrey.wafula@example.com"
              className="p-3 rounded-full bg-muted hover:bg-portfolio-green hover:text-white transition-all duration-300 card-hover"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-portfolio-blue/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-portfolio-green/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
