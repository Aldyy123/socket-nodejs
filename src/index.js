const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: '*'
    }
});

io.on('connection', socket => {
    socket.on('msg', msg => {
        console.log('Message : ' + msg);
        io.emit('msg', msg);
    })
})

server.listen(3000, () => {
  console.log('listening on *:3000');
});