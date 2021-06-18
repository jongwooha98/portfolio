import React from 'react';
import { Button } from '../../Button';
import './_home.scss';

function Home() {
  return (
    <div>
      <div className="hero-container">
        <h1>JONGWOO HA</h1>
        <p>Front End Developer</p>
        <div className="hero-btns">
          <Button
            linkTo="/contact"
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            CONTACT
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            DOWNLOAD RESUME <i className="far fa-file-pdf" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
