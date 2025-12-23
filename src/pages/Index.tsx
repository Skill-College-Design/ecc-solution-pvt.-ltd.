import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Partnership from "@/components/Partnership";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <About />
      <Partnership />
      <Stats />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
