import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/lovable-uploads/61bcfaa1-3f30-42cd-ab18-ae7c93c8b909.png')` }}
      >
        <div className="absolute inset-0 bg-hero"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="hero-title">
          Biryani Bombs
        </h1>
        <p className="hero-subtitle">
          Authentic regional biryani flavors. One cube. Ten minutes. Just drop and stir.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="btn-hero">
            Pre-order Now
          </Button>
          <Button variant="outline" className="px-8 py-4 rounded-xl font-semibold text-lg bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105">
            How It Works
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-kesar-gold/20 rounded-full blur-xl float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-mint-green/20 rounded-full blur-xl float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-secondary/20 rounded-full blur-xl float" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default Hero;