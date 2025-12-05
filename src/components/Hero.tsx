const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/images/boss-hero.jpg)"
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="lg:max-w-5xl md:max-w-xl max-w-md">
          <h1 className="font-good-times mb-5 lg:text-7xl md:text-5xl font-bold text-3xl text-shadow-2xs">
            Boys of Superior Standard
          </h1>
          <p className="mb-5 md:text-3xl text-lg">
            Aspiring to be community leaders, faithful husbands, and loving
            fathers.
          </p>
          <div className="space-x-5 font-medium">
            <button className="bg-boss-gold py-3 px-5 rounded-md">
              Learn More
            </button>
            <button className="bg-boss-green py-3 px-5 rounded-md">
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
