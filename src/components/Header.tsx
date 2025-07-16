
import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-blue-400/20' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* AI-themed Logo */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Cpu className="w-8 h-8 text-blue-400 animate-neural-pulse" />
              <div className="absolute inset-0 w-8 h-8 border border-blue-400/30 rounded animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold text-gradient-ai font-mono">
              HW.exe
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group text-foreground hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2 border-cyan-400/50 text-cyan-200 hover:bg-cyan-600/20 font-mono"
            >
              <Download size={16} />
              Download_CV.zip
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg border border-blue-400/30 hover:bg-blue-600/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-blue-400/20 animate-fade-in bg-card/50 backdrop-blur-md rounded-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-blue-400 transition-colors duration-200 font-medium px-4 py-2 rounded hover:bg-blue-600/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2 w-fit mx-4 border-cyan-400/50 text-cyan-200 hover:bg-cyan-600/20 font-mono"
              >
                <Download size={16} />
                Download_CV.zip
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
