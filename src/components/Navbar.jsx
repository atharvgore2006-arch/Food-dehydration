import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ isAuthenticated, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Home',     path: '/'         },
    { name: 'About',    path: '/about'    },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Contact',  path: '/contact'  },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <Leaf size={22} />
          </div>
          <span className="navbar__logo-text">Vijay Dehydration</span>
        </Link>

        {/* Desktop links */}
        <div className="navbar__links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`navbar__link${isActive(link.path) ? ' navbar__link--active' : ''}`}
            >
              {link.name}
              {isActive(link.path) && <span className="navbar__active-bar" />}
            </Link>
          ))}

          {!isAuthenticated ? (
            <Link to="/login" className="navbar__btn-login">Login</Link>
          ) : (
            <div className="navbar__auth">
              <Link to="/dashboard" className={`navbar__link${isActive('/dashboard') ? ' navbar__link--active' : ''}`}>
                Dashboard
              </Link>
              <button onClick={onLogout} className="navbar__btn-logout">Logout</button>
            </div>
          )}
        </div>

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar__mobile mobile-nav">
          <div className="navbar__mobile-inner">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`navbar__mobile-link${isActive(link.path) ? ' navbar__mobile-link--active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="navbar__mobile-auth">
              {!isAuthenticated ? (
                <Link to="/login" className="navbar__mobile-btn-login">Login</Link>
              ) : (
                <>
                  <Link to="/dashboard" className={`navbar__mobile-link${isActive('/dashboard') ? ' navbar__mobile-link--active' : ''}`}>
                    Dashboard
                  </Link>
                  <button onClick={() => { onLogout(); setIsOpen(false); }} className="navbar__mobile-logout">
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
