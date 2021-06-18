import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/nav/Navbar';
import Home from './components/pages/Home.jsx';
import Skills from './components/pages/Skills.jsx';
import About from './components/pages/About.jsx';
import Projects from './components/pages/Projects.jsx';
import Contact from './components/pages/Contact.jsx';
import Footer from './components/footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
