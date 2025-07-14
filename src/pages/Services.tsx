import Header from '@/components/Header';

const services = [
  {
    title: "Stationary Photos",
    description: "Professional stationary automotive photography capturing every detail in perfect lighting.",
    features: ["High-resolution images", "Multiple angles", "Detail shots", "Professional editing"]
  },
  {
    title: "Rolling Photos",
    description: "Dynamic rolling shots that capture vehicles in motion with professional panning techniques.",
    features: ["Motion blur effects", "Speed emphasis", "Action shots", "Road photography"]
  },
  {
    title: "Stationary Videos",
    description: "Cinematic stationary video content showcasing vehicles with creative camera work.",
    features: ["4K video quality", "Professional color grading", "Multiple camera angles", "Slow motion shots"]
  },
  {
    title: "Rolling Videos",
    description: "High-energy rolling video content capturing vehicles in motion from multiple perspectives.",
    features: ["Tracking shots", "Dynamic angles", "Speed footage", "Professional stabilization"]
  },
  {
    title: "Raw Footage",
    description: "Unedited raw footage delivery for clients who prefer to handle their own post-production.",
    features: ["Full resolution files", "Multiple formats", "Complete shoots", "Fast delivery"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold neon-text text-center mb-12">Services</h1>
            
            <div className="space-y-12">
              {services.map((service, index) => (
                <div key={index} className="border-b border-border/20 pb-12 last:border-b-0">
                  <h2 className="text-2xl font-semibold neon-text mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;