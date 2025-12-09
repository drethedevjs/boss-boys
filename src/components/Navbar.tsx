import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { link: "/", text: "Home" },
    { link: "/about", text: "About" },
    { link: "/meet-the-mentor", text: "Meet the Mentor" },
    {
      link: "https://www.paypal.com/donate/?hosted_button_id=B8HFHLRW86GEY",
      text: "Donate"
    }
    // { link: "#", text: "The Boys" }
  ];

  return (
    <nav className="">
      <div className="flex items-center justify-between p-5 bg-white dark:bg-boss-green">
        <div className="flex items-center">
          <NavLink to="/">
            <img
              src="/images/boss-logo.png"
              className="dark:hidden flex w-20 h-full"
            />
            <img
              src="/images/boss-logo-dark.png"
              className="hidden dark:flex w-20 h-full"
            />
          </NavLink>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex w-full justify-end space-x-6 font-good-times">
          {links.map((l, idx) => (
            <NavLink to={l.link} key={idx} end>
              <li className="hover:text-boss-gold">{l.text}</li>
            </NavLink>
          ))}
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
          <ul className="flex flex-col space-y-2 font-good-times">
            {links.map((l, idx) => (
              <NavLink
                to={l.link}
                end
                key={idx}
                className="border-b-boss-gold! border-b-2"
                onClick={() => setOpen(v => !v)}
              >
                <li className="hover:text-boss-gold">{l.text}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
