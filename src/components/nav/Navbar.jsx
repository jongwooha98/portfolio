import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import './_navbar.scss';
import logo from '../../assets/images/logo.png';

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
    <nav className="navbar sticky-top">
      <ScrollToTop />
      <div className="navbar__container container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" />
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
          <i className="toggler-icon fas fa-bars" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-collapse__top">
            <Link className="navbar-brand" to="/" onClick={handleCollapse}>
              <img src={logo} alt="" />
            </Link>
            <button
              className="navbar-collapse__toggler"
              type="button"
              onClick={handleCollapse}
            >
              <i className="toggler-icon far fa-times-circle" />
            </button>
          </div>

          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/" onClick={handleCollapse}>
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#skills" onClick={handleCollapse}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/#experience"
                onClick={handleCollapse}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/#education"
                onClick={handleCollapse}
              >
                Education
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
