import React from 'react';
import Header from './components/header.tsx';
import Hero from './components/hero.tsx';
import About from './components/about.tsx';
import Services from './components/services.tsx';
import Gallery from './components/gallery.tsx';
import Footer from './components/footer.tsx';
import WhatsAppButton from './components/whatsappbutton.tsx';
import './App.css';

const App = () => {
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