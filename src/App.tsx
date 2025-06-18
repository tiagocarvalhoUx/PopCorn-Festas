import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Footer from './components/footer';
import WhatsAppButton from './components/whatsappbutton';
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

