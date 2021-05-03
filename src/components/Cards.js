import React from 'react';
import CardItem from './CardItem.js';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon jungle"
              label="Adventure"
              path="/projects"
            />
            <CardItem
              src="images/img-9.jpg"
              text="Project Title 2"
              label="Adventure"
              path="/projects"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
