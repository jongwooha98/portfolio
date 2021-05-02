import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar sticky-top">
      <Link to="/" className="navbar-brand">
        JONGWOO HA
      </Link>
      <div className="collapse navbar-collapse">
        <li className="nav-item">
          <Link to="/projects" className="item">
            Projects
          </Link>
        </li>
      </div>
    </nav>
  );
}

export default Navigation;
