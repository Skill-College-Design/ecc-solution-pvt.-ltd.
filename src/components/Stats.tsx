import { Shield, Eye, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const stats = [
  {
    icon: Shield,
    title: "Legitimacy",
    description: "Single authorized entity ensures lawful, compliant, and auditable merchandise transactions.",
    bgColor: "bg-[#9EDCAB]",
    iconColor: "text-[#226C35]",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Payments and invoices remain clear, verifiable, and officially traceable.",
    bgColor: "bg-[#C3D6FA]",
    iconColor: "text-[#2A58B8]",
  },
  {
    icon: Target,
    title: "Consistency",
    description: "All materials strictly follow approved Skill.College brand standards.",
    bgColor: "bg-[#FFF0C2]",
    iconColor: "text-[#DB8C0F]",
  },
];

const Stats = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2
          ref={headingRef}
          className={cn(
            "text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16 opacity-0",
            headingVisible && "animate-fade-in-up"
          )}
        >
          Strength that speaks for itself
        </h2>

        {/* Stats Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "rounded-2xl p-8 text-center border border-border hover:shadow-lg transition-all hover:scale-105 opacity-0",
                stat.bgColor,
                cardsVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
                <stat.icon className={cn("w-8 h-8", stat.iconColor)} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {stat.title}
              </h3>
              <p className="text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
