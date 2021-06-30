import React, { useState } from 'react';
import './_projects.scss';

import projectsData from './projectsData';

const items = projectsData.reverse(); // reversed data, so latest item is shown first.

const allCategories = ['All'].concat([
  ...new Set(items.map(item => item.category)),
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

function Modal({ menuItem }) {
  return (
    <div>
      {menuItem.map(item => {
        return (
          <div
            className="modal fade"
            id={`modal${item.id}`}
            tabIndex="-1"
            aria-labelledby={`modalLabel${item.id}`}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-title" id={`modalLabel${item.id}`}>
                    {item.title}
                  </h2>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body" key={item.id}>
                  <a
                    className="thumbnail"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={item.image} alt="" />
                  </a>
                  <em>{item.misc}</em>
                  <p>{item.description}</p>
                </div>
                <div className="modal-footer">
                  {item.href !== null ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      Project Link &nbsp;
                      <i className="fas fa-external-link-alt" />
                    </a>
                  ) : null}
                  {item.pdf !== null ? (
                    <a href={item.pdf} target="_blank" rel="noreferrer">
                      View PDF
                      <i className="far fa-file-pdf" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Menu({ menuItem }) {
  return (
    <div className="item">
      {menuItem.map(item => {
        return (
          <div
            type="button"
            data-bs-toggle="modal"
            data-bs-target={`#modal${item.id}`}
            className="item__container"
            key={item.id}
          >
            <div className="thumbnail">
              <img src={item.image} alt="" />
            </div>
            <h2>{item.title}</h2>
          </div>
        );
      })}
    </div>
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
        </div>

        <div className="buttons">
          <Button button={buttons} filter={filter} />
        </div>
        <div className="items">
          <Menu menuItem={menuItem} />
          <Modal menuItem={menuItem} />
        </div>
      </div>
    </>
  );
}
