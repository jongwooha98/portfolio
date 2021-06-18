import React, { useState } from 'react';
// import Cards from '../Cards.jsx';
import './_projects.scss';

import items from './projectsData';
import Menu from './Menu';
import Button from './Button';

const allCategories = ['All', ...new Set(items.map(item => item.category))];

console.log(allCategories);

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
          <h1>
            Portfolio<span>Filter</span>
          </h1>
        </div>
        <Button button={buttons} filter={filter} />
        <Menu menuItem={menuItem} />
      </div>
    </>
  );
}
