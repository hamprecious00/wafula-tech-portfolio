
import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, MessageCircle, Brain, Cpu, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden neural-grid">
      {/* AI-themed Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-cyan-600/10"></div>
      
      {/* Neural Network Visualization */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-400/30 rounded-full animate-neural-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-purple-400/30 rounded-full animate-neural-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 border border-cyan-400/30 rounded-full animate-neural-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Connection Lines */}
        <div className="absolute top-1/4 left-1/4 w-48 h-0.5 bg-gradient-to-r from-blue-400/30 to-purple-400/30 origin-left rotate-12 animate-data-flow"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-0.5 bg-gradient-to-r from-purple-400/30 to-cyan-400/30 origin-left -rotate-45 animate-data-flow" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Floating AI Elements */}
      <div className="absolute top-20 left-10 animate-neural-pulse">
        <Brain className="w-8 h-8 text-blue-400/60" />
      </div>
      <div className="absolute top-32 right-16 animate-neural-pulse" style={{ animationDelay: '1s' }}>
        <Cpu className="w-6 h-6 text-purple-400/60" />
      </div>
      <div className="absolute bottom-32 left-16 animate-neural-pulse" style={{ animationDelay: '2s' }}>
        <Zap className="w-7 h-7 text-cyan-400/60" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* AI Greeting */}
          <div className="flex items-center justify-center gap-2 mb-4 animate-slide-in-left">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <p className="text-lg text-muted-foreground font-mono">
              System.Initialize("Hamphrey_Wafula")
            </p>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          {/* Name with AI Glow Effect */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-scale-in">
            <span className="text-gradient-ai animate-glow-pulse">Hamphrey Wafula</span>
          </h1>
          
          {/* Professional Title with Tech Aesthetics */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 font-mono text-sm">
                ICT_Consultant
              </span>
              <span className="px-3 py-1 bg-purple-600/20 border border-purple-400/30 rounded-full text-purple-200 font-mono text-sm">
                Software_Developer
              </span>
              <span className="px-3 py-1 bg-cyan-600/20 border border-cyan-400/30 rounded-full text-cyan-200 font-mono text-sm">
                Cybersecurity_Expert
              </span>
            </div>
          </div>
          
          {/* AI-enhanced Description */}
          <div className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up holographic p-6 rounded-xl border border-blue-400/20" style={{ animationDelay: '0.4s' }}>
            <p className="mb-4">
              <span className="text-blue-400 font-mono">[AI_ENHANCED]</span> Passionate about creating innovative solutions through code
            </p>
            <p>
              Specializing in full-stack development, cybersecurity, and technology consulting 
              with a focus on delivering <span className="text-cyan-400">exceptional results</span>
            </p>
          </div>
          
          {/* CTA Buttons with AI Styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border border-blue-400/30 animate-glow-pulse">
              <MessageCircle size={20} />
              Initialize_Connection
              <ArrowRight size={16} />
            </Button>
            <Button size="lg" variant="outline" className="flex items-center gap-2 border-cyan-400/50 text-cyan-200 hover:bg-cyan-600/20">
              <Mail size={20} />
              Sync_Networks
            </Button>
          </div>
          
          {/* Social Links with Neural Styling */}
          <div className="flex justify-center space-x-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://github.com/hamphreytech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/30 border border-blue-400/30 hover:bg-blue-600/20 hover:border-blue-400 transition-all duration-300 card-hover-ai group"
            >
              <Github size={24} className="group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/hamphreytech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted/30 border border-purple-400/30 hover:bg-purple-600/20 hover:border-purple-400 transition-all duration-300 card-hover-ai group"
            >
              <Linkedin size={24} className="group-hover:text-purple-400 transition-colors" />
            </a>
            <a
              href="mailto:hamphrey.wafula@example.com"
              className="p-3 rounded-full bg-muted/30 border border-cyan-400/30 hover:bg-cyan-600/20 hover:border-cyan-400 transition-all duration-300 card-hover-ai group"
            >
              <Mail size={24} className="group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated Particles */}
      <div className="floating-particle top-1/4 left-1/4" style={{ animationDelay: '0s' }}></div>
      <div className="floating-particle top-1/3 right-1/3" style={{ animationDelay: '2s' }}></div>
      <div className="floating-particle bottom-1/4 left-1/2" style={{ animationDelay: '4s' }}></div>
      <div className="floating-particle bottom-1/3 right-1/4" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
