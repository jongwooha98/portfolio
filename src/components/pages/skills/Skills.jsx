import React from 'react';
import { Link } from 'react-router-dom';
import './_skills.scss';

function Skill(props) {
  const { skill, icon, logoColor } = props;
  return (
    <>
      <div className={`${skill} skill`} style={{ backgroundColor: logoColor }}>
        <i className={icon} />
      </div>
    </>
  );
}

function Skills() {
  return (
    <>
      <div id="skills" className="skills-section container-fluid">
        <div className="title">
          <h1>Skills</h1>
        </div>
        <div className="skills-wrapper">
          <Skill skill="html5" icon="fab fa-html5" logoColor="#e34f26" />
          <Skill skill="css3" icon="fab fa-css3-alt" logoColor="#2965f1" />
          <Skill skill="javascript" icon="fab fa-js" logoColor="#f7df1e" />
          <Skill skill="react" icon="fab fa-react" logoColor="#00d8ff" />
          <Skill
            skill="bootstrap"
            icon="fab fa-bootstrap"
            logoColor="#563d7c"
          />
          <Skill skill="sass" icon="fab fa-sass" logoColor="#cc6699" />
          <Skill skill="node-js" icon="fab fa-node" logoColor="#6cc24a" />
        </div>
        <div className="to-projects">
          <p>Check out projects using these skills!</p>
          <Link to="/projects">
            <button className="to-projects__link" type="button">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
              </span>
              <span className="button-text">Explore Projects</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Skills;
