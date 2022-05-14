import React, { useState } from 'react';

function AddColor({ setColorsState }) {
  const [inputValue, setInputValue] = useState('#000000');

  const handleClick = () => {
    setColorsState((prev) => {
      const array = prev;
      array.push(inputValue);
      return array;
    });
    setColorsState((prev) => [...prev]);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="color"
        placeholder="select color"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default AddColor;
