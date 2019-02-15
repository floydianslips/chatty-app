// server.js

const express = require('express');
const WS = require('ws');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new WS.Server({ server });
// Use to create UUID for messages
const uuidv4 = require('uuid/v4');

// Send number of connected clients to App
let getClientNumber = () => {
  wss.clients.forEach(function each(client) {
    let clientNumber = JSON.stringify(wss.clients.size);
    client.send(clientNumber);
  })
}

wss.on('connection', function connection (ws) {
  console.log('Client Connected');

  ws.on('message', function incoming(data) {
    let msg = JSON.parse(data);

    // When a client connects send back the number of clients connected else send message to all clients
    if (msg === "Opened") {
      getClientNumber();
    } else {
      msg.id = uuidv4();
      let sendData = JSON.stringify(msg);
      wss.clients.forEach(function each(client) {
        client.send(sendData);
      })
    }
  });

  // When a client closes WS connection send the new number of clients to all clients
  ws.on('close', () => {
    getClientNumber();
    console.log('Client disconnected!!');
  })
});