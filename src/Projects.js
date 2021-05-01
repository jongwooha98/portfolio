import React from 'react';
import Thumbnail from './Thumbnail.js';
import './App.css';

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="/twitter"
        image="http://twitter-image-url.jpg"
        title="Twitter Newsfeed"
        category="Mobile App"
      />

      <Thumbnail
        link="/airbnb"
        image="http://airbnb-image-url.jpg>"
        title="Airbnb Experiences"
        category="Website"
      />

      <Thumbnail
        link="/photoshop"
        image="http://photoshop-image-url.jpg"
        title="Photoshop Redesign"
        category="Desktop App"
      />
    </div>
  );
}

export default Projects;
