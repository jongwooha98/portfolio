import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import './Navbar.scss';
// Scroll to top of page(section) when navigating

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function Navbar() {
  const handleCollapse = () => {
    document.getElementById('navbarNav').classList.remove('show');
    document.getElementById('navbarBtn').classList.add('collapsed');
    document.body.classList.toggle('lock-scroll');
  };

  function lockScroll() {
    document.body.classList.toggle('lock-scroll');
  }
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light">
      <ScrollToTop />

      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          JongWoo Ha
        </Link>
        <button
          className="navbar-toggler"
          id="navbarBtn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={lockScroll}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active">
              <Link className="nav-link" to="/" onClick={handleCollapse}>
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about#education"
                onClick={handleCollapse}
              >
                Education
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about#experience"
                onClick={handleCollapse}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills" onClick={handleCollapse}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/projects"
                onClick={handleCollapse}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleCollapse}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
