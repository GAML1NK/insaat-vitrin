import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/About.css';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const stats = [
    { number: '20+', label: 'Yıl Deneyim' },
    { number: '500+', label: 'Tamamlanan Proje' },
    { number: '50+', label: 'Çalışan Ekip' },
    { number: '100%', label: 'Müşteri Memnuniyeti' }
  ];

  return (
    <section ref={ref} className={`about ${inView ? 'fade-in' : ''}`}>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Hakkımızda</h2>
            <p>
              İnşaat-Vitrin, Türkiye'nin öncü inşaat firmalarından biri olarak, 20 yılı aşkın 
              deneyimle konut, ticari ve endüstriyel projeler gerçekleştirmektedir. Kalite, 
              güvenlik ve müşteri memnuniyeti ilkelerimizin merkezinde yer alır.
            </p>
            <p>
              Mimarlar, mühendisler ve teknisyenlerden oluşan profesyonel ekibimiz, 
              her projeyi titiz bir şekilde yönetir ve en yüksek standartları sağlar.
            </p>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">Şirket Görseli</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
