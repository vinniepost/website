const express = require('express');
const bodyParser = require('body-parser');
const mysqlConnection = require('./database/database');
const home = require('./routes/homepage');

const app = express();

const port = 3000;
const host = 'localhost';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(home);

app.listen(port, host, (err) => {
    if (err) {
        throw err;
    }
    else{console.log('Listening on port '+port);}
}
);
