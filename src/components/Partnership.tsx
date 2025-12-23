import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const Partnership = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            "text-center max-w-3xl mx-auto opacity-0",
            isVisible && "animate-fade-in-up"
          )}
        >
          {/* Badge */}
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
            Our Partner
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Exclusive Partner for <span className="text-primary">Skill.College</span>
          </h2>

          {/* Card */}
          <div
            className={cn(
              "bg-card rounded-2xl p-8 shadow-lg border border-border opacity-0 hover:shadow-xl transition-shadow",
              isVisible && "animate-fade-in-up"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              As the official merchandise and branding partner for Skill.College, ECC Solutions Pvt. Ltd. provides exclusive access to high-quality branded materials and merchandise. Our partnership ensures consistent brand representation across all touchpoints, helping Skill.College maintain its professional image and brand identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
