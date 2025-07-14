import Header from '@/components/Header';
import { Instagram, Music, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold neon-text mb-8">Contact</h1>
            <p className="text-muted-foreground text-lg mb-12">
              Let's create something amazing together. Follow my work and get in touch through social media.
            </p>
            
            <div className="flex justify-center space-x-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 border border-border/20 rounded-lg hover:border-primary/50 transition-colors group"
              >
                <Instagram className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-foreground font-medium">Instagram</span>
                <span className="text-sm text-muted-foreground">@autoluxphoto</span>
              </a>
              
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 border border-border/20 rounded-lg hover:border-primary/50 transition-colors group"
              >
                <Music className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-foreground font-medium">TikTok</span>
                <span className="text-sm text-muted-foreground">@autoluxphoto</span>
              </a>
              
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 border border-border/20 rounded-lg hover:border-primary/50 transition-colors group"
              >
                <Youtube className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-foreground font-medium">YouTube</span>
                <span className="text-sm text-muted-foreground">AutoLux Photography</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;