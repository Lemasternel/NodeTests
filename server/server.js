const express = require('express');

var app = express();

app.get('/', (req, res) => {
    //res.status(404).send({error:'Page not found!'});
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Teste',
        age: 30
    }, {
        name: 'Leonel',
        age: 26
    }]);
});

app.listen(3000);

module.exports.app = app;