import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Projects from './components/pages/Projects.js';
import Contact from './components/pages/Contact.js';
import PageNotFound from './components/pages/PageNotFound.js';
import Footer from './components/Footer.js';

import './App.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
