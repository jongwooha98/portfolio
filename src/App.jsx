import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/pages/Home.jsx';
import Skills from './components/pages/Skills.jsx';
import About from './components/pages/About.jsx';
import Projects from './components/pages/Projects.jsx';
import Contact from './components/pages/Contact.jsx';
import Footer from './components/Footer.jsx';

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
