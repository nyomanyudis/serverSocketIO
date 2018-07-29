var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log(socket.id);
    socket.on('update', () => {
      console.log('sending update');
      io.emit('update');
    });

    socket.on('sending', () =>{
      console.log('sending');
      io.emit('ending');
    });
});
