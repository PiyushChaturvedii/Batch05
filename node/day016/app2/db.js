var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'ram',
  password : '',
  database: 'sch1'
});

connection.connect(function(err){
    if(err) throw err;
    console.log('Database Connected');
    
})


module.exports = connection;