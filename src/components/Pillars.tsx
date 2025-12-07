import { HeartHandshake, House, ShieldUser } from "lucide-react";
import { NavLink } from "react-router";

const Pillars = () => {
  const pillars = [
    {
      id: 1,
      name: "Community Leaders",
      icon: ShieldUser,
      link: "pillar/community-leaders"
    },
    {
      id: 2,
      name: "Faithful Husbands",
      icon: HeartHandshake,
      link: "pillar/faithful-husbands"
    },
    {
      id: 3,
      name: "Loving Fathers",
      icon: House,
      link: "pillar/loving-fathers"
    }
  ];

  return (
    <section id="pillars" className="p-20 place-items-center">
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
              <NavLink
                to={p.link}
                className="boss-btn bg-boss-green dark:bg-boss-gold text-white"
              >
                Learn More
              </NavLink>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pillars;
