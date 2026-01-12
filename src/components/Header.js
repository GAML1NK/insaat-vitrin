import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <h1>İnşaat-Vitrin</h1>
        </div>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('hero')}>Anasayfa</button>
          <button onClick={() => scrollToSection('projects')}>Projeler</button>
          <button onClick={() => scrollToSection('about')}>Hakkımızda</button>
          <button onClick={() => scrollToSection('contact')}>İletişim</button>
        </nav>
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
