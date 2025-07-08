
import React from 'react';
import { Award, Download, ExternalLink, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Certifications = () => {
  const certifications = [
    {
      title: "IBM Professional Skills Certification",
      issuer: "IBM",
      date: "2023",
      status: "Completed",
      description: "Comprehensive training in professional skills including project management, communication, and leadership in technology environments.",
      logo: "🏢",
      verificationId: "IBM-PS-2023-HW001"
    },
    {
      title: "Cisco NetAcad Network Fundamentals",
      issuer: "Cisco Networking Academy",
      date: "2023",
      status: "In Progress",
      description: "Advanced networking concepts, routing protocols, network security, and infrastructure management.",
      logo: "🌐",
      verificationId: "CISCO-NF-2023-HW002"
    },
    {
      title: "Huawei Hackathon Participant",
      issuer: "Huawei Technologies",
      date: "2023",
      status: "Completed",
      description: "Participated in Huawei's annual hackathon, developing innovative solutions using cloud technologies and AI.",
      logo: "🚀",
      verificationId: "HUAWEI-HACK-2023-HW003"
    }
  ];

  const additionalCertifications = [
    "Cybersecurity Fundamentals",
    "Full Stack Web Development",
    "Mobile App Development with Flutter",
    "Cloud Computing Essentials",
    "Database Design & Management",
    "Agile Project Management"
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-gradient">Credentials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </div>

        {/* Main Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{cert.logo}</div>
                  <Badge 
                    variant={cert.status === "Completed" ? "default" : "secondary"}
                    className={cert.status === "Completed" ? "bg-portfolio-green" : ""}
                  >
                    {cert.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium">{cert.issuer}</p>
                  <p>{cert.date}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Verification ID:</p>
                  <p className="text-xs font-mono">{cert.verificationId}</p>
                </div>
                
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex items-center gap-2 flex-1">
                    <Download size={14} />
                    Download
                  </Button>
                  {cert.status === "Completed" && (
                    <Button size="sm" className="flex items-center gap-2">
                      <ExternalLink size={14} />
                      Verify
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Certifications */}
        <div className="bg-background rounded-xl p-8 border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
              <Award className="w-6 h-6 text-portfolio-blue" />
              Additional <span className="text-gradient">Certifications</span>
            </h3>
            <p className="text-muted-foreground">
              Ongoing professional development and specialized training
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalCertifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <CheckCircle className="w-5 h-5 text-portfolio-green flex-shrink-0" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-portfolio-blue/10 rounded-lg">
            <div className="text-3xl font-bold text-portfolio-blue">3</div>
            <div className="text-sm text-muted-foreground">Major Certifications</div>
          </div>
          <div className="text-center p-6 bg-portfolio-green/10 rounded-lg">
            <div className="text-3xl font-bold text-portfolio-green">9</div>
            <div className="text-sm text-muted-foreground">Total Credentials</div>
          </div>
          <div className="text-center p-6 bg-portfolio-blue/10 rounded-lg">
            <div className="text-3xl font-bold text-portfolio-blue">2023</div>
            <div className="text-sm text-muted-foreground">Latest Year</div>
          </div>
          <div className="text-center p-6 bg-portfolio-green/10 rounded-lg">
            <div className="text-3xl font-bold text-portfolio-green">100%</div>
            <div className="text-sm text-muted-foreground">Verified</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
