const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user: 'ram',
    database: 'node',
    password: '1234'
});

module.exports = pool.promise();