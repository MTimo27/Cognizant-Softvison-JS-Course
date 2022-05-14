import React, { useState } from 'react';
import AddColor from './AddColor';

function Exercitiul3() {
  const [colors, setColors] = useState([]);

  const handleDelete = (i) => {
    setColors((prev) => {
      const array = prev;
      array.splice(i, 1);
      console.log(array);
      return array;
    });
    setColors((prev) => [...prev]);
  };

  return (
    <div className="border">
      <AddColor setColorsState={setColors} />
      {colors.map((color, i) => {
        return (
          <div key={i}>
            <h1>{color}</h1>
            <button onClick={() => handleDelete(i)}>
              Delete
            </button>
          </div>
        );
      })}
      {colors.length >= 2 && (
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundImage: `linear-gradient(${colors})`,
          }}
        ></div>
      )}
    </div>
  );
}

export default Exercitiul3;
