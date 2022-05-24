import Chat from './components/Chat';
import io from 'socket.io-client';

function App() {
  const socket = io.connect('http://localhost:3001');
  return (
    <div className="App">
      <Chat socket={socket} />
    </div>
  );
}

export default App;
