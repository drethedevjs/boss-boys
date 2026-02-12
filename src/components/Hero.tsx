import { NavLink } from "react-router";

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
          <h1 className="font-good-times mb-5 lg:text-7xl md:text-5xl font-bold text-3xl text-shadow-2xs text-white!">
            Boys of Superior Standard
          </h1>
          <p className="mb-5 md:text-3xl text-lg text-white!">
            Aspiring to be community leaders, faithful husbands, and loving
            fathers.
          </p>
          <div className="space-x-5 font-medium">
            <NavLink
              to="/about"
              className="boss-btn-gold boss-btn hover:font-semibold"
            >
              Learn More
            </NavLink>
            <NavLink
              to="https://www.paypal.com/donate/?hosted_button_id=B8HFHLRW86GEY"
              target="_blank"
              className="boss-btn-green boss-btn hover:font-semibold"
            >
              Donate
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
