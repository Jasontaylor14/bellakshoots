import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-background/95 backdrop-blur-sm border-b border-border/20 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Camera className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold neon-text">AutoLux Photography</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link to="/work" className="text-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
              Work
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
              About
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
              Services
            </Link>
            <Link to="#contact" className="text-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider">
              Contact
            </Link>
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
              <Link
                to="/work"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
                onClick={toggleMenu}
              >
                Work
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="#contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;