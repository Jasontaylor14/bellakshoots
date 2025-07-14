import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import car1Image from '@/assets/car-1.jpg';
import car2Image from '@/assets/car-2.jpg';
import car3Image from '@/assets/car-3.jpg';

const portfolioItems = [
  {
    id: 'redbull',
    image: '/lovable-uploads/f6fd6f07-9f80-4dc2-9d87-fd578d51b0f7.png',
    title: "Red Bull",
    category: "Event Coverage"
  },
  {
    id: '24-hours-daytona',
    image: '/lovable-uploads/81ea22e9-ad8d-48e0-98e3-dc493cc5d223.png',
    title: "24 Hours of Daytona",
    category: "Racing"
  },
  {
    id: 'slushfest-co',
    image: car3Image,
    title: "Slushfest CO",
    category: "Winter Event"
  },
  {
    id: 'fuelfest',
    image: car1Image,
    title: "FuelFest",
    category: "Car Show"
  },
  {
    id: 'ec-rally',
    image: car2Image,
    title: "EC Rally",
    category: "Rally Racing"
  },
  {
    id: 'canada-rally',
    image: car3Image,
    title: "Canada Rally",
    category: "Rally Racing"
  }
];

const Work = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/work/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group cursor-pointer" onClick={() => handleProjectClick(item.id)}>
                <div className="aspect-square overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-medium neon-text mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Work;