import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import car1Image from '@/assets/car-1.jpg';
import car2Image from '@/assets/car-2.jpg';
import car3Image from '@/assets/car-3.jpg';

const portfolioItems = [
  {
    id: 1,
    image: car1Image,
    title: "Crimson Lightning",
    category: "Supercar",
    description: "Ferrari 488 GTB - Studio Photography"
  },
  {
    id: 2,
    image: car2Image,
    title: "Pure Elegance",
    category: "Luxury",
    description: "McLaren 720S - Showroom Series"
  },
  {
    id: 3,
    image: car3Image,
    title: "Dark Beast",
    category: "Hypercar",
    description: "Bugatti Chiron - Night Sessions"
  }
];

const PortfolioSection = () => {
  return (
    <section id="work" className="py-12 bg-background">
      <div className="container mx-auto px-6">
        {/* Portfolio Grid - Amy Shore Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden aspect-square">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay with title - appears on hover */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center">
                <div className="text-center p-6 w-full">
                  <h3 className="text-lg font-medium neon-text mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;