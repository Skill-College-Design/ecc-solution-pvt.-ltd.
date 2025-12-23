import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
const services = [{
  number: "01",
  title: "Office Merchandise",
  description: "Custom branded office supplies, stationery, and desk accessories for your team."
}, {
  number: "02",
  title: "Corporate Signage",
  description: "Professional signage solutions including banners, displays, and wayfinding systems."
}, {
  number: "03",
  title: "Branding Materials",
  description: "Complete brand identity packages including logos, business cards, and letterheads."
}, {
  number: "04",
  title: "Marketing Collaterals",
  description: "Promotional materials, brochures, flyers, and digital marketing assets."
}];
const Services = () => {
  const {
    ref: headingRef,
    isVisible: headingVisible
  } = useScrollAnimation();
  const {
    ref: cardsRef,
    isVisible: cardsVisible
  } = useScrollAnimation({
    threshold: 0.1
  });
  return <section id="services" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <div ref={headingRef} className={cn("text-center mb-8 opacity-0", headingVisible && "animate-fade-in-up")}>
          <span className="inline-block px-4 py-2 bg-primary-foreground/20 text-primary-foreground rounded-full text-sm font-medium">
            Services
          </span>
        </div>

        {/* Heading */}
        <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary-foreground mb-16 max-w-3xl mx-auto opacity-0", headingVisible && "animate-fade-in-up")} style={{
        animationDelay: "0.1s"
      }}>Comprehensive branding & merchandise.</h2>

        {/* Service Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => <div key={index} className={cn("bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-primary-foreground/20 transition-all group hover:scale-105 opacity-0", cardsVisible && "animate-fade-in-up")} style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <span className="text-5xl font-bold text-primary-foreground/30 group-hover:text-primary-foreground/50 transition-colors">
                {service.number}
              </span>
              <h3 className="text-xl font-semibold text-primary-foreground mt-4 mb-2">
                {service.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                {service.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Services;