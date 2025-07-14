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
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 neon-text">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of automotive photography showcasing the beauty, 
            power, and craftsmanship of exceptional vehicles.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden bg-card neon-border hover-glow">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 left-4 neon-text bg-background/80"
                  >
                    {item.category}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 neon-text">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="neon-text hover:text-accent transition-colors text-lg font-semibold">
            View Full Portfolio →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;