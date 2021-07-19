import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './_footer.scss';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-link">
        <div className="footer-link__item">
          <h2>About</h2>
          <span>
            Handcrafted with <br />
            React and Sass
          </span>
        </div>
        <div className="footer-link__item">
          <h2>Explore</h2>
          <Link to="/#skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/#experience">Experience</Link>
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
        <div className="footer-copyright">
          <Link to="/" className="copyright">
            <small>Designed and Coded by JongWoo Ha © 2021</small>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Footer;
