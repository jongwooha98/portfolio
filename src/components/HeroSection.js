import React from 'react';
import { Button } from './Button.js';
import '../App.scss';
import './HeroSection.scss';
import video2 from '../assets/videos/video-2.mp4';

function HeroSection() {
  return (
    <div className="hero-container">
      <video autoPlay loop muted>
        <source src={video2} type="video/mp4" />
        <p>Your browser cannot play the provided video file.</p>
      </video>

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
