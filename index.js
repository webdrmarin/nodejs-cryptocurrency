const net = require('net');
const publicIp = require('public-ip');
// Configuración del nodo
const config = {};
config.port = 3000;

// IPv4
publicIp.v4().then(ip => {
  config.publicIp = ip;
  initServer();
  initClient();
});

// Crear servidor y escuchar conexiones
const initServer = () => {
  const server = net.createServer((socket) => {
    // Codificación utf8
    socket.setEncoding('utf8');
    socket.on('data', (data) => {
      console.log(data);
    });
  }).listen({port: config.port});
}

// Crear conexión
const initClient = () => {
  const client = net.createConnection(
    {host: config.publicIp, port: config.port}, () => {
    // Enviar instrucciones
    client.write('getNodes');
  });
}
