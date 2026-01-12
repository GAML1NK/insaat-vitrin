import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>İnşaat-Vitrin</h3>
            <p>Kalite, güven ve uzun yılların deneyimi ile hayalinizdeki projeleri gerçekleştiriyoruz.</p>
          </div>
          <div className="footer-section">
            <h4>Hızlı Bağlantılar</h4>
            <ul>
              <li><a href="#projects">Projeler</a></li>
              <li><a href="#about">Hakkımızda</a></li>
              <li><a href="#contact">İletişim</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>İletişim</h4>
            <ul>
              <li>📞 +90 (212) 555 - 0000</li>
              <li>✉️ info@insaat-vitrin.com</li>
              <li>📍 İstanbul, Türkiye</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Sosyal Medya</h4>
            <ul className="social-links">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} İnşaat-Vitrin. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
