import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/Projects.css';

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Apartman Kompleksi',
      category: 'residential',
      image: 'residential-1',
      description: '250 Daireshli Modern Yaşam Alanı'
    },
    {
      id: 2,
      title: 'Ticari İş Merkezi',
      category: 'commercial',
      image: 'commercial-1',
      description: '15 Katlı Ofis ve Perakende Alanı'
    },
    {
      id: 3,
      title: 'Villa Projesi',
      category: 'residential',
      image: 'residential-2',
      description: 'Lüks Yaşam Biçimi Villaları'
    },
    {
      id: 4,
      title: 'Alışveriş Merkezi',
      category: 'commercial',
      image: 'commercial-2',
      description: '50,000 m² Alışveriş Alanı'
    },
    {
      id: 5,
      title: 'Hastane Yapısı',
      category: 'industrial',
      image: 'industrial-1',
      description: '200 Yatak Kapasiteli Modern Hastane'
    },
    {
      id: 6,
      title: 'Fabrika Kompleksi',
      category: 'industrial',
      image: 'industrial-2',
      description: 'Endüstriyel İmalat Tesisi'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" ref={ref} className={`projects ${inView ? 'fade-in' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2>Başarıyla Tamamladığımız Projeler</h2>
          <p>Kalite ve Yüksek Mühendislik Standartlarıyla Hayata Geçirilen Projeler</p>
        </div>

        <div className="filter-buttons">
          <button 
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            Tümü
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'residential' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('residential')}
          >
            Konut
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'commercial' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('commercial')}
          >
            Ticari
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'industrial' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('industrial')}
          >
            Endüstriyel
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">{project.image}</div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="description">{project.description}</p>
                <button className="view-btn">Detayları Gör</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
