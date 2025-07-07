import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const Navbar = ({ cartCount }) => {
  const location = useLocation();

  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector(".nav-links");

    const toggleMenu = () => {
      navMenu.classList.toggle("show");
    };

    if (hamburger && navMenu) {
      hamburger.addEventListener("click", toggleMenu);
    }

    return () => {
      if (hamburger && navMenu) {
        hamburger.removeEventListener("click", toggleMenu);
      }
    };
  }, []);

  return (
    <header>
      <div className="logo">🍜 Hana Ramen</div>
      <div className="hamburger" id="hamburger">&#9776;</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>

          {/* ✅ Show Cart only on /menu */}
          {location.pathname === "/menu" && (
            <li>
              <Link to="/cart" className="cart-link">
                Cart <span id="cart-count">{cartCount}</span>
              </Link>
            </li>
          )}

          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
