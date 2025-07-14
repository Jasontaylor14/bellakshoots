import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 neon-text">
            Let's Create Magic
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to showcase your automotive masterpiece? Let's discuss your vision 
            and create stunning photography that captures your vehicle's essence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="neon-border">
            <CardHeader>
              <CardTitle className="neon-text">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="John" className="bg-background border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Doe" className="bg-background border-border" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-background border-border" 
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Vehicle Type
                </label>
                <Input 
                  placeholder="e.g., Ferrari 488, Classic Mustang" 
                  className="bg-background border-border" 
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Project Details
                </label>
                <Textarea 
                  placeholder="Tell me about your vision, shooting location preferences, and any specific requirements..."
                  className="bg-background border-border min-h-32"
                />
              </div>
              
              <Button className="w-full neon-border hover-glow bg-transparent">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="neon-border">
              <CardHeader>
                <CardTitle className="neon-text">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">contact@autoluxphoto.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Los Angeles, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="neon-border">
              <CardHeader>
                <CardTitle className="neon-text">Follow the Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="neon-border hover-glow">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="neon-border hover-glow">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  @autoluxphotography
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;