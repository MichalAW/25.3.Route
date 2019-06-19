var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony głównej');
    res.send('Hello GET!');
});

var server = app.listen(3000, function () {
    console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
});