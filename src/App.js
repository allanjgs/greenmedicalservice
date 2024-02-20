import React from 'react';

// import aos
import Aos from 'aos';
// import aos css
import 'aos/dist/aos.css';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Whatsapp from './components/Whatsapp';


const App = () => {
  // initialize aos
  Aos.init({
    duration: 1800,
    offset: 100,
  })
  return (
    <div className='overflow-hidden'>
      <Whatsapp/>
      <Header />
      <Hero />
      <Overview />
      <Services />
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;
