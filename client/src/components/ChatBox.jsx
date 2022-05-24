import React from 'react';
import Message from './Message';

function ChatBox({ messageList }) {
  return (
    <div>
      {messageList.map((item, i) => (
        <Message
          key={i}
          name={item.name}
          body={item.message}
        />
      ))}
    </div>
  );
}

export default ChatBox;
