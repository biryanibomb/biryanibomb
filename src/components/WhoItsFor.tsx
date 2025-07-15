import { GraduationCap, Heart, ChefHat, Sparkles } from "lucide-react";
import targetAudienceImage from "@/assets/target-audience.jpg";

const WhoItsFor = () => {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Hostel Students",
      description: "Late night cravings made easy"
    },
    {
      icon: Heart,
      title: "Working Couples", 
      description: "Quick romantic dinners"
    },
    {
      icon: ChefHat,
      title: "Lazy Home Cooks",
      description: "Gourmet without the effort"
    },
    {
      icon: Sparkles,
      title: "Flavor Seekers",
      description: "Authentic tastes, zero hassle"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Made for...</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img 
              src={targetAudienceImage}
              alt="People enjoying Biryani Bombs"
              className="w-full rounded-3xl shadow-strong"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-clay-brown/20 to-transparent rounded-3xl"></div>
          </div>
          
          {/* Right side - Audience types */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {audiences.map((audience, index) => (
                <div key={index} className="card-premium text-center group">
                  <div className="w-16 h-16 bg-kesar-gold rounded-full mx-auto mb-4 flex items-center justify-center shadow-medium group-hover:bg-primary transition-colors duration-300">
                    <audience.icon className="w-8 h-8 text-clay-brown group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-clay-brown mb-2 font-heading">
                    {audience.title}
                  </h3>
                  <p className="text-clay-brown/70 text-sm">
                    {audience.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="bg-mint-green/10 p-8 rounded-2xl border border-mint-green/20">
              <h3 className="text-2xl font-bold text-clay-brown mb-4 font-heading">
                Perfect for every occasion
              </h3>
              <p className="text-clay-brown/80 leading-relaxed">
                Perfect for midnight cravings, weekend meals, and everything in between. 
                Whether you're a busy professional, a student on a budget, or just someone 
                who loves great food without the fuss.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;