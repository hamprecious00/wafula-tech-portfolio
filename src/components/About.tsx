
import React from 'react';
import { GraduationCap, MapPin, Briefcase, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate technology professional with expertise in software development, 
            cybersecurity, and ICT consulting
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
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
              <div className="text-center p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-portfolio-blue">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <div className="text-2xl font-bold text-portfolio-green">20+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-portfolio-blue/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-portfolio-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Education</h3>
                    <p className="text-muted-foreground">Bachelor of Science in Information Technology</p>
                    <p className="text-sm text-muted-foreground">Umma University</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-portfolio-green/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-portfolio-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Current Role</h3>
                    <p className="text-muted-foreground">ICT Consultant</p>
                    <p className="text-sm text-muted-foreground">ADC Corporation, Kisumu</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-portfolio-blue/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-portfolio-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-muted-foreground">Kisumu, Kenya</p>
                    <p className="text-sm text-muted-foreground">Available for remote work</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-portfolio-green/10 rounded-lg">
                    <Award className="w-6 h-6 text-portfolio-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Specializations</h3>
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
