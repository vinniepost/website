const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;
const host = 'localhost';

app.host = host;
app.port = port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.router
    .get('/', (req, res) =>{
        res.sendFile(__dirname + '/index.html');
        console.log("log reqest to / from " + req.ip);
    })



module.exports = app;