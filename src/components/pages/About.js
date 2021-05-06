import React from 'react';
import '../../App.scss';

import psulogo from '../../assets/images/psulogo.png';
import psuuas from '../../assets/images/psuuas.png';

function Experience(props) {
  const {
    logo,
    title,
    organization,
    url,
    duration,
    location,
    description,
  } = props;
  return (
    <div className="experience d-flex flex-wrap">
      <div className="d-flex flex-row">
        <div className="experience__logo item">
          <a href={url}>
            <img src={logo} alt={`${organization} Logo`} />
          </a>
          <div className="expereience__title item">
            <h3>{title}</h3>
          </div>
        </div>
        <div className="experience__organization">
          <h4>{organization}</h4>
        </div>
      </div>

      <div className="d-flex flex-row">
        <div className="experience__duration">{duration}</div>
        <div className="experience__location">{location}</div>
        <div className="experience__description">
          <ul>
            {description.map(x => (
              <li>{x}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <div className="about__intro">
        <h1>Hi, I&apos;m Jong</h1>
      </div>
      <div className="about-container">
        <div className="education-section">
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
        <div className="experience-section">
          <h2>Experience</h2>
          <Experience
            logo={psulogo}
            title="Lab Assistant"
            organization="Penn State College of Engineering"
            url="https://www.eecs.psu.edu/"
            duration="Jan 2020 - May 2020"
            location="State College, Pennsylvania"
            description={[
              'Worked with professors and teaching assistants to answer questions from students',
              'Helped debug students’ circuits, which include diode, MOSFET, BJT, and op-amp',
              'Verified data/measurement taken using oscilloscope, DMM, and Multisim',
            ]}
          />
          <Experience
            logo={psulogo}
            title="Resident Assistant"
            organization="Penn State Residence Life"
            url="https://studentaffairs.psu.edu/reslife"
            duration="Aug 2019 - May 2020"
            location="University Park, Pennsylvania"
            description={[
              'Developed an inclusive community and created a positive atmosphere among 300 residents',
              'Ensured the safety of residents by enforcing University and Housing policies',
            ]}
          />
          <Experience
            logo={psuuas}
            title="Electrical Subsystems Lead"
            organization="Penn State Unmanned Aerial Systems"
            url="https://uas.engr.psu.edu/"
            duration="Aug 2019 - May 2020"
            location="State College, Pennsylvania"
            description={[
              'Developed an inclusive community and created a positive atmosphere among 300 residents',
              'Ensured the safety of residents by enforcing University and Housing policies',
            ]}
          />
        </div>

        <div className="skills-section">
          <h2>Skills</h2>
        </div>
      </div>
    </div>
  );
}

export default About;
