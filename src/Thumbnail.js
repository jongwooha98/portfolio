import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Thumbnail(props) {
  const { link, image, title, category } = props;

  return (
    <div className="project">
      <Link to={link}>
        <div className="project-image">
          <img src={image} alt="Project" />
        </div>
        <div className="project-title">{title}</div>
        <div className="project-category">{category}</div>
      </Link>
    </div>
  );
}

export default Thumbnail;
