import React from 'react';
import { Button } from './Button.js';
import '../App.css';
import './HeroSection.scss';
import video2 from '../assets/videos/video-2.mp4';

function HeroSection() {
  return (
    <div className="hero-container">
      <video autoPlay loop muted>
        <source src={video2} type="video/mp4" />
        <p>Your browser cannot play the provided video file.</p>
      </video>

      <h1>ADVENTURE AWAITS</h1>
      <p>what are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
