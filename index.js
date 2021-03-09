const express = require('express')
const app = express()
 
app.get('/', async (req, res) => {
  res.send( 'Hello from my node app!');

});

app.post('/', async (req, res) => {
    const data = req.body.input;

    if (data === undefined) {
        res.send({res: 1});

    };

    res.send({res: 0});

});

app.put('/', async (req, res) => {
    const data = req.body.input;

    if (data === 1) {
        res.send({res: 0});

    };

    res.send({res: 1});

});

app.delete('/', async (req, res) => {
    const data = req.body.input;

    if (data === 6) {
        res.send({res: 0});

    };

    res.send({res: 1});
    
});
 
app.listen(8080)