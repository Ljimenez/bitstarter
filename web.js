#!/usr/bin/env node

var fs = require('fs');
buf = new Buffer(256);

var express = require('express');

var app = express.createServer(express.logger());

buf = fs.readFileSync("index.html");
  
app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
