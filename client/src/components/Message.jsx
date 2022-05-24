import React from 'react';

function Message({ body, name }) {
  return (
    <div>
      <h1>{`${name} : ${body}`}</h1>
    </div>
  );
}

export default Message;
