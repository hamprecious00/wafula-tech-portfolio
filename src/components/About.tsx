
import React from 'react';
import { GraduationCap, MapPin, Briefcase, Award, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/50 circuit-pattern">
      <div className="container mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <Brain className="w-16 h-16 text-blue-400/30 animate-neural-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            About <span className="text-gradient-ai">Me.profile</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <span className="text-cyan-400 font-mono">[USER_PROFILE]</span> Passionate technology professional with expertise in software development, 
            cybersecurity, and ICT consulting
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none holographic p-6 rounded-xl border border-blue-400/20 bg-card/50 backdrop-blur-sm">
              <p className="text-muted-foreground leading-relaxed">
                I'm a dedicated ICT Consultant and Software Developer based in Kenya, with a strong passion 
                for creating innovative technology solutions. My journey in tech began with a Bachelor's 
                degree in Information Technology from Umma University, and has evolved through hands-on 
                experience in various domains including cybersecurity, full-stack development, and enterprise consulting.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Currently serving as an ICT Consultant at ADC Corporation in Kisumu, I help organizations 
                leverage technology to achieve their business objectives. My expertise spans across multiple 
                programming languages, frameworks, and security tools, allowing me to deliver comprehensive 
                solutions tailored to each client's unique needs.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-600/10 border border-blue-400/30 rounded-lg animate-neural-pulse">
                <div className="text-2xl font-bold text-blue-400 font-mono">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-green-600/10 border border-green-400/30 rounded-lg animate-neural-pulse" style={{ animationDelay: '1s' }}>
                <div className="text-2xl font-bold text-green-400 font-mono">20+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <Card className="card-hover-ai holographic border border-blue-400/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-600/10 border border-blue-400/30 rounded-lg animate-neural-pulse">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 font-mono">Education</h3>
                    <p className="text-muted-foreground">Bachelor of Science in Information Technology</p>
                    <p className="text-sm text-muted-foreground">Umma University</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover-ai holographic border border-green-400/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-600/10 border border-green-400/30 rounded-lg animate-neural-pulse">
                    <Briefcase className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 font-mono">Current Role</h3>
                    <p className="text-muted-foreground">ICT Consultant</p>
                    <p className="text-sm text-muted-foreground">ADC Corporation, Kisumu</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover-ai holographic border border-cyan-400/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyan-600/10 border border-cyan-400/30 rounded-lg animate-neural-pulse">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 font-mono">Location</h3>
                    <p className="text-muted-foreground">Kisumu, Kenya</p>
                    <p className="text-sm text-muted-foreground">Available for remote work</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover-ai holographic border border-purple-400/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-600/10 border border-purple-400/30 rounded-lg animate-neural-pulse">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 font-mono">Specializations</h3>
                    <p className="text-muted-foreground">Full-Stack Development, Cybersecurity, ICT Consulting</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
