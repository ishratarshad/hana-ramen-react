import React, { useEffect } from 'react';
import '../App.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gallery = () => {
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
      <a href="#main-content" className="skip-link">Skip to Main Content</a>


      <main id="main-content">
        <section className="gallery">
          <h1>Gallery</h1>
          <p>Take a look inside Hana Ramen — from our signature dishes to our cozy interior.</p>

          <Swiper
            className="mySwiper"
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide><img src="/images/gallery1.jpg" alt="Ramen Bowl" /></SwiperSlide>
            <SwiperSlide><img src="/images/gallery2.jpg" alt="Sushi Platter" /></SwiperSlide>
            <SwiperSlide><img src="/images/gallery3.jpg" alt="Dining Interior" /></SwiperSlide>
            <SwiperSlide><img src="/images/gallery4.jpg" alt="Chef at Work" /></SwiperSlide>
            <SwiperSlide><img src="/images/gallery5.jpg" alt="Mochi Dessert" /></SwiperSlide>
            <SwiperSlide><img src="/images/gallery6.jpg" alt="Lighting and Tables" /></SwiperSlide>
          </Swiper>
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
};

export default Gallery;
