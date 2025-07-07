import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const About = () => {
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

      {/* Main Content */}
      <main id="main-content">
        <section className="about">
          <div className="about-content">
            <h1>Our Story</h1>
            <p>
              Hana Ramen began as a cozy family-owned shop tucked in the heart of Manhattan, founded with the dream of bringing the warmth of traditional Japanese ramen to the city. Our name, "Hana," means flower in Japanese — a symbol of comfort, beauty, and care in every bowl we serve.
            </p>
            <p>
              From slow-simmered broths to handmade noodles, our chefs pour love into every dish. We blend timeless Japanese techniques with fresh, local ingredients to offer you the perfect balance of flavor, tradition, and heart.
            </p>
            <p>
              Whether you’re here for a quick lunch or a late-night slurp, we’re honored to be part of your story. Welcome to Hana Ramen — a bloom of flavor in every bowl.
            </p>
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

export default About;
