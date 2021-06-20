import React, { useState } from 'react';
// import Button from './Button';
// import Menu from './Menu';
import items from './projectsData';
// import Cards from '../Cards.jsx';
import './_projects.scss';

const allCategories = ['All', ...new Set(items.map(item => item.category))];

// console.log(allCategories);

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
          <div className="item__container" key={item.id}>
            <div className="item__details">
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default function Projects() {
  const [menuItem, setMenuItem] = useState(items); // eslint-disable-line no-unused-vars
  const [buttons, setButtons] = useState(allCategories); // eslint-disable-line no-unused-vars

  const filter = button => {
    if (button === 'All') {
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    <>
      <div className="projects-section">
        <div className="title">
          <h1>Projects</h1>
          <p>Filter</p>
        </div>

        <div className="buttons">
          <Button button={buttons} filter={filter} />
        </div>
        <div className="items">
          <Menu menuItem={menuItem} />
        </div>
      </div>
    </>
  );
}
