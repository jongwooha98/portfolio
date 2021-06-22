import React, { useState } from 'react';
// import Button from './Button';
// import Menu from './Menu';
import items from './projectsData';
// import Cards from '../Cards.jsx';
import './_projects.scss';

const allCategories = ['All'].concat(
  [...new Set(items.map(item => item.category))].reverse(),
);

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
    <div className="item">
      {menuItem.map(item => {
        // Neither href nor pdf exist
        if (item.href === null && item.pdf === null) {
          return (
            <div className="item__container" key={item.id}>
              <a
                className="thumbnail"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <img src={item.image} alt="" />
              </a>
              <h2>{item.title}</h2>
              <em>{item.misc}</em>
              <p>{item.description}</p>
            </div>
          );
        }
        // Only href exists
        if (item.href === null && item.pdf !== null) {
          return (
            <div className="item__container" key={item.id}>
              <a
                className="thumbnail"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <img src={item.image} alt="" />
              </a>
              <h2>{item.title}</h2>
              <em>{item.misc}</em>
              <p>{item.description}</p>
              <div className="links">
                <a href={item.pdf} target="_blank" rel="noreferrer">
                  View PDF&nbsp; <i className="far fa-file-pdf" />
                </a>
              </div>
            </div>
          );
        }
        // Only pdf exists
        if (item.pdf === null && item.href !== null) {
          return (
            <div className="item__container" key={item.id}>
              <a
                className="thumbnail"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <img src={item.image} alt="" />
              </a>
              <h2>{item.title}</h2>
              <em>{item.misc}</em>
              <p>{item.description}</p>
              <div className="links">
                <a href={item.href} target="_blank" rel="noreferrer">
                  Project Link&nbsp;
                  <i className="fas fa-external-link-alt" />
                </a>
              </div>
            </div>
          );
        }
        // Both href and pdf exist
        return (
          <div className="item__container" key={item.id}>
            <a
              className="thumbnail"
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.image} alt="" />
            </a>
            <h2>{item.title}</h2>
            <em>{item.misc}</em>
            <p>{item.description}</p>
            <div className="links">
              <a href={item.pdf} target="_blank" rel="noreferrer">
                View PDF
                <i className="far fa-file-pdf" />
              </a>
              <a href={item.href} target="_blank" rel="noreferrer">
                Project Link &nbsp;
                <i className="fas fa-external-link-alt" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Projects() {
  const itemsReversed = items.reverse(); // reversed data, so latest item is shown first.
  const [menuItem, setMenuItem] = useState(itemsReversed); // eslint-disable-line no-unused-vars
  const [buttons, setButtons] = useState(allCategories); // eslint-disable-line no-unused-vars
  console.log(items.reverse());
  console.log(menuItem);
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
