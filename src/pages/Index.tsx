import Header from '@/components/Header';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
