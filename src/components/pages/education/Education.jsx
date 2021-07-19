import React from 'react';
import './_education.scss';

import psulogo from '../../../assets/images/psulogo.png';
import yonseilogo from '../../../assets/images/yonseilogo.png';
import ychslogo from '../../../assets/images/ychslogo.png';

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

function EducationSection() {
  return (
    <>
      <div id="education" className="education-section container-fluid">
        <h1>Education</h1>
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
    </>
  );
}

export default EducationSection;
