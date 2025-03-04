
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12',
      isScrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-subtle' : 'py-6'
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-guardian-blue to-guardian-teal flex items-center justify-center">
            <span className="font-display text-white text-lg font-bold">G</span>
          </div>
          <span className="font-display text-xl font-semibold text-guardian-gray">
            Guardian<span className="text-guardian-blue">-IO</span>
          </span>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-guardian-gray hover:text-guardian-blue transition-colors link-hover">
            Features
          </a>
          <a href="#dashboard" className="text-sm font-medium text-guardian-gray hover:text-guardian-blue transition-colors link-hover">
            Dashboard
          </a>
          <a href="#testimonials" className="text-sm font-medium text-guardian-gray hover:text-guardian-blue transition-colors link-hover">
            Testimonials
          </a>
          <Button size="sm" variant="outline" className="ml-2">
            Log In
          </Button>
          <Button size="sm" className="bg-guardian-blue hover:bg-guardian-blue/90">
            Get Started
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center justify-center h-10 w-10 text-guardian-gray"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md flex flex-col items-center py-4">
          <a 
            href="#features" 
            className="w-full text-center py-3 text-sm font-medium text-guardian-gray hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#dashboard" 
            className="w-full text-center py-3 text-sm font-medium text-guardian-gray hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </a>
          <a 
            href="#testimonials" 
            className="w-full text-center py-3 text-sm font-medium text-guardian-gray hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <div className="flex gap-4 mt-4">
            <Button size="sm" variant="outline">
              Log In
            </Button>
            <Button size="sm" className="bg-guardian-blue hover:bg-guardian-blue/90">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
