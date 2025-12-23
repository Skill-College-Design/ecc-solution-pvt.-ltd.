import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
const Hero = () => {
  const {
    ref: contentRef,
    isVisible: contentVisible
  } = useScrollAnimation();
  const {
    ref: imageRef,
    isVisible: imageVisible
  } = useScrollAnimation({
    threshold: 0.2
  });
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden bg-[#dee9fc]">
      {/* Decorative shapes */}
      <div className="absolute top-32 left-10 w-24 h-24 bg-ecc-green rounded-full opacity-80 blur-sm animate-pulse" />
      <div className="absolute top-48 left-32 w-16 h-16 bg-ecc-yellow rounded-full opacity-80 animate-pulse" style={{
      animationDelay: "0.5s"
    }} />
      <div className="absolute top-64 right-20 w-20 h-20 bg-ecc-light-blue rounded-full opacity-80 animate-pulse" style={{
      animationDelay: "1s"
    }} />
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-primary rounded-full opacity-60 animate-pulse" style={{
      animationDelay: "1.5s"
    }} />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={contentRef} className={cn("space-y-6 opacity-0", contentVisible && "animate-fade-in-up")}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Official Merchandise & Branding Partner for{" "}
              <span className="text-primary">Skill.College</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg font-light">ECC Solutions Pvt. Ltd. is the authorized provider of all branding materials, official merchandise, and corporate goodies for the Skill.College brand.</p>
            <Button onClick={scrollToServices} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg transition-transform hover:scale-105">
              Explore
            </Button>
          </div>

          {/* Right Content - Illustration placeholder */}
          <div ref={imageRef} className={cn("relative flex justify-center items-center opacity-0", imageVisible && "animate-fade-in-right")}>
            <div className="w-full max-w-md aspect-square bg-gradient-to-br from-primary/20 to-ecc-green/20 rounded-3xl flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <div className="w-32 h-32 mx-auto bg-primary/30 rounded-2xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <p className="text-muted-foreground text-sm">Merchandise Illustration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;