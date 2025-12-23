import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const { ref, isVisible } = useScrollAnimation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contacts").insert({
        first_name: formData.firstName,
        last_name: formData.lastName,
        company_name: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-2xl mx-auto">
          <h2
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary-foreground mb-12 opacity-0",
              isVisible && "animate-fade-in-up"
            )}
          >
            Get in Touch
          </h2>

          <form
            onSubmit={handleSubmit}
            className={cn(
              "space-y-6 opacity-0",
              isVisible && "animate-fade-in-up"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-primary-foreground mb-2 font-medium">
                  First Name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:ring-primary-foreground/50"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-primary-foreground mb-2 font-medium">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:ring-primary-foreground/50"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="companyName" className="block text-primary-foreground mb-2 font-medium">
                Company / Organization Name
              </label>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:ring-primary-foreground/50"
                placeholder="Acme Corporation"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-primary-foreground mb-2 font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:ring-primary-foreground/50"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-primary-foreground mb-2 font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:ring-primary-foreground/50"
                  placeholder="+1 (234) 567-8900"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-primary-foreground mb-2 font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 resize-none focus:ring-primary-foreground/50"
                placeholder="Tell us about your project..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 py-6 text-lg font-semibold transition-transform hover:scale-[1.02]"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
