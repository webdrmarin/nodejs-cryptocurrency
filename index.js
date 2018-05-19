const net = require('net');
const port = 3000;
// Crear servidor
const server = net.createServer(() => {
  console.log('client connected');
});

// Escuchar conexiones
server.listen(port, () => {
  console.log(`listening on port ${port}...`)
});

// Crear conexión
const client = net.createConnection((port), () => {
  console.log('connecting to server...');
});
