import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import '../App.css'; 

const Home = () => {
useEffect(() => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector("nav ul");

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
    <>
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">Skip to Main Content</a>
      <main id="main-content">
        <section className="hero">
          <div className="hero-center">
            <div className="hero-text">
              <h1>Hana Ramen</h1>
              <p>A Bloom of Flavor in Every Bowl</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="social-links">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a> |
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">Facebook</a> |
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter">Twitter</a>
          </div>
          <div className="business-hours">
            <p><strong>Business Hours:</strong></p>
            <p>Mon–Fri: 12:00 PM – 10:00 PM</p>
            <p>Sat–Sun: 1:00 PM – 11:00 PM</p>
          </div>
          <p>© 2025 Hana Ramen</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
