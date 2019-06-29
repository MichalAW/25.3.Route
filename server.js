var fs = require('fs')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var stringifyFile;

app.use(bodyParser.json());

app.get('/', function (req, res) {
    fs.readFile('./test.json', 'utf8', function (err, data) {
        if (err) throw err;
        stringifyFile = data
        res.send(data);
    });
});

app.post('/updateNote/:note', function (req, res) {
    fs.readFile('./test.json', 'utf8', function (err, data) {
        
        if (err) throw err;

        stringifyFile = data + req.params.note;

        fs.writeFile('./test.json', stringifyFile, function (err) {

            if (err) throw err;

            console.log('file updated');
            res.send(stringifyFile);
        });
    });
});

app.listen(3000);

app.use(function (res, next) {
    res.status(404).send('sorry, I dont know what you mean')
});
