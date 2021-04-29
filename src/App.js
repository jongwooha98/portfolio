import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.png';
import './App.css';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
        <div className="navigation">
          <img src={logo} className="logo" alt="Logo Image" />
          <div className="navigation-sub">
            <button type="button" class="btn btn-outline-primary">
              <Link to="/" className="item">Projects</Link>
            </button>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>
          </div>
        </div>
      </div>
  </BrowserRouter>
  );
}
 
export default App;