var http = require("http");
var express = require('express');
var serveStatic = require('serve-static');
var cors = require('cors');
var fs = require("fs");

var app = express();
app.use(cors());
app.use(serveStatic('/home/cpe124-g1/potplants/finalCode'));

var server = http.createServer(app);

server.listen(3000, '127.0.1.1', function () {
  console.log('Server started on IP 127.0.1.1 and port 3000');
});
