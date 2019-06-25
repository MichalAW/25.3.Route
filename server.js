var fs = require('fs')
var express = require('express');
var app = express();
var stringifyFile = req.params.note();

app.use(bodyParser.json());

fs.readFile('./test.json', 'utf8', function (err, data) {
    if (err) throw err;
    stringifyFile = data
    res.send(data);
});

app.post('/updateNote/:note', function () {
    res.send('Hello POST!');
});

fs.writeFile('./test.json', stringifyFile, function (err) {
    if (err) throw err
    console.log('file updated');
});

app.listen(3000);
