import React from 'react';

function CardItem(props) {
  const { path, label, src, text } = props;
  return (
    <li className="cards__item">
      <a className="cards__item__link" href={path}>
        <figure className="cards__item__pic-wrap" data-category={label}>
          <img
            src={src}
            alt="Travel Destination"
            className="cards__item__img"
          />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{text}</h5>
        </div>
      </a>
    </li>
  );
}

export default CardItem;
