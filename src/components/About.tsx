const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              All about ECC Solutions Pvt. Ltd.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              ECC Solutions Pvt. Ltd. is a leading provider of comprehensive branding and merchandise solutions. We specialize in creating high-quality corporate merchandise, signage, and marketing materials that help businesses establish a strong brand presence.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With years of experience in the industry, we understand the importance of consistent branding and quality products. Our team works closely with clients to deliver customized solutions that meet their unique requirements and exceed expectations.
            </p>
          </div>

          {/* Right Content - Clover Graphic */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64">
              {/* Four-leaf clover style graphic */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-28 bg-ecc-green rounded-full" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-28 bg-ecc-yellow rounded-full" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-28 h-28 bg-primary rounded-full" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-28 h-28 bg-ecc-light-blue rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-background rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
