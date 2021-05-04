import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About</h2>
            <p>
              Handcrafted with <br />
              React and Sass
            </p>
          </div>
          <div className="footer-link-items">
            <h2>Explore</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Follow</h2>
            <Link
              to={{ pathname: 'https://www.linkedin.com/in/jongwooha' }}
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link
              to={{ pathname: 'https://github.com/jongwooha98' }}
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              JWH <i className="fas fa-circle-notch" />
            </Link>
          </div>
          <small className="copyright">JONGWOO HA © 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link linkedin"
              to={{ pathname: 'https://www.linkedin.com/in/jongwooha' }}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to={{ pathname: 'https://github.com/jongwooha98' }}
              target="_blank"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
