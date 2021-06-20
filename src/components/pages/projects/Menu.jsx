import React from 'react';

export default function Menu({ menuItem }) {
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
