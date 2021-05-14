import React from 'react';
import './Navbar.scss';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home-section">
          JongWoo Ha
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarToggler"
        >
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active">
              <a className="nav-link" href="#home-section">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills-section">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience-section">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education-section">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects-section">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-section">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
