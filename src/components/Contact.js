import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/Contact.css';

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılabilir
    console.log('Form Gönderildi:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Mesajınız başarıyla gönderildi!');
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Adres',
      content: 'İstanbul, Türkiye'
    },
    {
      icon: '📞',
      title: 'Telefon',
      content: '+90 (212) 555 - 0000'
    },
    {
      icon: '✉️',
      title: 'E-Posta',
      content: 'info@insaat-vitrin.com'
    },
    {
      icon: '🕐',
      title: 'Çalışma Saatleri',
      content: 'Pazartesi - Cumartesi 09:00 - 18:00'
    }
  ];

  return (
    <section id="contact" ref={ref} className={`contact ${inView ? 'fade-in' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2>İletişim</h2>
          <p>Projeleriniz hakkında bizimle iletişime geçin</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">{info.icon}</div>
                <div className="info-content">
                  <h3>{info.title}</h3>
                  <p>{info.content}</p>
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Adınız"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="E-posta Adresiniz"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Telefon Numaranız"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Mesajınız"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Gönder</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
