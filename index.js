var express = require('express');
var jquery = require('jquery');
var socket = require('socket.io');
var app = express();
var server = app.listen(4000,function(){

})
app.use(express.static('public'));

var io = socket(server);
io.on('connection',function(socket){
  console.log('ok');
  socket.on('chat',function(data){
    io.sockets.emit('chat',data);
  });

  socket.on('typing',function(data){
    socket.broadcast.emit('typing',data);
  })
});
