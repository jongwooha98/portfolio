import React from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/pages/Home.js';
import Skills from './components/pages/Skills.js';
import About from './components/pages/About.js';
import Projects from './components/pages/Projects.js';
import Contact from './components/pages/Contact.js';
import Footer from './components/Footer.js';

import './App.scss';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
