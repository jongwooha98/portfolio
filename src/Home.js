import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Home.css';
// import About from './About.js';
import Projects from './Projects.js';
import Navigation from './Navigation.js';

function Home() {
  return (
    <BrowserRouter>
      <Navigation />

      <footer className="static-bottom">
        <div className="container">
          <div className="row">
            <div className="col">
              <div>About</div>
              <div>Handcrafted with React</div>
            </div>

            <div className="col">
              <div>Explore</div>
              <li>
                <ul>
                  <Link to="/articles" className="item">
                    Articles
                  </Link>
                </ul>
                <ul>
                  <Link to="/projects" className="item">
                    Projects
                  </Link>
                </ul>
              </li>
            </div>

            <div className="col">Follow</div>
          </div>
        </div>
      </footer>

      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
    </BrowserRouter>
  );
}

export default Home;
