import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const menuItems = {
  ramen: [
    { name: "Spicy Miso Ramen", price: 13.99, desc: "Rich miso broth, spicy pork chashu, soft egg, scallions." },
    { name: "Shoyu Ramen", price: 12.49, desc: "Soy-based broth, sliced chicken, bamboo shoots." },
    { name: "Tonkotsu Ramen", price: 14.99, desc: "Creamy pork bone broth, chashu, black garlic oil." },
    { name: "Vegetable Ramen", price: 11.49, desc: "Miso-based broth, tofu, mushrooms, corn, spinach." },
    { name: "Shio Ramen", price: 12.75, desc: "Light salt broth, naruto, bamboo, and greens." },
    { name: "Chicken Paitan Ramen", price: 13.50, desc: "Thick creamy chicken broth with grilled chicken." },
    { name: "Seafood Ramen", price: 15.50, desc: "Shrimp, squid, mussels in a savory dashi broth." },
    { name: "Cold Tsukemen", price: 13.25, desc: "Chilled dipping noodles with rich broth on the side." }
  ],
  sushi: [
    { name: "Salmon Nigiri", price: 6.99, desc: "Fresh salmon over vinegared rice (2 pcs)." },
    { name: "California Roll", price: 7.49, desc: "Crab, avocado, cucumber (6 pcs)." },
    { name: "Spicy Tuna Roll", price: 8.50, desc: "Tuna, spicy mayo, scallions, sesame (6 pcs)." },
    { name: "Yellowtail Nigiri", price: 7.25, desc: "Hamachi over sushi rice (2 pcs)." },
    { name: "Dragon Roll", price: 10.99, desc: "Eel, cucumber, avocado on top (8 pcs)." },
    { name: "Philadelphia Roll", price: 8.75, desc: "Salmon, cream cheese, cucumber (6 pcs)." },
    { name: "Shrimp Tempura Roll", price: 9.25, desc: "Fried shrimp, lettuce, spicy mayo (6 pcs)." },
    { name: "Avocado Roll", price: 6.00, desc: "Simple and fresh vegan roll (6 pcs)." }
  ],
  dessert: [
    { name: "Mochi Ice Cream", price: 4.99, desc: "Chewy rice cake with ice cream center (2 pcs)." },
    { name: "Matcha Cheesecake", price: 5.99, desc: "Green tea-flavored creamy cheesecake slice." },
    { name: "Taiyaki", price: 3.99, desc: "Fish-shaped cake filled with red bean paste." },
    { name: "Yuzu Sorbet", price: 4.50, desc: "Refreshing Japanese citrus ice dessert." },
    { name: "Black Sesame Ice Cream", price: 4.99, desc: "Nutty, earthy flavor with a creamy texture." },
    { name: "Tempura Banana", price: 6.25, desc: "Fried banana served with vanilla ice cream." }
  ],
  drinks: [
    { name: "Jasmine Tea", price: 2.50, desc: "Fragrant green tea brewed hot or iced." },
    { name: "Ramune Soda", price: 3.00, desc: "Classic Japanese marble soda (variety flavors)." },
    { name: "Matcha Latte", price: 4.00, desc: "Whisked matcha with steamed oat or dairy milk." },
    { name: "Calpico", price: 3.25, desc: "Sweet, milky non-carbonated Japanese soft drink." },
    { name: "Cold Brew Coffee", price: 3.50, desc: "Chilled coffee steeped overnight." },
    { name: "Sparkling Yuzu Water", price: 2.99, desc: "Carbonated water infused with citrusy yuzu." }
  ],
  lunch: [
    { name: "Mini Ramen & Roll Combo", price: 10.99, desc: "Half-size ramen and 4-piece California roll." },
    { name: "Chicken Katsu Bento", price: 11.99, desc: "Served with rice, salad, and miso soup." }
  ],
  dinner: [
    { name: "Deluxe Ramen Set", price: 16.99, desc: "Full-size ramen, side of gyoza, and drink." },
    { name: "Sushi Dinner Platter", price: 18.50, desc: "12 assorted sushi pieces + miso soup." }
  ]
};

function Menu({ cart, setCart }) {
  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("nav ul");

    const toggleMenu = () => navMenu.classList.toggle("show");

    if (hamburger && navMenu) {
      hamburger.addEventListener("click", toggleMenu);
    }

    return () => {
      if (hamburger && navMenu) {
        hamburger.removeEventListener("click", toggleMenu);
      }
    };
  }, []);

  const addToCart = (name, price, e) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex(item => item.name === name);

    if (itemIndex > -1) {
      updatedCart[itemIndex].quantity += 1;
    } else {
      updatedCart.push({ name, price, quantity: 1 });
    }

    setCart(updatedCart);
    showToast("✔ Item added to cart!");
    flyToCart(e.target);
  };

  const showToast = (message) => {
    const toast = document.getElementById("cart-toast");
    if (toast) {
      toast.textContent = message;
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 2000);
    }
  };

  const flyToCart = (button) => {
    const flyingItem = document.getElementById("flying-item");
    if (!flyingItem) return;

    const rect = button.getBoundingClientRect();
    flyingItem.style.left = `${rect.left + window.scrollX}px`;
    flyingItem.style.top = `${rect.top + window.scrollY}px`;
    flyingItem.classList.add("active");

    setTimeout(() => {
      flyingItem.style.left = `${window.innerWidth - 80}px`;
      flyingItem.style.top = `30px`;
      flyingItem.style.transform = "scale(0.4)";
    }, 50);

    setTimeout(() => {
      flyingItem.classList.remove("active");
      flyingItem.style.transform = "scale(1)";
    }, 800);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to Main Content</a>
      <main id="main-content">
        <section className="menu">
          <h1>Menu</h1>
          <p>Explore our delicious offerings, from savory ramen to fresh sushi and delightful desserts.</p>

          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="mb-10">
              <h2>
                {category === 'ramen' ? '🍜 Ramen' :
                  category === 'sushi' ? '🍣 Sushi' :
                  category === 'dessert' ? '🍰 Dessert' :
                  category === 'drinks' ? '🥤 Drinks' :
                  category === 'lunch' ? '🍱 Lunch Specials' :
                  category === 'dinner' ? '🍽 Dinner Combos' :
                  category}
              </h2>
              <div className="menu-grid">
                {items.map((item, index) => (
                  <div key={index} className="menu-card border p-4 rounded-lg shadow bg-white">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                    <span>${item.price.toFixed(2)}</span>
                    <button
                      onClick={(e) => addToCart(item.name, item.price, e)}
                      className="bg-rose-600 text-white py-1 px-4 rounded hover:bg-rose-700 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div id="cart-toast" className="cart-toast">✔ Item added to cart!</div>
          <div id="flying-item" className="flying-item"></div>
        </section>
      </main>

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
}

export default Menu;

