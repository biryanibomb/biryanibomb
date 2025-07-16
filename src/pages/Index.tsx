import Navigation from "@/components/Navigation";
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
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="flavors">
        <ProductVariants />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div id="who-its-for">
        <WhoItsFor />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
