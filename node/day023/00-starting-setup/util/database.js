// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host:'localhost',
//     user: 'ram',
//     database: 'node',
//     password: '1234'
// });

// module.exports = pool.promise();


const Sequelize = require('sequelize');

const sequelize = new Sequelize('node', 'ram', '1234', {
    host: 'localhost',
    dialect: 'mysql' 
  });

  module.exports = sequelize;