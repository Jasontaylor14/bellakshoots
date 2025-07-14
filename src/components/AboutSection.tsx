import { Award, Camera, Users } from 'lucide-react';
import photographerPortrait from '@/assets/photographer-portrait.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 neon-text">
              About bellakshoots
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              With over 8 years of experience in automotive photography, I specialize in capturing 
              the raw power, elegant design, and intricate details that make each vehicle unique.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              From exotic supercars to classic vintage automobiles, my passion lies in revealing 
              the personality and craftsmanship that defines automotive excellence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Camera className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold neon-text">500+</div>
                <div className="text-sm text-muted-foreground">Cars Photographed</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold neon-text">100+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold neon-text">15+</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg neon-border">
              <img
                src={photographerPortrait}
                alt="Professional car photographer"
                className="w-full h-auto object-cover hover-glow"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent rounded-full opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-primary rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;