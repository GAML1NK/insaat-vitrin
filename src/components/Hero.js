import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/Hero.css';

const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section ref={ref} className={`hero ${isVisible ? 'fade-in' : ''}`}>
      <div className="container hero-content">
        <div className="hero-text">
          <h1>İnşaat-Vitrin</h1>
          <p className="subtitle">Kalite, Güven ve Uzun Yılların Deneyimi</p>
          <p className="description">
            Türkiye'nin en güvenilir inşaat firması olarak, 20+ yıllık deneyimimizle 
            hayalinizdeki projeleri gerçeğe dönüştürüyoruz.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => {
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }}>
              Projelerimizi Keşfedin
            </button>
            <button className="btn btn-secondary" onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
              İletişime Geçin
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <span>Hero Görseli</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
