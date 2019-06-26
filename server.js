var fs = require('fs')
var express = require('express');
var app = express();
var stringifyFile = req.params.note();

app.use(bodyParser.json());

app.get('/', function () {
    fs.readFile('./test.json', 'utf8', function (err, data) {
        if (err) throw err;
        stringifyFile = data
        res.send(data);
    });
});

app.post('/updateNote/:stringifyFile', function () {
    fs.writeFile('./test.json', stringifyFile, function (err) {
        if (err) throw err
        console.log('file updated');
    });
});

app.listen(3000);

app.use(function (res, next) {
    res.status(404).send('sorry, I dont know what you mean')
});
