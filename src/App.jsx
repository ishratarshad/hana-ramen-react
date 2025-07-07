// App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import './App.css';

function App() {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
