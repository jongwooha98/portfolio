import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/pages/Home.js';
import Projects from './components/pages/Projects.js';
import Contact from './components/pages/Contact.js';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
