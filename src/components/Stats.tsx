import { Shield, Eye, Target } from "lucide-react";

const stats = [
  {
    icon: Shield,
    title: "Legitimacy",
    description: "Authorized and certified partner with verified credentials and official partnerships.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication, honest pricing, and full visibility into our processes.",
  },
  {
    icon: Target,
    title: "Consistency",
    description: "Reliable quality and timely delivery on every project, every time.",
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
          Strength that speaks for itself
        </h2>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 text-center border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-primary" />
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
