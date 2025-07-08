
import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-2">Hamphrey Wafula</h3>
            <p className="text-muted-foreground">
              ICT Consultant | Software Developer | Cybersecurity Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-right">
            <Button variant="outline" size="sm" onClick={scrollToTop} className="mb-4">
              <ArrowUp size={16} className="mr-2" />
              Back to Top
            </Button>
            <p className="text-sm text-muted-foreground">
              Available for new projects
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p className="flex items-center gap-1">
              © {currentYear} Hamphrey Wafula. Built with <Heart size={14} className="text-red-500" /> and React
            </p>
            <p className="mt-2 md:mt-0">
              Kisumu, Kenya | Remote Work Available
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
