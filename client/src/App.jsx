import React from 'react';
import io from 'socket.io-client';
import Questionnaire from './components/Questionnaire';

function App() {
  const socket = io.connect('http://localhost:3001');

  return (
    <div className="App">
      <Questionnaire socket={socket} />
    </div>
  );
}

export default App;
