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
const uuidv4 = require('uuid/v4');

wss.on('connection', function connection (ws) {
  ws.on('message', function incoming(data) {
    let msg = JSON.parse(data);
    msg.id = uuidv4();
    let sendData = JSON.stringify(msg);
    wss.clients.forEach(function each(client) {
      client.send(sendData)
    })
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected!!'));
});