const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('on chat', function(msg){
        io.emit('on chat', msg);
    });
});

server.listen(3001, function(){
    console.log('listening on *:3001');
});