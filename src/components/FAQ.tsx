import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does ECC Solutions provide?",
    answer: "ECC Solutions provides comprehensive branding and merchandise solutions including office merchandise, corporate signage, branding materials, and marketing collaterals. We work with businesses of all sizes to create customized solutions that enhance their brand identity.",
  },
  {
    question: "How do I place an order for merchandise?",
    answer: "You can place an order by contacting us through our website's contact form or reaching out to our sales team directly. We'll discuss your requirements, provide a quote, and guide you through the ordering process.",
  },
  {
    question: "What is the typical turnaround time for orders?",
    answer: "Turnaround times vary depending on the complexity and quantity of your order. Standard orders typically take 2-3 weeks, while custom or large orders may take 4-6 weeks. We'll provide you with an accurate timeline during the quoting process.",
  },
  {
    question: "Do you offer customization options?",
    answer: "Yes! We specialize in customization. Whether you need custom logos, specific colors, or unique designs, our team can accommodate your requirements to ensure your merchandise perfectly represents your brand.",
  },
  {
    question: "What is your minimum order quantity?",
    answer: "Minimum order quantities vary by product type. Some items have no minimum, while others may require a minimum order. Contact us with your specific requirements, and we'll provide detailed information.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              FAQ
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              You're probably wondering...
            </h2>

            {/* Accordion */}
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-lg px-6 border border-border"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Content - Image placeholder */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-primary/20 to-ecc-yellow/20 rounded-3xl flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="w-24 h-24 mx-auto bg-primary/30 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-muted-foreground text-sm">FAQ Illustration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
