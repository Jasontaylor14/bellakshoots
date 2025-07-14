import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import heroCarImage from '@/assets/hero-car.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCarImage}
          alt="Luxury car photography"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 neon-text-lg leading-tight">
          AUTOMOTIVE
          <br />
          <span className="text-accent">EXCELLENCE</span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Capturing the soul and power of automotive masterpieces through professional photography
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="neon-border hover-glow bg-transparent text-primary">
            View Portfolio
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="neon-border hover-glow"
          >
            Book a Session
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;