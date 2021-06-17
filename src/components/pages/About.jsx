import React from 'react';
import '../../App.scss';

import psulogo from '../../assets/images/psulogo.png';
import yonseilogo from '../../assets/images/yonseilogo.png';
import ychslogo from '../../assets/images/ychslogo.png';
import psuuas from '../../assets/images/psuuas.png';
import hackpsu from '../../assets/images/hackpsu.png';

function Education(props) {
  const { logo, school, url, degree, duration, location, description } = props;
  return (
    <div className="education">
      <div className="education__info">
        <div className="education__logo">
          <a href={url}>
            <img src={logo} alt={`${school} Logo`} />
          </a>
        </div>
        <div className="education__details">
          <div className="education__school">
            <h3>{school}</h3>
          </div>
          <div className="education__degree">
            <h4>{degree}</h4>
          </div>
          <div className="education__duration">{duration}</div>
          <div className="education__location">{location}</div>
        </div>
      </div>
      <div className="education__description">
        <ul>
          {description.map(x => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

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
    <div className="experience">
      <div className="experience__info">
        <div className="experience__logo">
          <a href={url}>
            <img src={logo} alt={`${organization} Logo`} />
          </a>
        </div>
        <div className="experience__details">
          <div className="experience__title">
            <h3>{title}</h3>
          </div>
          <div className="experience__organization">
            <h4>{organization}</h4>
          </div>
          <div className="experience__duration">{duration}</div>
          <div className="experience__location">{location}</div>
        </div>
      </div>
      <div className="experience__description">
        <ul>
          {description.map(x => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function About() {
  return (
    <>
      <div id="education" className="education-section container-fluid">
        <h1>Education</h1>
        <h2>Invest in knowledge</h2>
        <Education
          logo={psulogo}
          school="Penn State University"
          url="https://www.psu.edu/"
          degree="Bachelor of Science - Electrical Engineering"
          duration="Aug 2016 - May 2020"
          location="University Park, Pennsylvania"
          description={["Dean's List: Spring 2019, Fall 2019, Spring 2020"]}
        />
        <Education
          logo={yonseilogo}
          school="Yonsei University"
          url="https://oia.yonsei.ac.kr/default.asp"
          degree="Study Abroad"
          duration="Mar 2018 - Jun 2018"
          location="Seoul, South Korea"
          description={[]}
        />
        <Education
          logo={ychslogo}
          school="York Catholic High School"
          url="https://yorkcatholic.org/"
          degree="High School Diploma"
          duration="Aug 2012 - May 2016"
          location="York, Pennsylvania"
          description={[
            'Activities: Student Council, ALPHA Peer Helpers, Culture Club, Art Club, Rosa Mystica',
            'Societies: National Honor Society',
            'Atheletics: Varsity Soccer',
          ]}
        />
      </div>
      <div id="experience" className="experience-section container-fluid">
        <h1>Experience</h1>
        <h2>
          <span>Learn from the past experience, </span> prepare for future
          opportunities
        </h2>
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
        <Experience
          logo={psuuas}
          title="Electrical Team Member"
          organization="Penn State Unmanned Aerial Systems"
          url="https://uas.engr.psu.edu/"
          duration="Sep 2018 - Aug 2019"
          location="State College, Pennsylvania"
          description={[
            'Managed various electronic components of an unmanned aerial vehicle (UAV) for competing in AUVSI SUAS Competition',
          ]}
        />
        <Experience
          logo={psulogo}
          title="Food Service Worker"
          organization="Penn State Food Services"
          url="https://foodservices.psu.edu/"
          duration="Sep 2017 - Dec 2017"
          location="University Park, Pennsylvania"
          description={[
            'Provided food services to students at Pollock Commons',
            'Received 8% raise over 3 months',
          ]}
        />
        <Experience
          logo=""
          title="Private Tutor"
          organization="Self-employed"
          url=""
          duration="May 2017 - Aug 2017"
          location="Seoul, South Korea"
          description={[
            'Tutored middle school students on English, math, and science',
            'Students improved their grades by more than 10% on each subject',
          ]}
        />
        <Experience
          logo={hackpsu}
          title="Sponsorship Team Member"
          organization="HackPSU"
          url="https://hackpsu.org/"
          duration="Jan 2017 - Apr 2017"
          location="University Park, Pennsylvania"
          description={[
            'Organized a hackathon of 24 hours and over 500 students',
            'Communicated with companies and secured $6000 monetary sponsorship from ManTech and Linode',
          ]}
        />
      </div>
    </>
  );
}

export default About;
