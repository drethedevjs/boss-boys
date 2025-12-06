import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav className="p-5">
      <div className="flex items-center">
        <img src="/images/boss-logo.png" className="w-20 h-full" />
        <ul className="w-full font-good-times">
          <li className="hover:text-boss-gold">
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li className="hover:text-boss-gold">
            <NavLink to="/about" end>
              About
            </NavLink>
          </li>
          <li className="hover:text-boss-gold">
            <NavLink to="/meet-the-mentor" end>
              Meet the Mentor
            </NavLink>
          </li>
          <li className="hover:text-boss-gold">
            <NavLink
              to="https://www.paypal.com/donate/?hosted_button_id=B8HFHLRW86GEY"
              end
            >
              Donate
            </NavLink>
          </li>
          <li
            className="text-gray-400 cursor-not-allowed"
            title="Page Under Construction"
          >
            The Boys
          </li>
        </ul>
      </div>
    </nav>
  );
};
