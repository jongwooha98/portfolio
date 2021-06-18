import React from 'react';

export default function Button({ button, filter }) {
  return (
    <>
      {button.map(category => {
        return (
          <button type="button" onClick={() => filter(category)}>
            {category}
          </button>
        );
      })}
    </>
  );
}
