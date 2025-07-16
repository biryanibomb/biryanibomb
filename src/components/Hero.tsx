import { Button } from "@/components/ui/button";
import biryaniScene from "@/assets/biryani-overhead-scene.jpg";
import floatingSpices from "@/assets/floating-spices.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-tandoori-red to-kesar-gold"></div>
      
      {/* Background Scene */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-multiply"
        style={{ backgroundImage: `url(${biryaniScene})` }}
      ></div>
      
      {/* Hero Content - Split Layout */}
      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
        
        {/* Left Side - Product Image */}
        <div className="relative order-2 lg:order-1">
          <div className="relative">
            <img 
              src="/lovable-uploads/61bcfaa1-3f30-42cd-ab18-ae7c93c8b909.png" 
              alt="Biryani Bomb Hero Image" 
              className="w-full max-w-md mx-auto lg:max-w-lg drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            
            {/* Floating Spice Elements */}
            <div 
              className="absolute -top-8 -left-8 w-16 h-16 opacity-80 spice-float"
              style={{ animationDelay: "0s" }}
            >
              <img src={floatingSpices} alt="Spices" className="w-full h-full object-contain" />
            </div>
            <div 
              className="absolute -bottom-6 -right-6 w-20 h-20 opacity-70 spice-float"
              style={{ animationDelay: "2s" }}
            >
              <img src={floatingSpices} alt="Spices" className="w-full h-full object-contain" />
            </div>
            <div 
              className="absolute top-1/4 -right-12 w-12 h-12 opacity-60 spice-float"
              style={{ animationDelay: "4s" }}
            >
              <img src={floatingSpices} alt="Spices" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="text-center lg:text-left text-white order-1 lg:order-2">
          <h1 className="hero-title">
            Biryani Bombs
          </h1>
          <p className="hero-subtitle">
            Authentic regional biryani flavors. One cube. Ten minutes. Just drop and stir.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <Button className="btn-hero group">
              <span>Pre-order Now</span>
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-4 rounded-xl font-semibold text-lg bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              How It Works
            </Button>
          </div>

          {/* Key Features */}
          <div className="mt-12 grid grid-cols-2 gap-6 text-sm font-body">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                ⏱️
              </div>
              <span>Ready in 10 mins</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                🧄
              </div>
              <span>Real Spices & Ghee</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                🍛
              </div>
              <span>Restaurant-style</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                🧼
              </div>
              <span>No Prep, No Mess</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Floating Elements */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-kesar-gold/30 rounded-full blur-sm float"></div>
      <div className="absolute bottom-32 right-16 w-8 h-8 bg-mint-green/20 rounded-full blur-sm float" style={{ animationDelay: "3s" }}></div>
      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-white/20 rounded-full blur-sm float" style={{ animationDelay: "5s" }}></div>
    </section>
  );
};

export default Hero;