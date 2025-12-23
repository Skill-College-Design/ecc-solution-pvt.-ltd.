import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const countryCodes = [
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+1", country: "USA", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+86", country: "China", flag: "🇨🇳" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const { ref, isVisible } = useScrollAnimation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, formData[name as keyof typeof formData]);
  };

  const validateField = (name: string, value: string) => {
    let error = "";
    
    switch (name) {
      case "firstName":
        if (!value.trim()) error = "Enter a first name.";
        break;
      case "lastName":
        if (!value.trim()) error = "Enter a last name.";
        break;
      case "email":
        if (!value.trim()) {
          error = "Enter an email address like example@mysite.com.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Enter an email address like example@mysite.com.";
        }
        break;
      case "phone":
        if (!value.trim()) error = "Enter a phone number.";
        break;
      case "companyName":
        if (!value.trim()) error = "Enter company name.";
        break;
      case "message":
        if (!value.trim()) error = "Enter a message.";
        break;
    }
    
    setErrors((prev) => ({ ...prev, [name]: error }));
    return error === "";
  };

  const validateForm = () => {
    const fields = ["firstName", "lastName", "email", "phone", "companyName", "message"];
    let isValid = true;
    
    fields.forEach((field) => {
      const valid = validateField(field, formData[field as keyof typeof formData]);
      if (!valid) isValid = false;
      setTouched((prev) => ({ ...prev, [field]: true }));
    });
    
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contacts").insert({
        first_name: formData.firstName,
        last_name: formData.lastName,
        company_name: formData.companyName,
        email: formData.email,
        phone: `${countryCode} ${formData.phone}`,
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
      setErrors({});
      setTouched({});
      setCountryCode("+91");
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
                  First Name <span className="text-red-400">*</span>
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={() => handleBlur("firstName")}
                  className={cn(
                    "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:ring-primary-foreground/50",
                    touched.firstName && errors.firstName && "border-red-400"
                  )}
                  placeholder="Enter your first name"
                />
                {touched.firstName && errors.firstName && (
                  <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-primary-foreground mb-2 font-medium">
                  Last Name <span className="text-red-400">*</span>
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={() => handleBlur("lastName")}
                  className={cn(
                    "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:ring-primary-foreground/50",
                    touched.lastName && errors.lastName && "border-red-400"
                  )}
                  placeholder="Enter your last name"
                />
                {touched.lastName && errors.lastName && (
                  <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="companyName" className="block text-primary-foreground mb-2 font-medium">
                Company / Organization Name <span className="text-red-400">*</span>
              </label>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                onBlur={() => handleBlur("companyName")}
                className={cn(
                  "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:ring-primary-foreground/50",
                  touched.companyName && errors.companyName && "border-red-400"
                )}
                placeholder="Enter your company name"
              />
              {touched.companyName && errors.companyName && (
                <p className="text-red-400 text-sm mt-1">{errors.companyName}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-primary-foreground mb-2 font-medium">
                  Email <span className="text-red-400">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur("email")}
                  className={cn(
                    "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:ring-primary-foreground/50",
                    touched.email && errors.email && "border-red-400"
                  )}
                  placeholder="Enter your email"
                />
                {touched.email && errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="block text-primary-foreground mb-2 font-medium">
                  Phone <span className="text-red-400">*</span>
                </label>
                <div className="flex gap-2">
                  <Select value={countryCode} onValueChange={setCountryCode}>
                    <SelectTrigger className="w-[100px] bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border">
                      {countryCodes.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.flag} {country.code}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={() => handleBlur("phone")}
                    className={cn(
                      "flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:ring-primary-foreground/50",
                      touched.phone && errors.phone && "border-red-400"
                    )}
                    placeholder="Enter your phone number"
                  />
                </div>
                {touched.phone && errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-primary-foreground mb-2 font-medium">
                How can we help? <span className="text-red-400">*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={() => handleBlur("message")}
                rows={5}
                className={cn(
                  "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 resize-none focus:ring-primary-foreground/50",
                  touched.message && errors.message && "border-red-400"
                )}
                placeholder="Enter your message here"
              />
              {touched.message && errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
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
