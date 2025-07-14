import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold neon-text mb-6">AutoLux Photography</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Capturing the beauty and power of automotive excellence through professional photography
          </p>
          <Link 
            to="/work" 
            className="inline-block bg-primary text-background px-8 py-3 rounded-sm font-medium hover:bg-primary/90 transition-colors"
          >
            View Work
          </Link>
        </div>
      </main>
      <ContactSection />
    </div>
  );
};

export default Index;
