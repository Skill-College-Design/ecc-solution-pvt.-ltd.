import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  
  return (
    <footer className="py-12 bg-[#2a56b7]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Company */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">E</span>
              </div>
              <span className="font-bold text-xl text-background">ECC Solutions Pvt. Ltd.</span>
            </div>
            <p className="text-background/70 text-sm">
              Providing trusted financial solutions with transparency and excellence.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-background text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <button onClick={() => scrollToSection("home")} className="text-background/70 hover:text-[#FFCA28] transition-colors font-medium text-left">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-background/70 hover:text-[#FFCA28] transition-colors font-medium text-left">
                About
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-background/70 hover:text-[#FFCA28] transition-colors font-medium text-left">
                FAQ
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-background/70 hover:text-[#FFCA28] transition-colors font-medium text-left">
                Contact
              </button>
              <Link to="/privacy-policy" className="text-background/70 hover:text-[#FFCA28] transition-colors font-medium">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-background text-lg">Contact Us</h3>
            <div className="space-y-3">
              <a href="mailto:info@eccsolutions.com" className="flex items-center gap-2 text-background/70 hover:text-[#FFCA28] transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@eccsolutions.com</span>
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-2 text-background/70 hover:text-[#FFCA28] transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 123 456 7890</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="font-semibold text-background text-lg">Our Address</h3>
            <div className="flex items-start gap-2 text-background/70">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <p>
                123 Business Park,<br />
                Financial District,<br />
                Mumbai, Maharashtra 400001,<br />
                India
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 my-8" />

        {/* Copyright */}
        <p className="text-center text-background/60 text-sm">
          © {currentYear} ECC Solutions Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;