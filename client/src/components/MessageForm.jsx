import React, { useState } from 'react';

function MessageForm({ sendMessage }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={() => {
          if (name && message) {
            sendMessage({
              name: name,
              message: message,
            });
            setMessage('');
          }
        }}
      >
        Send
      </button>
    </div>
  );
}

export default MessageForm;
