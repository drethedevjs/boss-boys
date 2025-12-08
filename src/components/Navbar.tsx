import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const Links = (
    <>
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
          target="_blank"
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
    </>
  );

  return (
    <nav className="">
      <div className="flex items-center justify-between p-5 bg-white dark:bg-boss-green">
        <div className="flex items-center">
          <img
            src="/images/boss-logo.png"
            className="dark:hidden flex w-20 h-full"
          />
          <img
            src="/images/boss-logo-dark.png"
            className="hidden dark:flex w-20 h-full"
          />
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex w-full justify-end space-x-6 font-good-times">
          {Links}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <Menu className="w-10 h-10 text-boss-green dark:text-boss-gold" />
        </button>
      </div>

      {/* Mobile menu content */}
      {open && (
        <div className="md:hidden absolute bg-boss-green w-full text-white dark:text-boss-gold z-10">
          <ul className="flex flex-col space-y-2 font-good-times">{Links}</ul>
        </div>
      )}
    </nav>
  );
};
