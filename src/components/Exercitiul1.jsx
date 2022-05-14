import React from 'react';
import Produs from './Produs';

function Exercitiul1() {
  return (
    <div className="border">
      <Produs
        name={'salad'}
        price={20}
        category={'healthy'}
        categoryColor={'green'}
      />
      <Produs
        name={'sandwich'}
        price={12}
        category={'not healthy'}
        categoryColor={'red'}
      />
      <Produs
        name={'bread'}
        price={3}
        category={'healthy'}
        categoryColor={'green'}
      />
      <Produs
        name={'steak'}
        price={50}
        category={'not healthy'}
        categoryColor={'red'}
      />
      <Produs />
    </div>
  );
}

export default Exercitiul1;
