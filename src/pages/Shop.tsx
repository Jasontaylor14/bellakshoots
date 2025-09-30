import { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';

const Shop = () => {
  const [cart, setCart] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Sunset Drive Print",
      category: "Print",
      price: "$35",
      image: "/lovable-uploads/1224eff2-b33c-4e4f-b663-150a70056bcd.png",
      description: "16x20 high-quality print of a stunning sunset drive"
    },
    {
      id: 2,
      name: "Night Rider Print",
      category: "Print",
      price: "$35",
      image: "/lovable-uploads/24da55ae-5142-4389-9e6c-6c04f24e99be.png",
      description: "16x20 premium print capturing the essence of night driving"
    },
    {
      id: 3,
      name: "Classic Beauty Print",
      category: "Print",
      price: "$40",
      image: "/lovable-uploads/2b1d9f92-f1df-4f98-ad23-023d49982589.png",
      description: "20x24 large format print of a timeless classic"
    },
    {
      id: 4,
      name: "bellakshoots Signature Tee",
      category: "Apparel",
      price: "$28",
      image: "/lovable-uploads/4442890a-9554-4140-8265-805af3af7f67.png",
      description: "Premium cotton t-shirt with bellakshoots logo"
    },
    {
      id: 5,
      name: "Automotive Dreams Hoodie",
      category: "Apparel",
      price: "$55",
      image: "/lovable-uploads/452e4417-6a28-4de7-b4cd-241d1e63ba53.png",
      description: "Cozy hoodie featuring exclusive automotive photography"
    },
    {
      id: 6,
      name: "Speed & Style Print",
      category: "Print",
      price: "$35",
      image: "/lovable-uploads/46f638f3-6d02-42cf-872f-ca61f438d6df.png",
      description: "16x20 print celebrating speed and elegance"
    },
    {
      id: 7,
      name: "Track Day Cap",
      category: "Accessories",
      price: "$22",
      image: "/lovable-uploads/4bd0a078-e7ba-420e-ad59-866b9e3f825c.png",
      description: "Stylish cap for automotive enthusiasts"
    },
    {
      id: 8,
      name: "Garage Vibes Print",
      category: "Print",
      price: "$38",
      image: "/lovable-uploads/56769d11-8109-409c-8e0b-d28f1d7c97f8.png",
      description: "18x24 print capturing authentic garage culture"
    }
  ];

  const addToCart = (id: number) => {
    setCart([...cart, id]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text-lg">
              Shop
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bring home the art of automotive photography with exclusive prints and merch
            </p>
            {cart.length > 0 && (
              <div className="mt-6 flex items-center justify-center gap-2">
                <ShoppingCart className="h-5 w-5 text-primary" />
                <span className="text-primary font-semibold">{cart.length} items in cart</span>
              </div>
            )}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden group hover-glow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button 
                    onClick={() => addToCart(product.id)}
                    variant="default"
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Notice */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              This is a demo shop. No actual purchases will be processed.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
