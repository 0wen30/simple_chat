require('dotenv').config();

const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

const { join } = require('path');

const port = process.env.PORT || 5000;

app.use('/',express.static('dist'));

app.get('/chat', (req,res)=>{
  res.sendFile(join(__dirname,"public","index.html"))
});

io.on('connection', (socket) => {

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

});

server.listen(port, () => {
  console.log('listening on *:3000');
});