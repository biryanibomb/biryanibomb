import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-clay-brown text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-2 font-heading">
              Biryani Bombs
            </h3>
            <p className="text-white/70">
              Biryani Taste. No Hassle.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-kesar-gold" />
              <a href="tel:7993554767" className="hover:text-kesar-gold transition-colors">
                7993554767
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-kesar-gold" />
              <a href="mailto:akhil.roy.2024@iimu.ac.in" className="hover:text-kesar-gold transition-colors">
                akhil.roy.2024@iimu.ac.in
              </a>
            </div>
          </div>
          
          {/* Designer Credit */}
          <div className="text-center md:text-right">
            <p className="text-white/70">
              Designed by{" "}
              <a 
                href="https://furiglobal.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-kesar-gold hover:text-kesar-gold/80 transition-colors font-medium"
              >
                furiglobal.in
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Biryani Bombs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;