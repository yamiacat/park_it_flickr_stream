const express = require('express');
const app = express();
const path = require('path');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get('/flickrfeed', function (req, res) {

  const url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';
  const request = new XMLHttpRequest();

  request.open('GET', url);
  request.onload = function() {

    if(request.status === 200) {
      let jsonpString = request.responseText;
      res.send(jsonpString);
    }
  }
  request.send();
});



app.use(express.static('client/build'));

const server = app.listen(3000, function () {
  console.log('Flickr Stream listening at http://localhost:3000');
});
