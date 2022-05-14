import React from 'react';

function Produs({
  name = 'Nume inexistent',
  price = 'Pret inexistent',
  category = 'Categorie inexistenta',
  categoryColor = 'blue',
}) {
  return (
    <div style={{ backgroundColor: `${categoryColor}` }}>
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{category}</p>
    </div>
  );
}

export default Produs;
