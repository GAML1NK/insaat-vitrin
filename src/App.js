import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Header />
        <main>
          <section id="hero">
            <Hero />
          </section>
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
