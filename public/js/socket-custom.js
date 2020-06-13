var socket = io();


socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//on = para escuchar sucesos
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//Emit = envia informacion de parte del cliente
socket.emit('enviarMensaje', {
    usuario: 'Jorge',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Mensaje server: ', resp);
});

// Escuchar info
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});