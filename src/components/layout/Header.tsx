
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const isActive = (path: string) => location.pathname === path;
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "Contact", path: "/contact" }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-design-taupe rounded-full flex items-center justify-center text-white font-serif">
            BI
          </div>
          <span className="font-serif text-2xl md:text-3xl font-medium">
            Bhuvana Interior
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative pb-1 font-medium transition-colors ${
                isActive(link.path)
                  ? "text-design-charcoal after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-design-taupe"
                  : "text-design-dark/70 hover:text-design-charcoal"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-design-charcoal"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-5 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium ${
                isActive(link.path)
                  ? "text-design-charcoal"
                  : "text-design-dark/70"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
