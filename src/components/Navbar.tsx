export const Navbar = () => {
  return (
    <nav className="p-5">
      <div className="flex items-center">
        <img src="/images/boss-logo.png" className="w-20 h-full" />
        <ul className="w-full font-good-times">
          <li className="hover:text-boss-gold">Home</li>
          <li className="hover:text-boss-gold">About</li>
          <li className="hover:text-boss-gold">The Boys</li>
          <li className="hover:text-boss-gold">Donate</li>
        </ul>
      </div>
    </nav>
  );
};
