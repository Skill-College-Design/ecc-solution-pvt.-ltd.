const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">E</span>
            </div>
            <span className="font-bold text-xl text-background">ECC Solutions</span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-background/70 hover:text-background transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-background/70 hover:text-background transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-background/70 hover:text-background transition-colors font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-background/70 hover:text-background transition-colors font-medium"
            >
              Contact
            </button>
          </nav>
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
