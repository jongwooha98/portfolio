import React from 'react';
import { Button } from './Button.jsx';
import '../App.scss';
import './HeroSection.scss';

function HeroSection() {
  return (
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
  );
}

export default HeroSection;
