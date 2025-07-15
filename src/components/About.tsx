import { Clock, Utensils, Star, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Clock,
      title: "Ready in 10 mins",
      description: "Quick and convenient"
    },
    {
      icon: Utensils,
      title: "Real Spices & Ghee",
      description: "Authentic ingredients"
    },
    {
      icon: Star,
      title: "Restaurant-style Flavor",
      description: "Professional taste"
    },
    {
      icon: Sparkles,
      title: "No Prep, No Mess",
      description: "Effortless cooking"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">What Are Biryani Bombs?</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-clay-brown">
              Drop-in flavor cubes that turn plain rice into authentic regional biryani. 
              Each cube contains real spices, ghee, and zero preservatives.
            </p>
            
            <div className="bg-kesar-gold/10 p-6 rounded-2xl border border-kesar-gold/20">
              <h3 className="text-2xl font-semibold mb-4 text-clay-brown font-heading">Serving Logic</h3>
              <p className="text-clay-brown/80">
                <span className="font-semibold">1 cube = 1 person</span> | 
                <span className="font-semibold"> 2 cubes = 2 people</span> | 
                <span className="font-semibold"> 3 cubes = 3 people</span>, etc.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="card-premium text-center">
                  <feature.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h4 className="font-semibold text-clay-brown mb-2">{feature.title}</h4>
                  <p className="text-sm text-clay-brown/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-kesar-gold/20 to-primary/20 rounded-3xl p-8 backdrop-blur-sm">
              <div className="w-full h-64 bg-clay-brown/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Utensils className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-clay-brown font-medium">Premium Spice Cube</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;