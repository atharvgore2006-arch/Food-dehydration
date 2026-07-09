import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Leaf, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <button onClick={scrollTop} aria-label="Scroll to top" className="footer__scroll-top">
        <ArrowUp size={20} />
      </button>

      <div className="container">
        <div className="footer__grid">

          {/* Brand */}
          <div>
            <div className="footer__brand-logo">
              <Leaf size={20} style={{ color: 'var(--green-400)' }} />
              <span className="footer__brand-name">Vijay Processing</span>
            </div>
            <p className="footer__brand-desc">
              Leading the way in high-quality dehydration and food processing. Preserving freshness naturally to deliver premium powder products globally.
            </p>
            <div className="footer__socials">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="footer__social-link">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__list">
              {[
                { label: 'Home',       path: '/'         },
                { label: 'About Us',   path: '/about'    },
                { label: 'Products',   path: '/products' },
                { label: 'Services',   path: '/services' },
                { label: 'Contact Us', path: '/contact'  },
              ].map(({ label, path }) => (
                <li key={label}>
                  <Link to={path} className="footer__list-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="footer__heading">Our Products</h3>
            <ul className="footer__list">
              {['Dehydrated Onion Powder', 'Garlic Powder & Flakes', 'Ginger Powder', 'Mixed Veg Flakes'].map((p) => (
                <li key={p}>
                  <Link to="/products" className="footer__list-link">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="footer__heading">Contact Info</h3>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <MapPin size={18} className="footer__contact-icon" />
                <span className="footer__contact-text">Vijay Processing Unit, Rajuri, Tal-Rahata ,A.Nagar, India</span>
              </li>
              <li className="footer__contact-item">
                <Phone size={18} className="footer__contact-icon" />
                <span className="footer__contact-text">+91 98765 43210</span>
              </li>
              <li className="footer__contact-item">
                <Mail size={18} className="footer__contact-icon" />
                <span className="footer__contact-text">info@vijayptocessingplant.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Vijay Dehydration &amp; Processing Plant. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Privacy Policy</a>
            <a href="#" className="footer__bottom-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
