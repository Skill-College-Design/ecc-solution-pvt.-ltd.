import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
const faqs = [{
  question: "What is ECC Solutions Pvt. Ltd.?",
  answer: "ECC Solutions Pvt. Ltd. is the officially authorized partner for Skill.College merchandise and branding materials."
}, {
  question: "Is Skill.College owned by ECC Solutions Pvt. Ltd.?",
  answer: "No. Skill.College is a brand owned and operated by Drona Education Pvt. Ltd."
}, {
  question: "Why are payments collected by ECC Solutions Pvt. Ltd.?",
  answer: "ECC Solutions Pvt. Ltd. is responsible for producing and supplying official goods and therefore legally handles payments and invoicing."
}, {
  question: "Are invoices issued by ECC Solutions Pvt. Ltd. valid?",
  answer: "Yes. All invoices and GST bills issued by ECC Solutions Pvt. Ltd. are official and compliant."
}, {
  question: "Is any other entity authorized to sell Skill.College merchandise?",
  answer: "No. ECC Solutions Pvt. Ltd. is the sole authorized partner for official merchandise and branding materials."
}, {
  question: "Who should be contacted for merchandise-related queries?",
  answer: "All merchandise and branding-related queries should be directed to ECC Solutions Pvt. Ltd."
}, {
  question: "Is this payment official and valid?",
  answer: "Yes. All merchandise-related payments are legally routed through ECC Solutions Pvt. Ltd."
}, {
  question: "Is this page created for verification purposes?",
  answer: "Yes. This page exists to clarify authorization, payment legitimacy, and brand relationships."
}, {
  question: "Can this page be used for bank or audit verification?",
  answer: "Yes. The information provided here is intended for verification by banks, institutions, and auditors."
}];
const FAQ = () => {
  const {
    ref: contentRef,
    isVisible: contentVisible
  } = useScrollAnimation();
  const {
    ref: imageRef,
    isVisible: imageVisible
  } = useScrollAnimation({
    threshold: 0.3
  });
  return <section id="faq" className="py-20 bg-[#dee9fc]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start bg-[#dee9fc]">
          {/* Left Content */}
          <div ref={contentRef}>
            {/* Badge */}
            <span className={cn("inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 opacity-0", contentVisible && "animate-fade-in-up")}>
              FAQ
            </span>

            <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 opacity-0", contentVisible && "animate-fade-in-up")} style={{
            animationDelay: "0.1s"
          }}>
              You're probably wondering...
            </h2>

            {/* Accordion */}
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className={cn("bg-card rounded-lg px-6 border border-border opacity-0", contentVisible && "animate-fade-in-left")} style={{
              animationDelay: `${0.2 + index * 0.1}s`
            }}>
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>

          {/* Right Content - Image placeholder */}
          <div ref={imageRef} className={cn("hidden lg:flex justify-center items-center opacity-0", imageVisible && "animate-fade-in-right")}>
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
    </section>;
};
export default FAQ;