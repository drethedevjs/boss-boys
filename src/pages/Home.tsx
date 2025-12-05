import { HeartHandshake, House, ShieldUser } from "lucide-react";
const Home = () => {
  const pillars = [
    {
      id: 1,
      name: "Community Leaders",
      icon: ShieldUser
    },
    {
      id: 2,
      name: "Faithful Husbands",
      icon: HeartHandshake
    },
    {
      id: 3,
      name: "Loving Fathers",
      icon: House
    }
  ];

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(./src/assets/images/boss-hero.jpg)"
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
      <div className="p-20 place-items-center">
        <h2 className="lg:text-6xl text-5xl pb-10 font-good-times text-center">
          Our Pillars
        </h2>
        <div className="flex flex-col md:flex-row lg:space-y-0 space-y-10 lg:space-x-20">
          {pillars.map(p => {
            const Icon = p.icon;

            return (
              <div
                key={p.id}
                className="flex flex-col justify-between rounded-lg text-center place-items-center lg:w-1/3"
              >
                <div className="place-items-center">
                  <Icon className="mb-5 text-boss-gold hover:scale-105 hover:drop-shadow-md transition-all lg:size-50 md:size-32 size-40" />
                  <p className="text-3xl mb-5 font-good-times! lg:text-3xl md:text-2xl sm:text-xl">
                    {p.name}
                  </p>
                </div>
                <button className="boss-btn bg-boss-green text-white">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
