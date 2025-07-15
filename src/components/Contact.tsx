import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon about your inquiry.",
    });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/917993554767", "_blank");
  };

  const handleEmail = () => {
    window.open("mailto:akhil.roy.2024@iimu.ac.in", "_blank");
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Let's Talk Biryani Business</h2>
        
        <div className="text-center mb-12">
          <p className="text-xl text-clay-brown/80 leading-relaxed">
            Want to invest, distribute, or collaborate with us?
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-premium">
            <h3 className="text-2xl font-bold text-clay-brown mb-6 font-heading">
              Send us a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-clay-brown mb-2">
                  Name
                </label>
                <Input 
                  placeholder="Your full name"
                  className="border-clay-brown/20 focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-clay-brown mb-2">
                  Email
                </label>
                <Input 
                  type="email"
                  placeholder="your.email@example.com"
                  className="border-clay-brown/20 focus:border-primary"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-clay-brown mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your business inquiry..."
                  className="border-clay-brown/20 focus:border-primary min-h-[120px]"
                  required
                />
              </div>
              
              <Button type="submit" className="btn-hero w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Options */}
          <div className="space-y-8">
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-clay-brown mb-6 font-heading">
                Get in touch directly
              </h3>
              
              <div className="space-y-4">
                <Button 
                  onClick={handleWhatsApp}
                  className="w-full btn-accent flex items-center gap-3 text-lg py-6"
                >
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp Us
                </Button>
                
                <Button 
                  onClick={handleEmail}
                  className="w-full btn-secondary flex items-center gap-3 text-lg py-6"
                >
                  <Mail className="w-6 h-6" />
                  Email Us
                </Button>
              </div>
            </div>
            
            <div className="bg-kesar-gold/10 p-8 rounded-2xl border border-kesar-gold/20">
              <h4 className="text-xl font-bold text-clay-brown mb-4 font-heading">
                Business Opportunities
              </h4>
              <ul className="space-y-2 text-clay-brown/80">
                <li>• Investment partnerships</li>
                <li>• Distribution networks</li>
                <li>• Retail collaborations</li>
                <li>• Franchise opportunities</li>
                <li>• Bulk orders</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;