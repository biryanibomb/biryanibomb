import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How many cubes do I use?",
      answer: "1 cube per person. Add more as needed. It's that simple!"
    },
    {
      question: "Can I add meat or vegetables?",
      answer: "Yes! Cook separately and mix with rice after adding the cube. The flavor cube enhances whatever you add."
    },
    {
      question: "Are all flavors veg?",
      answer: "Lucknowi & Kolkata are veg. Hyderabadi may contain meat stock (clearly labelled on packaging)."
    },
    {
      question: "Is it spicy?",
      answer: "Hyderabadi is hot and bold. Lucknowi and Kolkata are mild and aromatic. Perfect for different spice preferences."
    },
    {
      question: "Storage?",
      answer: "No fridge needed. Store in a cool, dry place. Shelf life: 6 months from manufacturing date."
    },
    {
      question: "When does it launch?",
      answer: "Pre-orders open now. Shipping begins soon. Stay tuned for updates!"
    }
  ];

  return (
    <section className="py-20 px-4 bg-subtle">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">FAQs – Know Before You Drop</h2>
        
        <div className="card-premium">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-clay-brown/10">
                <AccordionTrigger className="text-left font-semibold text-clay-brown hover:text-primary transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-clay-brown/80 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;