import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Home.css';
import Projects from './Projects.js';
import Navigation from './Navigation.js';

import profilePhoto from './profile-photo.jpeg';

function Home() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container">
        <div className="row">
          <h1>About</h1>
          <img className="profilePhoto" src={profilePhoto} alt="profile" />
        </div>
        <div className="row section">
          <h2>Education</h2>
        </div>
        <div className="row section">
          <h2>Experience</h2>
        </div>
        <div className="row">
          <h2>Projects</h2>
        </div>
        <div className="row">
          <h2>Skills</h2>
        </div>
      </div>
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
                  <Link to="/about" className="item">
                    About
                  </Link>
                </ul>
                <ul>
                  <Link to="/projects" className="item">
                    Projects
                  </Link>
                </ul>
              </li>
            </div>

            <div className="col">
              <div>Follow</div>
              <section id="social-media-section" className="container-fluid">
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/jongwoo-ha-1678b4102/"
                      target="top"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/jongwooha98" target="top">
                      <i className="fab fa-github" />
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </footer>

      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
    </BrowserRouter>
  );
}

export default Home;
