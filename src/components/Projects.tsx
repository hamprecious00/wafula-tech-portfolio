
import React from 'react';
import { ExternalLink, Github, Database, Smartphone, Shield, Brain, Wifi, GraduationCap, Video, CreditCard, Terminal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Elimu_Track.exe",
      description: "Neural-enhanced student gradebook system with adaptive learning analytics. Built using quantum-inspired algorithms and advanced UML design patterns for optimal performance.",
      tech: ["React", "Node.js", "MySQL", "AI_Analytics"],
      icon: <GraduationCap className="w-6 h-6" />,
      category: "Education_AI",
      color: "blue-400",
      bgColor: "blue-600/10"
    },
    {
      title: "Madrassa_App.neural",
      description: "Intelligent school management ecosystem with AI-powered parent-admin interface, automated attendance tracking, and dynamic timetable optimization.",
      tech: ["Flutter", "Firebase", "Dart", "ML_Engine"],
      icon: <Smartphone className="w-6 h-6" />,
      category: "Mobile_AI",
      color: "purple-400",
      bgColor: "purple-600/10"
    },
    {
      title: "WiFi_Nexus_Kenya",
      description: "Distributed billing architecture for nationwide WiFi infrastructure. Features real-time analytics, predictive usage modeling, and automated payment processing.",
      tech: ["Django", "Python", "PostgreSQL", "IoT_Integration"],
      icon: <Wifi className="w-6 h-6" />,
      category: "IoT_Network",
      color: "cyan-400",
      bgColor: "cyan-600/10"
    },
    {
      title: "IntelliDoc.ai",
      description: "Advanced codebase documentation generator powered by transformer models. Automatically analyzes code patterns and generates comprehensive technical documentation.",
      tech: ["Python", "OpenAI_API", "NLP", "Deep_Learning"],
      icon: <Brain className="w-6 h-6" />,
      category: "AI_Engine",
      color: "green-400",
      bgColor: "green-600/10"
    },
    {
      title: "M-Pesa_Quantum",
      description: "Next-generation mobile payment interface with quantum-encrypted transactions, biometric authentication, and real-time fraud detection algorithms.",
      tech: ["Flutter", "Dart", "M-Pesa_API", "Quantum_Security"],
      icon: <CreditCard className="w-6 h-6" />,
      category: "FinTech_AI",
      color: "yellow-400",
      bgColor: "yellow-600/10"
    },
    {
      title: "TeleMed_Matrix",
      description: "Immersive telehealth platform with AR consultation rooms, AI-assisted diagnostics, and predictive health monitoring for remote patient care.",
      tech: ["Django", "React", "WebRTC", "AR_Engine"],
      icon: <Video className="w-6 h-6" />,
      category: "HealthTech_AI",
      color: "red-400",
      bgColor: "red-600/10"
    }
  ];

  return (
    <section id="projects" className="section-padding neural-grid">
      <div className="container mx-auto">
        {/* AI-themed Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <Terminal className="w-16 h-16 text-purple-400/30 animate-neural-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            Featured <span className="text-gradient-ai">Projects.repository</span>
          </h2>
          <div className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <span className="text-purple-400 font-mono">[PROJECT_SHOWCASE]</span> A portfolio of innovative AI-enhanced solutions across multiple domains
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover-ai group holographic border border-blue-400/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 bg-${project.bgColor} border border-${project.color}/30 rounded-lg group-hover:animate-neural-pulse transition-all duration-300`}>
                      {React.cloneElement(project.icon, {
                        className: `w-6 h-6 text-${project.color}`
                      })}
                    </div>
                    <Badge variant="secondary" className={`text-xs font-mono bg-${project.bgColor} border border-${project.color}/30 text-${project.color}`}>
                      {project.category}
                    </Badge>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <CardTitle className="text-xl mb-2 font-mono group-hover:text-gradient-ai transition-all duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs font-mono border-cyan-400/30 bg-cyan-600/5 text-cyan-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <Button size="sm" variant="outline" className="flex items-center gap-2 font-mono border-blue-400/30 text-blue-300 hover:bg-blue-600/20">
                    <Github size={16} />
                    Source_Code
                  </Button>
                  <Button size="sm" className="flex items-center gap-2 font-mono bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    <ExternalLink size={16} />
                    Live_Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="flex items-center gap-2 mx-auto font-mono border-cyan-400/30 text-cyan-300 hover:bg-cyan-600/20 animate-glow-pulse">
            <Github size={20} />
            Access_Full_Repository
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
