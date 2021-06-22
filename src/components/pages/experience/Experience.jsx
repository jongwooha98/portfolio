import React, { useState } from 'react';
import './_experience.scss';

import experienceListData from './experienceList';

const experienceList = experienceListData.reverse(); // reversed data, so latest item is shown first.

const allCategories = ['All'].concat([
  ...new Set(experienceList.map(item => item.category)),
]);

function Button({ button, filter }) {
  return (
    <>
      {button.map(category => {
        return (
          <button
            className="button"
            type="button"
            onClick={() => filter(category)}
          >
            {category}
          </button>
        );
      })}
    </>
  );
}

function Menu({ menuItem }) {
  return (
    <>
      {menuItem.map(item => {
        return (
          <div className="experience" key={item.id}>
            <div className="experience__info">
              <div className="experience__logo">
                <a href={item.url}>
                  <img src={item.logo} alt={`${item.organization} Logo`} />
                </a>
              </div>
              <div className="experience__details">
                <div className="experience__title">
                  <h3>{item.title}</h3>
                </div>
                <div className="experience__organization">
                  <h4>{item.organization}</h4>
                </div>
                <div className="experience__duration">{item.duration}</div>
                <div className="experience__location">{item.location}</div>
              </div>
            </div>
            <div className="experience__description">
              <ul>
                {item.description.map(x => (
                  <li>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
}

function Experience() {
  // const itemsReversed = experienceList; // reversed data, so latest item is shown first.
  const [menuItem, setMenuItem] = useState(experienceList); // eslint-disable-line no-unused-vars
  const [buttons, setButtons] = useState(allCategories); // eslint-disable-line no-unused-vars

  const filter = button => {
    if (button === 'All') {
      setMenuItem(experienceList);
      return;
    }

    const filteredData = experienceList.filter(
      item => item.category === button,
    );
    setMenuItem(filteredData);
  };
  return (
    <>
      <div id="experience" className="experience-section container-fluid">
        <h1>Experience</h1>
        <h2>
          <span>Learn from the past experience, </span> prepare for future
          opportunities
        </h2>
        <div className="buttons">
          <Button button={buttons} filter={filter} />
        </div>
        <div>
          <Menu menuItem={menuItem} />
        </div>
      </div>
    </>
  );
}

export default Experience;
