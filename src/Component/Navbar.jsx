import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "aboutme" },
    { name: "Service", to: "skill" },
    { name: "Resume", to: "resume" },
    { name: "Projects", to: "project" },
    { name: "Blog", to: "blog" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        isScrolled ? "bg-black shadow-md" : "bg-[#333333]"
      }`}
    >
      <div className="flex items-center justify-between max-w-[1200px] mx-auto px-4 py-4">
        {/* Logo */}
        <div className="inline-block px-4 py-2">
          <p>CodeC</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) =>
            item.name === "Home" ? (
              <li key={item.to}>
                <span
                  onClick={() => scroll.scrollToTop()}
                  className="cursor-pointer text-white"
                >
                  Home
                </span>
              </li>
            ) : (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80} // Navbar height consider
                  activeClass="!text-[#FFBD39]"
                  className="cursor-pointer text-white"
                >
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes size={24} className="text-white cursor-pointer" />
          ) : (
            <FaBars size={24} className="text-white cursor-pointer" />
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-[#333333] flex flex-col items-center space-y-6 py-6 md:hidden transition-all duration-300">
            {navItems.map((item) =>
              item.name === "Home" ? (
                <li key={item.to}>
                  <span
                    onClick={() => {
                      scroll.scrollToTop();
                      closeMenu();
                    }}
                    className="cursor-pointer text-white"
                  >
                    Home
                  </span>
                </li>
              ) : (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    activeClass="!text-[#FFBD39]"
                    onClick={closeMenu}
                    className="cursor-pointer text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
