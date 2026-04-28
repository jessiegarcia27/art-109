var express = require('express');
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log('Starting server...');

var socket = require('socket.io');
var io = socket(server);

io.on('connection', function(socket) {
    console.log('New connection: ' + socket.id);

    socket.on('mouse', function(data) {
        console.log("Received:", data);
        socket.broadcast.emit('mouse', data);
    });
});
