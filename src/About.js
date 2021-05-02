import React from 'react';
import profilePhoto from './profile-photo.jpeg';

function About() {
  return (
    <div>
      <h1>About</h1>
      <img src={profilePhoto} alt="profile" />
    </div>
  );
}

export default About;
