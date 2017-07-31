var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/build'));


var server = app.listen(3000, function () {
  console.log('Flickr Stream listening at http://localhost:3000');
});
