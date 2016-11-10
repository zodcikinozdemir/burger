// Inside the connection.js file, setup the code to connect Node to MySQL.

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'burgerdbinstance.c3xppfm7g1uf.us-east-1.rds.amazonaws.com',
  user     : 'root',
  password : 'root2016',
  database : 'burgers_db'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };

});

module.exports = connection;