import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './_footer.scss';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-link">
        <div className="footer-link__item">
          <h2>About</h2>
          <p>
            Handcrafted with <br />
            React and Bootstrap
          </p>
        </div>
        <div className="footer-link__item">
          <h2>Explore</h2>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-link__item">
          <h2>Follow</h2>
          <a
            href="https://www.linkedin.com/in/jongwooha"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jongwooha98"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
      <section className="social-media">
        <div className="footer-copyright">
          <Link to="/" className="copyright">
            <small>JongWoo Ha © 2021</small>
          </Link>
        </div>
        <div className="social-icons">
          <a
            className="social-icon-link linkedin"
            href="https://www.linkedin.com/in/jongwooha"
            rel="noreferrer"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            className="social-icon-link instagram"
            href="https://github.com/jongwooha98"
            rel="noreferrer"
            target="_blank"
            aria-label="GitHub"
          >
            <i className="fab fa-github" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Footer;
