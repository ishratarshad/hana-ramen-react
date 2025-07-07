import React from 'react';
import '../App.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg"
];

const Gallery = () => (
  <>
    <a href="#main-content" className="skip-link">Skip to Main Content</a>
    <main id="main-content">
      <section className="gallery">
        <h1>Gallery</h1>
        <p>Take a look inside Hana Ramen — from our signature dishes to our cozy interior.</p>
        <div className="gallery-swiper">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            style={{ width: "100%", maxWidth: 700 }}
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img src={src} alt={`Gallery ${idx + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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

export default Gallery;
