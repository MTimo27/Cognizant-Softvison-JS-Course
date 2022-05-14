import React, { useState } from 'react';

function NameRender({ name = 'Mihai Timoficiuc' }) {
  const [color, setColor] = useState(false);

  const handleClick = () => {
    if (!color) setColor(true);
    else setColor(false);
  };

  return (
    <div>
      {color && <p>Numele de alaturi este colorat</p>}
      <h1
        className={color ? 'blue' : ''}
        onClick={handleClick}
      >
        {name}
      </h1>
    </div>
  );
}

export default NameRender;
