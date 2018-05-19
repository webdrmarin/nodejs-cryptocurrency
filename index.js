const net = require('net');
const port = 3000;
// Crear servidor y escuchar conexiones
const server = net.createServer((socket) => {
  socket.setEncoding('utf8');
  socket.on('data', (data) => {
    console.log(data);
  });
}).listen(port);

// Crear conexión
const client = net.createConnection((port), () => {
  // Enviar instrucciones
  client.write('getNodes');
});
