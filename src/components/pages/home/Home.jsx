import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './_home.scss';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

const Button = ({ children, onClick, buttonStyle, buttonSize, linkTo }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link to={linkTo} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
    </Link>
  );
};

function Home() {
  return (
    <div>
      <div className="home-section">
        <h1>JONGWOO HA</h1>
        <h2>Front End Developer</h2>
        <div className="hero-btns">
          <Button
            linkTo="/projects"
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Explore Projects
          </Button>
          <Button
            linkTo="/contact"
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Contact
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Download Resume <i className="far fa-file-pdf" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
