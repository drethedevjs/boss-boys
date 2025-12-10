import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [childOpen, setChildOpen] = useState(false);

  const links = [
    { link: "/", text: "Home" },
    {
      link: "/about",
      text: "About",
      children: [
        {
          link: "/join",
          text: "Become A Member"
        },
        {
          link: "/rhythm",
          text: "Weekly Rhythm"
        }
      ]
    },
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
            <li
              key={idx}
              className={l.children?.length ? "relative group" : ""}
            >
              <div className="flex items-center gap-2">
                <NavLink
                  to={l.link}
                  end
                  className="hover:text-boss-gold block py-2"
                >
                  {l.text}
                </NavLink>
                {l.children?.length ? (
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                ) : null}
              </div>
              {l.children?.length ? (
                <ul className="absolute hidden group-hover:flex flex-col bg-white dark:bg-boss-green shadow-lg rounded mt-0 min-w-max">
                  {l.children.map((child, cidx) => (
                                          <NavLink
key={cidx}
                        to={child.link}
                        className="block py-2 hover:text-boss-gold dark:hover:bg-opacity-10"
                      >
<li className="w-full">{child.text}</li>
                      </NavLink>
                                      ))}
                </ul>
              ) : null}
            </li>
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
            {links.map((l, idx) => {
              return (
                <div key={idx}>
                  <div className="flex items-center justify-between">
                    <NavLink
                      to={l.link}
                      end
                      className="border-b-2 border-b-boss-gold block px-4 py-2 hover:text-boss-gold flex-1"
                      onClick={() => !l.children?.length && setOpen(false)}
                    >
                      {l.text}
                    </NavLink>
                    {l.children?.length ? (
                      <button
                        onClick={() => setChildOpen(!childOpen)}
                        className="px-4 py-2"
                        aria-expanded={childOpen}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            childOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : null}
                  </div>
                  {l.children?.length && childOpen ? (
                    <ul className="pl-4 bg-opacity-50 bg-black">
                      {l.children.map((child, cidx) => (
                          <NavLink
key={cidx}
                            to={child.link}
                            className="block px-4 py-2 hover:text-boss-gold"
                            onClick={() => {
                              setChildOpen(false);
                              setOpen(false);
                            }}
                          >
<li>{child.text}</li>
                          </NavLink>
                                              ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};
