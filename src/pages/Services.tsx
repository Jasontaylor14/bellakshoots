import Header from '@/components/Header';

const services = [
  {
    title: "Event Photography",
    description: "Capturing the excitement and energy of automotive events, from car shows to racing competitions.",
    features: ["Live event coverage", "Action shots", "Behind-the-scenes moments", "Professional editing"]
  },
  {
    title: "Studio Photography",
    description: "Professional studio sessions for showcasing vehicles in controlled lighting environments.",
    features: ["Controlled lighting", "Multiple angles", "Detail shots", "Custom backgrounds"]
  },
  {
    title: "Editorial Photography",
    description: "Commercial automotive photography for magazines, websites, and marketing materials.",
    features: ["Commercial licensing", "High-resolution files", "Brand-focused compositions", "Quick turnaround"]
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