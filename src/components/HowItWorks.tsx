import { ChefHat, Plus, Utensils } from "lucide-react";
import howItWorksImage from "@/assets/how-it-works.jpg";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Boil Rice",
      description: "Boil your favourite rice as usual",
      icon: ChefHat
    },
    {
      number: "02", 
      title: "Drop 1 cube per person",
      description: "Add Biryani Bombs to the boiling rice",
      icon: Plus
    },
    {
      number: "03",
      title: "Cook & Serve", 
      description: "Mix well, cook, and savor the biryani",
      icon: Utensils
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Biryani in 3 Simple Steps</h2>
        
        {/* Hero Image */}
        <div className="mb-16 text-center">
          <img 
            src={howItWorksImage}
            alt="How Biryani Bombs Work - Step by Step"
            className="w-full max-w-5xl mx-auto rounded-3xl shadow-strong"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="card-premium text-center relative overflow-hidden">
                {/* Step Number Background */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary font-heading">{step.number}</span>
                </div>
                
                <div className="w-16 h-16 bg-kesar-gold rounded-full mx-auto mb-6 flex items-center justify-center shadow-medium">
                  <step.icon className="w-8 h-8 text-clay-brown" />
                </div>
                
                <h3 className="text-xl font-bold text-clay-brown mb-3 font-heading">
                  {step.title}
                </h3>
                <p className="text-clay-brown/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-kesar-gold rounded-full flex items-center justify-center shadow-medium">
                    <div className="w-0 h-0 border-l-[6px] border-l-clay-brown border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Bottom Note */}
        <div className="text-center">
          <div className="bg-mint-green/10 p-8 rounded-2xl border border-mint-green/20 max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-clay-brown mb-2">
              Zero cooking experience needed.
            </p>
            <p className="text-clay-brown/70">
              Full biryani in 10 mins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;