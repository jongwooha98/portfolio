import React from 'react';
import '../../App.scss';
import HeroSection from '../HeroSection.js';

function Home() {
  return (
    <div>
      <HeroSection />
      <div className="about">
        <div className="about__intro">
          <h1>Hi, I&apos;m Jong</h1>
        </div>
        <div className="about-container">
          <div className="about__education">
            <h2>Education</h2>
            <div className="about__education__item">
              <h3>Penn State University</h3>
              <p className="about__education__text">text</p>
            </div>
            <div className="about__education__item">
              <h3>Yonsei University</h3>
              <p className="about__education__text">Text</p>
            </div>
            <div className="about__education__item">
              <h3>York Catholic High School</h3>
              <p className="about__education__text">Text</p>
            </div>
          </div>
          <div className="about__experience">
            <h2>Experience</h2>
          </div>
          <div className="about__skills">
            <h2>Skills</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
