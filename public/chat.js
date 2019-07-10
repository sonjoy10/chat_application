// connection
var socket = io.connect('http://localhost:4000');


$(document).ready(function(){
  var output = $('#output');
  var handle = $('#handle');
  var message = $('#message');
  var send = $('#send');
$('#send').click(function(){
  socket.emit('chat',{
    message:message.val(),
    handle:handle.val()
  });
});
$('#message').keypress(function(){
  socket.emit('typing',handle.val());
});
var msg = '';
socket.on('chat',function(data){

  $('#feedback').html('');
  $('#message').val('');
  if(data.message != ''){
    msg += '<p><strong>'+data.handle+'</strong>:  '+data.message+'</p>';
    output.html(msg);
  }
});

socket.on('typing',function(data){
  $('#feedback').html('<p><em>'+data+' is typing..</em></p>')
});
});
