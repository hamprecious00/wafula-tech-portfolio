
import React from 'react';
import { Code, Database, Shield, Cloud, Smartphone, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "TypeScript", "Dart", "Java", "C#", "SQL"],
      color: "portfolio-blue"
    },
    {
      title: "Frontend Frameworks",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["React", "Flutter", "Next.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
      color: "portfolio-green"
    },
    {
      title: "Backend Technologies",
      icon: <Database className="w-6 h-6" />,
      skills: ["Django", "Node.js", "Express.js", "FastAPI", "REST APIs", "GraphQL"],
      color: "portfolio-blue"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "MySQL", "Firebase", "MongoDB", "SQL Server", "SQLite"],
      color: "portfolio-green"
    },
    {
      title: "Cybersecurity Tools",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Kali Linux", "Wireshark", "Metasploit", "Burp Suite", "Nmap", "OWASP"],
      color: "portfolio-blue"
    },
    {
      title: "Development Tools",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Visual Studio Code", "Git", "Docker", "Postman", "Figma", "Android Studio"],
      color: "portfolio-green"
    }
  ];

  const aiTools = [
    "OpenAI API", "ChatGPT", "GitHub Copilot", "Cursor AI", "Claude", "Gemini"
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across multiple technologies and domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 bg-${category.color}/10 rounded-lg`}>
                    {React.cloneElement(category.icon, {
                      className: `w-6 h-6 text-${category.color}`
                    })}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Tools Section */}
        <div className="bg-background rounded-xl p-8 border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              AI Tools & <span className="text-gradient">Platforms</span>
            </h3>
            <p className="text-muted-foreground">
              Leveraging cutting-edge AI technologies for enhanced productivity
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {aiTools.map((tool, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="text-sm py-2 px-4 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Proficiency Indicators */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">Proficiency Levels</h3>
          <div className="flex justify-center space-x-8 flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-portfolio-green rounded-full"></div>
              <span className="text-sm text-muted-foreground">Expert</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-portfolio-blue rounded-full"></div>
              <span className="text-sm text-muted-foreground">Advanced</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-portfolio-gray rounded-full"></div>
              <span className="text-sm text-muted-foreground">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
