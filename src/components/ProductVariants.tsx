import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import productVariantsImage from "@/assets/product-variants.jpg";

const ProductVariants = () => {
  const [cartItems, setCartItems] = useState(0);
  const [quantities, setQuantities] = useState({
    hyderabadi: 0,
    lucknowi: 0,
    kolkata: 0
  });

  const products = [
    {
      id: "hyderabadi",
      name: "Hyderabadi Biryani Bomb",
      price: 60,
      description: "Bold & spicy",
      badge: "Spicy",
      badgeColor: "bg-primary"
    },
    {
      id: "lucknowi", 
      name: "Lucknowi Biryani Bomb",
      price: 60,
      description: "Mild & aromatic",
      badge: "Aromatic",
      badgeColor: "bg-mint-green"
    },
    {
      id: "kolkata",
      name: "Kolkata Biryani Bomb", 
      price: 60,
      description: "Sweet mustard spice",
      badge: "Sweet",
      badgeColor: "bg-kesar-gold"
    }
  ];

  const updateQuantity = (productId: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, prev[productId as keyof typeof prev] + change)
    }));
  };

  const addToCart = (product: any) => {
    const quantity = quantities[product.id as keyof typeof quantities];
    if (quantity > 0) {
      setCartItems(prev => prev + quantity);
      toast({
        title: "Added to Cart!",
        description: `${quantity}x ${product.name} added to your cart.`,
      });
    }
  };

  return (
    <section className="py-20 px-4 bg-subtle">
      <div className="max-w-6xl mx-auto">
        {/* Sticky Cart Counter */}
        <div className="fixed top-4 right-4 z-50">
          <Button className="btn-accent rounded-full p-3 shadow-strong">
            <ShoppingCart className="w-5 h-5" />
            <Badge className="ml-2 bg-primary text-white">{cartItems}</Badge>
          </Button>
        </div>

        <h2 className="section-title">Choose Your Flavor Bomb</h2>
        
        {/* Hero Product Image */}
        <div className="mb-12 text-center">
          <img 
            src={productVariantsImage}
            alt="Biryani Bombs Product Variants"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-strong"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="card-premium border-2 border-transparent hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge className={`${product.badgeColor} text-white mb-3`}>
                    {product.badge}
                  </Badge>
                  <h3 className="text-xl font-bold text-clay-brown mb-2 font-heading">
                    {product.name}
                  </h3>
                  <p className="text-clay-brown/70 mb-4">{product.description}</p>
                  <div className="text-2xl font-bold text-primary mb-6">
                    ₹{product.price}
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-medium text-clay-brown">Quantity:</span>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(product.id, -1)}
                      className="w-8 h-8 p-0 rounded-full"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-8 text-center font-semibold">
                      {quantities[product.id as keyof typeof quantities]}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(product.id, 1)}
                      className="w-8 h-8 p-0 rounded-full"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <Button 
                  onClick={() => addToCart(product)}
                  className="w-full btn-hero"
                  disabled={quantities[product.id as keyof typeof quantities] === 0}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductVariants;