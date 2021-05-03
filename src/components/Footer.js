import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button.js';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer-container">
      <section className="section footer-subscription">
        <p className="footer-subscription-heading">Contact me via email</p>
        <p className="footer-subscription-text">Email text placeholder</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About</h2>
            <Link to="/contact">How it works</Link>
            <Link to="/">Link to.. placeholder</Link>
            <Link to="/">Link to.. placeholder</Link>
            <Link to="/">Link to.. placeholder</Link>
          </div>
          <div className="footer-link-items">
            <h2>About</h2>
            <Link to="/contact">How it works</Link>
            <Link to="/">Link to.. placeholder</Link>
            <Link to="/">Link to.. placeholder</Link>
            <Link to="/">Link to.. placeholder</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About</h2>
            <Link to="/contact">How it works</Link>
            <Link to="/">Link to.. placeholder</Link>
            <Link to="/">Link to.. placeholder</Link>
            <Link to="/">Link to.. placeholder</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/contact">How it works</Link>
            <Link to="/">Link to.. placeholder</Link>
            <Link to="/">Link to.. placeholder</Link>
            <Link to="/">Link to.. placeholder</Link>
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
          <small className="website-rights">JWH © 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="Linkedin"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
