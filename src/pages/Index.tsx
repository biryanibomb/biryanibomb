import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductVariants from "@/components/ProductVariants";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import WhoItsFor from "@/components/WhoItsFor";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <ProductVariants />
      <HowItWorks />
      <Reviews />
      <WhoItsFor />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
