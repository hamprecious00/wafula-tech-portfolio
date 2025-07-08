
import React from 'react';
import { ExternalLink, Github, Database, Smartphone, Shield, Brain, Wifi, GraduationCap, Video, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Elimu Track",
      description: "Comprehensive student gradebook system designed using Waterfall methodology with UML diagrams and robust database design. Features include grade tracking, attendance monitoring, and reporting capabilities.",
      tech: ["React", "Node.js", "MySQL", "UML Design"],
      icon: <GraduationCap className="w-6 h-6" />,
      category: "Education"
    },
    {
      title: "Madrassa App",
      description: "Complete school management system with parent login portal, admin panel for staff management, digital notes system, and interactive timetable management.",
      tech: ["Flutter", "Firebase", "Dart", "Admin Panel"],
      icon: <Smartphone className="w-6 h-6" />,
      category: "Mobile"
    },
    {
      title: "WiFi Billing System Kenya",
      description: "Automated billing and management system for WiFi hotspots across Kenya. Includes user authentication, data usage tracking, and payment integration.",
      tech: ["Django", "Python", "PostgreSQL", "API Integration"],
      icon: <Wifi className="w-6 h-6" />,
      category: "Web Application"
    },
    {
      title: "IntelliDoc",
      description: "AI-powered codebase documentation generator that automatically analyzes code structure and generates comprehensive documentation using machine learning algorithms.",
      tech: ["Python", "OpenAI API", "NLP", "Machine Learning"],
      icon: <Brain className="w-6 h-6" />,
      category: "AI/ML"
    },
    {
      title: "M-Pesa Payment Integration",
      description: "Flutter application with seamless M-Pesa payment integration for mobile money transactions, including payment validation and receipt generation.",
      tech: ["Flutter", "Dart", "M-Pesa API", "Firebase"],
      icon: <CreditCard className="w-6 h-6" />,
      category: "Mobile"
    },
    {
      title: "Telemedicine Platform",
      description: "Comprehensive telehealth solution enabling remote consultations, appointment scheduling, and patient management with secure video calling features.",
      tech: ["Django", "React", "WebRTC", "PostgreSQL"],
      icon: <Video className="w-6 h-6" />,
      category: "Healthcare"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions I've built across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-portfolio-blue/10 rounded-lg group-hover:bg-portfolio-blue/20 transition-colors">
                      {React.cloneElement(project.icon, {
                        className: "w-6 h-6 text-portfolio-blue"
                      })}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <Button size="sm" variant="outline" className="flex items-center gap-2">
                    <Github size={16} />
                    Code
                  </Button>
                  <Button size="sm" className="flex items-center gap-2">
                    <ExternalLink size={16} />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="flex items-center gap-2 mx-auto">
            <Github size={20} />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
