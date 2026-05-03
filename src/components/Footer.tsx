export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyrightYear = currentYear === 2019 ? "2019" : `2019–${currentYear}`;

  return (
    <footer>
      <p className="footer-copy">
        © {copyrightYear} Boys of Superior Standard. All rights reserved.
      </p>
      <p className="footer-powered">
        Powered by{" "}
        <a href="https://honeystack.solutions" target="_blank" rel="noreferrer">
          Honeystack
        </a>
      </p>
    </footer>
  );
};
