import React, { useEffect } from 'react';
import './App.css';
import FullMenu from './components/FullMenu';
import Reviews from './components/Reviews';
import './components/styles.css';
import nomuLogo from './assets/nomulogo.webp';

function App() {
  
  // Subtle scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      {/* Ambient Glow Orbs */}
      <div className="ambient-orb orb-1"></div>
      <div className="ambient-orb orb-2"></div>
      
      {/* Navigation */}
      <nav className="header">
        <div className="logo-container">
          <img src={nomuLogo} alt="NOMU Logo" className="logo-img" />
          <span className="logo-text">NOMU</span>
        </div>
        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#visit" className="nav-link">Visit Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1 className="hero-title text-gradient">A Symphony of Flavors</h1>
          <p className="hero-subtitle">Japanese Creative Fusion Cafe & Bistro in Surabaya</p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#full-menu" className="btn">Explore Menu</a>
            <a href="https://food.grab.com/id/en/restaurant/nomu-cafe-and-bistro-plaza-graha-famili-delivery/6-C3EDN2XCTYUZHA?sourceID=20240709_172632_F2CB0C680C51415DB6B27D5E6B3389B6_MEXMPS" target="_blank" rel="noopener noreferrer" className="btn btn-grab">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12C24 5.373 18.627 0 12 0zm-1.8 17.514a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm0-5.814a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm3.6-1.129a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6z" fill="#00B14F"/>
              </svg>
              Order on GrabFood
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="menu" className="section reveal">
        <div className="section-header">
          <h2 className="section-title text-gradient">Signature Dishes</h2>
        </div>
        <div className="menu-grid">
          
          <div className="menu-card glass-panel reveal">
            <div className="menu-img-wrapper">
              <img src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80" alt="Shoyu Butter Mentaiko Pasta" className="menu-img" />
            </div>
            <div className="menu-info">
              <h3>Shoyu Butter Mentaiko Pasta</h3>
              <p>An exquisite blend of rich shoyu butter and delicate mentaiko, creating a perfect umami balance.</p>
            </div>
          </div>

          <div className="menu-card glass-panel reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="menu-img-wrapper">
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80" alt="Steak Don" className="menu-img" />
            </div>
            <div className="menu-info">
              <h3>Premium Steak Don</h3>
              <p>Tender, perfectly seared steak served over a bed of warm Japanese rice with our signature sauce.</p>
            </div>
          </div>

          <div className="menu-card glass-panel reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="menu-img-wrapper">
              <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&q=80" alt="Dutch Pancake" className="menu-img" />
            </div>
            <div className="menu-info">
              <h3>Dutch Pancake 5 Hours Pork Shoulder</h3>
              <p>Slow-cooked to perfection, paired with fluffy Dutch pancakes for a unique sweet and savory experience.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Full Menu Section */}
      <FullMenu />

      {/* Reviews Section */}
      <Reviews />

      {/* Info Section */}
      <section id="visit" className="info-section">
        <div className="info-grid reveal">
          <div className="info-content">
            <h2 className="text-gradient">Experience NOMU</h2>
            <p>NOMU is more than just a dining destination; it is an exploration of culinary artistry. We blend traditional Japanese techniques with bold Western influences to create a menu that is both familiar and exciting.</p>
            
            <div className="info-details">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <p>Ruko Plaza Graha Famili B9<br/>Surabaya, Jawa Timur, Indonesia</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📱</span>
                <div>
                  <strong>Instagram</strong>
                  <p><a href="https://www.instagram.com/_justnomu" target="_blank" rel="noopener noreferrer">@_justnomu</a></p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🛵</span>
                <div>
                  <strong>Delivery</strong>
                  <p><a href="https://food.grab.com/id/en/restaurant/nomu-cafe-and-bistro-plaza-graha-famili-delivery/6-C3EDN2XCTYUZHA" target="_blank" rel="noopener noreferrer" style={{ color: '#00B14F', fontWeight: '500' }}>Order via GrabFood</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-panel p-0 overflow-hidden" style={{ borderRadius: '16px', overflow: 'hidden' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.654898144208!2d112.67341857500004!3d-7.280053992726588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fd78c9f8d83b%3A0x37e1a774fb9eb62d!2sNOMU%20Cafe%20and%20Bistro!5e0!3m2!1sen!2sid!4v1714470195655!5m2!1sen!2sid" 
              width="100%" 
              height="450" 
              style={{ border: 0, display: 'block' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="NOMU Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer reveal">
        <div className="social-links">
          <a href="https://www.instagram.com/_justnomu" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} NOMU Cafe & Bistro. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
