import { useState } from 'react';
import { Menu, X, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold neon-text">AutoLux Photography</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="neon-text hover:text-accent transition-colors">
              Home
            </a>
            <a href="#about" className="neon-text hover:text-accent transition-colors">
              About
            </a>
            <a href="#portfolio" className="neon-text hover:text-accent transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="neon-text hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button variant="outline" className="neon-border hover-glow">
              Book Session
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 neon-text hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 neon-text hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 neon-text hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 neon-text hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <Button variant="outline" className="w-full neon-border">
                  Book Session
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;