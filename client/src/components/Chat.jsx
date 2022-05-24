import React, { useEffect, useState } from 'react';

import ChatBox from './ChatBox';
import MessageForm from './MessageForm';
import Notification from './Notification';

function Chat({ socket }) {
  const [messageList, setMessageList] = useState([]);
  const [notification, setNotification] = useState('');
  const [showNotification, setShowNotification] =
    useState(true);

  const sendMessage = async (data) => {
    await socket.emit('send_message', data);
    setMessageList((list) => [...list, data]);
    setNotification(data.name);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
      setNotification(data.name);
    });
  }, [socket]);

  console.log('rendered');

  return (
    <div>
      {notification && showNotification && (
        <Notification name={notification} />
      )}
      <ChatBox messageList={messageList} />
      <MessageForm sendMessage={sendMessage} />
    </div>
  );
}

export default Chat;
