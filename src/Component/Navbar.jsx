// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { Link,  animateScroll as scroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // hamburger icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
          <li>
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
          <li>
            <Link
              to="aboutme"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skill"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white"
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="project"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="blog"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white"
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer text-white"
            >
              Contact
            </Link>
          </li>
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
          <ul className="absolute top-16 left-0 w-full bg-[#d4a381] flex flex-col items-center space-y-6 py-6 md:hidden transition-all duration-300">
            <li>
              <Link
                to="#"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="cursor-pointer text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="cursor-pointer text-black"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="service"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="cursor-pointer text-black"
              >
                service
              </Link>
            </li>
            <li>
              <Link
                to="resume"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="cursor-pointer text-black"
              >
                Resume
              </Link>
            </li>

            <li>
              <Link
                to="project"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="cursor-pointer text-black"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
