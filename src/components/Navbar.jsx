import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const Navbar = ({ cartCount }) => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  // Close menu when a link is clicked
  const handleLinkClick = () => setShowMenu(false);

  return (
    <header>
      <div className="logo">🍜 Hana Ramen</div>
      <div
        className="hamburger"
        onClick={() => setShowMenu((prev) => !prev)}
        aria-label="Toggle menu"
        tabIndex={0}
        role="button"
      >
        &#9776;
      </div>
      <nav>
        <ul className={`nav-links ${showMenu ? "show" : ""}`}>
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/menu" onClick={handleLinkClick}>Menu</Link></li>
          {location.pathname === "/menu" && (
            <li>
              <Link to="/cart" className="cart-link" onClick={handleLinkClick}>
                Cart <span id="cart-count">{cartCount}</span>
              </Link>
            </li>
          )}
          <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
          <li><Link to="/gallery" onClick={handleLinkClick}>Gallery</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
