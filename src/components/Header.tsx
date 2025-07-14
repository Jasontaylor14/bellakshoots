import { useState } from 'react';
import { Menu, X, Camera } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-background/95 backdrop-blur-sm border-b border-border/20 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Camera className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold neon-text">AutoLux Photography</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <a href="#work" className="text-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
              Work
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
              About
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
              Services
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#work"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
                onClick={toggleMenu}
              >
                Work
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;