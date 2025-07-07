import React, { useEffect, useState } from 'react';
import '../App.css';

function Cart({ cart, setCart }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalPrice.toFixed(2));
  }, [cart]);

  const updateQuantity = (index, delta) => {
    const newCart = [...cart];
    newCart[index].quantity += delta;
    if (newCart[index].quantity <= 0) {
      newCart.splice(index, 1);
    }
    setCart(newCart);
    showToast("✔ Cart updated!");
  };

  const setQuantity = (index, value) => {
    const newCart = [...cart];
    const qty = parseInt(value);
    newCart[index].quantity = !isNaN(qty) && qty > 0 ? qty : 1;
    setCart(newCart);
    showToast("✔ Cart updated!");
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    showToast("✔ Item removed!");
  };

  const clearCart = () => {
    setCart([]);
    showToast("🗑️ Cart cleared!");
  };

  const showToast = (message) => {
    const toast = document.getElementById("cart-toast");
    if (toast) {
      toast.textContent = message;
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 2000);
    }
  };


  return (
    <>
      {/* Skip link */}
      <a href="#main-content" className="skip-link">Skip to Main Content</a>

    {/* Main content */} 
    <main id="main-content" className="cart-page">
      <div className="top-menu-link">
        <a href="/menu" className="back-to-menu text-rose-700 underline">← Back to Menu</a>
      </div>
      <h1 className="text-3xl font-bold my-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul id="cart-items" className="space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="p-4 border rounded bg-white shadow flex flex-col md:flex-row justify-between items-center">
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <div className="quantity-controls my-2">
                    <button onClick={() => updateQuantity(index, -1)} className="qty-btn">−</button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => setQuantity(index, e.target.value)}
                      className="qty-input"
                    />
                    <button onClick={() => updateQuantity(index, 1)} className="qty-btn">+</button>
                  </div>
                </div>
                <div className="text-right">
                  <span className="item-total font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                  <div>
                    <button onClick={() => removeFromCart(index)} className="text-sm text-rose-600 underline mt-2">Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <span className="cart-total">Total: ${total}</span>
            <button onClick={clearCart} className="clear-cart-btn">Clear Cart</button>
          </div>
        </>
      )}

      <div id="cart-toast" className="cart-toast">✔ Cart updated!</div>
      <div id="flying-item" className="flying-item"></div>
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
}

export default Cart;