import { NavLink } from "react-router";

export const PillarsLearnMore = ({
  leftText,
  rightText
}: {
  leftText: string;
  rightText: string;
}) => {
  const leftLink = "/pillar/" + leftText.toLowerCase().replace(" ", "-");
  const rightLink = "/pillar/" + rightText.toLowerCase().replace(" ", "-");
  return (
    <section className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl mb-2">Learn More</h2>
      <p className="mb-4">
        Read about our other two pillars by clicking one of the links below.
      </p>
      <div className="flex space-x-5 text-2xl font-good-times place-items-center place-content-center">
        <NavLink to={leftLink} className="hover:text-boss-gold">
          {leftText}
        </NavLink>{" "}
        | &nbsp;
        <NavLink to={rightLink} className="hover:text-boss-gold">
          {rightText}
        </NavLink>
      </div>
    </section>
  );
};
