import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Navbar from './components/nav/Navbar';
import Education from './components/pages/education/Education.jsx';
import Experience from './components/pages/experience/Experience.jsx';
import Contact from './components/pages/contact/Contact.jsx';
import Home from './components/pages/home/Home';
import Projects from './components/pages/projects/Projects.jsx';
import Skills from './components/pages/skills/Skills.jsx';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/experience" component={Experience} />
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
