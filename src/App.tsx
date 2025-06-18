import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;

