import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button.js';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // nav button appears when window width <= 960,
  // then dissapears when the width is larger than that
  const showButton = () => {
    if (window.indderWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            JWH <i className="fas fa-circle-notch " />
          </Link>
          <div
            role="button"
            tabIndex="0"
            className="menu-icon"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link-mobile"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Contact</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
