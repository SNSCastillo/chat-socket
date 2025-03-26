const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Nuevo cliente conectado');

  // Escuchar mensajes del cliente
  ws.on('message', (message) => {
    console.log('Mensaje recibido:', message.data);

    // Envia el mensaje a todos los clientes conectados
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.send('Bienvenido al chat!');
});
