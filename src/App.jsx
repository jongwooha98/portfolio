import React from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/pages/Home.jsx';
import Skills from './components/pages/Skills.js';
import About from './components/pages/About.js';
import Projects from './components/pages/Projects.js';
import Contact from './components/pages/Contact.jsx';
import Footer from './components/Footer.js';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
