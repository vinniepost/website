const mysql = require('mysql2');

mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Swan'
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log('Connected');
    } else {
        throw err;
    }
}
);

module.exports = mysqlConnection;
