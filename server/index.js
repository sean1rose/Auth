// main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// create instance of express App
const app = express();


// app setup -> getting express working
  


// server setup -> getting express app talking to outside world
// 1. define PORT server we'll run on on our local machine
  // if there's an env variable of port already defined use that otherwise use 3090
const port = process.env.PORT || 3090
// http native node library -> create a server that knows how to receive requests, and anything that comes in forward it to our express application
  // app is what we'll add functionality to over time
const server = http.createServer(app)
// tell server to listen to our port
server.listen(port);
console.log('server listening on -> ', port);