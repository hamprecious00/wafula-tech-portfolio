
import React from 'react';
import { Trophy, Star, Users, Target, Briefcase, Code2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const achievements = [
    {
      title: "ICT Consultant - ADC Corporation",
      category: "Professional Role",
      date: "2022 - Present",
      description: "Leading ICT consulting projects, implementing digital transformation solutions, and providing technical guidance to enterprise clients in Kisumu region.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "portfolio-blue"
    },
    {
      title: "Huawei Hackathon Participant",
      category: "Competition",
      date: "2023",
      description: "Successfully participated in Huawei's annual hackathon, developing innovative cloud-based solutions and collaborating with international teams.",
      icon: <Code2 className="w-6 h-6" />,
      color: "portfolio-green"
    },
    {
      title: "Full-Stack Developer - Multiple Projects",
      category: "Technical Achievement",
      date: "2020 - Present",
      description: "Successfully delivered 20+ full-stack applications including education management systems, mobile apps, and enterprise solutions.",
      icon: <Target className="w-6 h-6" />,
      color: "portfolio-blue"
    },
    {
      title: "Cybersecurity Specialist",
      category: "Specialization",
      date: "2021 - Present",
      description: "Specialized in cybersecurity consulting, penetration testing, and security audits for small to medium enterprises.",
      icon: <Star className="w-6 h-6" />,
      color: "portfolio-green"
    },
    {
      title: "Technical Mentor & Community Leader",
      category: "Community Impact",
      date: "2020 - Present",
      description: "Mentoring junior developers, conducting workshops, and contributing to the local tech community in Kisumu.",
      icon: <Users className="w-6 h-6" />,
      color: "portfolio-blue"
    },
    {
      title: "Innovation in EdTech Solutions",
      category: "Innovation",
      date: "2022",
      description: "Developed innovative educational technology solutions that improved learning outcomes for over 1,000 students.",
      icon: <Trophy className="w-6 h-6" />,
      color: "portfolio-green"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "20+", icon: Target },
    { label: "Clients Served", value: "15+", icon: Users },
    { label: "Years Experience", value: "5+", icon: Briefcase },
    { label: "Technologies Mastered", value: "25+", icon: Code2 }
  ];

  return (
    <section id="achievements" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-gradient">Awards</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition and milestones in my professional journey
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center card-hover">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-portfolio-blue/10 rounded-full">
                    <stat.icon className="w-6 h-6 text-portfolio-blue" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 bg-${achievement.color}/10 rounded-lg`}>
                      {React.cloneElement(achievement.icon, {
                        className: `w-6 h-6 text-${achievement.color}`
                      })}
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {achievement.category}
                      </Badge>
                      <div className="text-sm text-muted-foreground">{achievement.date}</div>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recognition Section */}
        <div className="mt-16 bg-background rounded-xl p-8 border">
          <div className="text-center">
            <Trophy className="w-12 h-12 text-portfolio-blue mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Professional <span className="text-gradient">Recognition</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Acknowledged for technical excellence, innovation, and leadership in the ICT sector. 
              Committed to continuous learning and contributing to the advancement of technology in Kenya.
            </p>
            
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-portfolio-green" />
                <span>Technical Excellence</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="w-4 h-4 text-portfolio-blue" />
                <span>Innovation Leader</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-portfolio-green" />
                <span>Community Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
