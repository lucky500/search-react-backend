const port  = 3035;

const bodyParser  = require('body-parser');
const express = require('express');
const server  = express();
const allowCors = require('./cors');

server.use(bodyParser.urlencoded({extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, function(){
  console.log(`Backend executing on Port ${port}.`);
})

module.exports = server;