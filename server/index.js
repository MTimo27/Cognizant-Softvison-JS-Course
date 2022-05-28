const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`User Connected: ${socket.id}`);
  socket.join('default');

  socket.on('send_answer', (data) => {
    socket.to('default').emit('receive_answer', data);
  });
});

server.listen(3001, () => {
  console.log('SERVER RUNNING');
});
