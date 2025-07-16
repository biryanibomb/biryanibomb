import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#hero", sectionId: "hero" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Flavors", href: "#flavors", sectionId: "flavors" },
  { label: "How It Works", href: "#how-it-works", sectionId: "how-it-works" },
  { label: "Reviews", href: "#reviews", sectionId: "reviews" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
  { label: "FAQs", href: "#faq", sectionId: "faq" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effects and scrollspy
  useEffect(() => {
    const handleScroll = () => {
      // Add shadow when scrolled
      setIsScrolled(window.scrollY > 10);

      // Scrollspy functionality
      const sections = navItems.map(item => document.getElementById(item.sectionId));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const navbarHeight = 80; // Account for navbar height
      const targetPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-lg" 
        : "bg-background/80 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="text-2xl font-bold text-primary cursor-pointer hover:text-primary-glow transition-colors flex-shrink-0"
            onClick={() => smoothScrollTo("hero")}
          >
            Biryani Bombs
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => smoothScrollTo(item.sectionId)}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-primary group ${
                  activeSection === item.sectionId 
                    ? "text-primary" 
                    : "text-foreground/80"
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                  activeSection === item.sectionId ? "w-full" : ""
                }`} />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors relative z-[110] min-w-[44px] min-h-[44px]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Full Screen Overlay */}
        <div className={`md:hidden fixed inset-0 top-20 z-[105] transition-all duration-300 ease-in-out ${
          isOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}>
          <div className="bg-background/98 backdrop-blur-md h-full shadow-2xl border-t border-border/10">
            <div className="container mx-auto px-6 py-8">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.sectionId}
                    onClick={() => smoothScrollTo(item.sectionId)}
                    className={`block w-full text-left px-6 py-4 text-lg font-medium transition-all duration-200 rounded-lg ${
                      activeSection === item.sectionId 
                        ? "text-primary bg-primary/10 border-l-4 border-primary shadow-sm" 
                        : "text-foreground/80 hover:bg-muted/50 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {isOpen && (
          <div 
            className="md:hidden fixed inset-0 top-20 bg-black/20 z-[104]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navigation;