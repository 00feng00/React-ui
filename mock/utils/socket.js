var _socket = null
var _io = null;
const Server = require('socket.io');
var getIo = function () {
    return _io
}
var getSocket = function () {
    return _socket
}

module.exports = {
    initSocket(_server) {
        _io = new Server(_server);
        _io.on('connection', function (socket) {
            _socket = socket
            socket.emit('connection', true);
        });


    },
    getIo,
    getSocket
}