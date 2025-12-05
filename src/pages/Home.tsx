const Home = () => {
  const pillars = [
    {
      id: 1,
      name: "Community Leaders"
    },
    {
      id: 2,
      name: "Faithful Husbands"
    },
    {
      id: 3,
      name: "Loving Fathers"
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
            <h1 className="mb-5 lg:text-9xl md:text-7xl font-bold text-5xl">
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
        <h2 className="text-6xl pb-10">Our Pillars</h2>
        <div className="flex flex-col md:flex-row space-x-7">
          {pillars.map(p => (
            <div
              key={p.id}
              className="bg-boss-gold rounded-lg p-10 text-center"
            >
              <p className="text-3xl mb-5">{p.name}</p>
              <button className="boss-btn bg-boss-green">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
