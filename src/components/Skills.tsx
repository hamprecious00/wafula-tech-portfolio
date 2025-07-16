
import React from 'react';
import { Code, Database, Shield, Cloud, Smartphone, Cpu, Brain, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Neural Networks & AI",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "TypeScript", "Dart", "Java", "C#", "SQL"],
      color: "blue-400",
      bgColor: "blue-600/10"
    },
    {
      title: "Frontend Interfaces",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["React", "Flutter", "Next.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
      color: "purple-400",
      bgColor: "purple-600/10"
    },
    {
      title: "Backend Systems",
      icon: <Database className="w-6 h-6" />,
      skills: ["Django", "Node.js", "Express.js", "FastAPI", "REST APIs", "GraphQL"],
      color: "cyan-400",
      bgColor: "cyan-600/10"
    },
    {
      title: "Data Storage",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "MySQL", "Firebase", "MongoDB", "SQL Server", "SQLite"],
      color: "green-400",
      bgColor: "green-600/10"
    },
    {
      title: "Security Protocols",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Kali Linux", "Wireshark", "Metasploit", "Burp Suite", "Nmap", "OWASP"],
      color: "red-400",
      bgColor: "red-600/10"
    },
    {
      title: "Development Tools",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Visual Studio Code", "Git", "Docker", "Postman", "Figma", "Android Studio"],
      color: "yellow-400",
      bgColor: "yellow-600/10"
    }
  ];

  const aiTools = [
    "OpenAI API", "ChatGPT", "GitHub Copilot", "Cursor AI", "Claude", "Gemini"
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30 circuit-pattern">
      <div className="container mx-auto">
        {/* AI-themed Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <Zap className="w-16 h-16 text-blue-400/30 animate-neural-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-gradient-ai">Technical_Skills.exe</span>
          </h2>
          <div className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <span className="text-cyan-400 font-mono">[SYSTEM_ANALYSIS]</span> Comprehensive expertise across multiple technologies and domains
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover-ai holographic border border-blue-400/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 bg-${category.bgColor} border border-${category.color}/30 rounded-lg animate-neural-pulse`}>
                    {React.cloneElement(category.icon, {
                      className: `w-6 h-6 text-${category.color}`
                    })}
                  </div>
                  <CardTitle className="text-lg font-mono">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default bg-muted/50 border border-blue-400/20 font-mono text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Tools Section with Neural Styling */}
        <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/20 holographic">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Brain className="w-8 h-8 text-purple-400 animate-neural-pulse" />
              <h3 className="text-2xl font-bold font-mono">
                AI_Tools & <span className="text-gradient-ai">Neural_Networks</span>
              </h3>
            </div>
            <p className="text-muted-foreground">
              <span className="text-purple-400 font-mono">[AI_INTEGRATION]</span> Leveraging cutting-edge AI technologies for enhanced productivity
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {aiTools.map((tool, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="text-sm py-2 px-4 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default border-cyan-400/30 bg-cyan-600/10 text-cyan-200 font-mono"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Proficiency Indicators with AI Styling */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6 font-mono">
            <span className="text-gradient-ai">System_Proficiency_Levels</span>
          </h3>
          <div className="flex justify-center space-x-8 flex-wrap gap-4">
            <div className="flex items-center space-x-2 px-4 py-2 bg-green-600/10 border border-green-400/30 rounded-full">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground font-mono">Expert_Level</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-blue-600/10 border border-blue-400/30 rounded-full">
              <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground font-mono">Advanced_Level</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-yellow-600/10 border border-yellow-400/30 rounded-full">
              <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground font-mono">Intermediate_Level</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
