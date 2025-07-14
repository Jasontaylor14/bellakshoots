import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import car1Image from '@/assets/car-1.jpg';
import car2Image from '@/assets/car-2.jpg';
import car3Image from '@/assets/car-3.jpg';

const projectData = {
  'redbull': {
    title: 'Red Bull',
    description: 'Capturing the high-energy world of Red Bull motorsports events.',
    images: [
      '/lovable-uploads/f6fd6f07-9f80-4dc2-9d87-fd578d51b0f7.png',
      '/lovable-uploads/8bba734d-0566-4073-b634-9fe3469d7959.png'
    ]
  },
  '24-hours-daytona': {
    title: '24 Hours of Daytona',
    description: 'Documenting the endurance and excitement of the legendary 24-hour race.',
    images: [
      '/lovable-uploads/46f638f3-6d02-42cf-872f-ca61f438d6df.png',
      '/lovable-uploads/24da55ae-5142-4389-9e6c-6c04f24e99be.png',
      '/lovable-uploads/d24f923b-feff-44ce-bb28-ab6463524544.png',
      '/lovable-uploads/7ca9fe04-f5c5-4cb4-b6e8-2662b15edc47.png',
      '/lovable-uploads/81ea22e9-ad8d-48e0-98e3-dc493cc5d223.png'
    ]
  },
  'slushfest-co': {
    title: 'Slushfest CO',
    description: 'Winter automotive gathering in the Colorado mountains.',
    images: [
      '/lovable-uploads/e28d0194-0e8f-4520-b73d-c977d04e9db3.png',
      '/lovable-uploads/56769d11-8109-409c-8e0b-d28f1d7c97f8.png',
      '/lovable-uploads/d87b7c95-f5e1-4b06-96a7-75d57dcf1849.png',
      '/lovable-uploads/d703c67c-f7c6-4497-8f3f-81519f795bc1.png',
      '/lovable-uploads/2b1d9f92-f1df-4f98-ad23-023d49982589.png',
      '/lovable-uploads/4bd0a078-e7ba-420e-ad59-866b9e3f825c.png',
      '/lovable-uploads/b0b3079c-6089-42f5-b804-09c9cf4d234c.png'
    ]
  },
  'fuelfest': {
    title: 'FuelFest',
    description: 'The ultimate automotive lifestyle festival.',
    images: [car1Image, car3Image, car2Image, car1Image, car3Image, car2Image]
  },
  'ec-rally': {
    title: 'EC Rally',
    description: 'East Coast rally racing through challenging terrain.',
    images: [car2Image, car1Image, car3Image, car2Image, car1Image, car3Image]
  },
  'canada-rally': {
    title: 'Canada Rally',
    description: 'Rally racing through the beautiful Canadian wilderness.',
    images: [car3Image, car2Image, car1Image, car3Image, car2Image, car1Image]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projectId ? projectData[projectId as keyof typeof projectData] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-12 text-center">
            <h1 className="text-2xl neon-text mb-4">Project not found</h1>
            <button onClick={() => navigate('/work')} className="text-primary hover:text-primary/80">
              Return to Work
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <button 
            onClick={() => navigate('/work')}
            className="flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </button>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold neon-text mb-4">{project.title}</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{project.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;