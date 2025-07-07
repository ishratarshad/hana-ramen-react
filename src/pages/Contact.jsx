import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const Contact = () => {
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
        <section className="contact">
          <h1>Contact Us</h1>
          <p>Have questions or want to book a table? Get in touch with us below.</p>

          <div className="contact-wrapper">
            <div className="contact-form">
              <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>

                <button type="submit">Send Message</button>
              </form>
            </div>

            <div className="contact-map">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7548674141823!2d-73.9815!3d40.7686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fce4c64b15%3A0xb8e7c03dd5b3b6dc!2sCentral%20Park%20Ramen%20Bar!5e0!3m2!1sen!2sus!4v1718080000000"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
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

export default Contact;
