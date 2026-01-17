import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false); // for scroll fade
  const [lastScroll, setLastScroll] = useState(0);
  const location = useLocation();

  // Transparent navbar only on Home
  const isHome = location.pathname === "/";

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Fleet", path: "/fleet" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 50) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[70px] z-50 px-6 md:px-16 lg:px-24 xl:px-32 
      flex items-center justify-between transition-all duration-300
      ${isHome ? "bg-transparent text-white" : "bg-white text-gray-800 shadow-md"}
      ${hidden ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      {/* Logo */}
      <Link to="/" className="text-xl font-bold tracking-wide">
        TransLogix
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 font-medium">
        {links.map(({ name, path }) => (
          <li key={path}>
            <Link
              to={path}
              className={`transition hover:text-orange-500 ${
                location.pathname === path ? "text-orange-500" : ""
              }`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        aria-label="Toggle Menu"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5"
      >
        <span
          className={`w-6 h-0.5 ${isHome ? "bg-white" : "bg-gray-800"}`}
        />
        <span
          className={`w-6 h-0.5 ${isHome ? "bg-white" : "bg-gray-800"}`}
        />
        <span
          className={`w-6 h-0.5 ${isHome ? "bg-white" : "bg-gray-800"}`}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] 
        bg-black/90 text-white md:hidden transition-all duration-300
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
      >
        <ul className="flex flex-col items-center gap-6 py-10 text-lg">
          {links.map(({ name, path }) => (
            <li key={path}>
              <Link
                to={path}
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-400 transition"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
