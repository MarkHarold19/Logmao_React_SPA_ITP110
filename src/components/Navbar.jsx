import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (isHomePage) {
      // Only apply scroll effect on home page
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Set initial state
      
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // For other pages, navbar should always be white
      setIsScrolled(true);
    }
  }, [isHomePage, location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${
      isHomePage ? (isScrolled ? 'navbar-scrolled' : 'navbar-transparent') : 'navbar-white'
    }`}>
      <div className="container">
        <Link className="logo" to="/">Coffee Shop</Link>
        <button 
          className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`}
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/') ? 'active' : ''}`} 
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/order') ? 'active' : ''}`} 
                to="/order"
              >
                Order
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/loyalty') ? 'active' : ''}`} 
                to="/loyalty"
              >
                Loyalty Program
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`} 
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;