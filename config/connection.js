// Inside the connection.js file, setup the code to connect Node to MySQL.

var mysql = require('mysql');

var connection;
	if(process.env.JAWSDB_PINK_URL) { 
		mysql.createConnection(process.env.JAWSDB_PINK_URL);
	} else {
 	    connection = mysql.createConnection({
  		    host     : 'localhost',
  		    user     : 'root',
  		    password : 'root',
  		    database : 'burgers_db'
	   });
  }
	connection.connect(function(err) {
  		if (err) {
    		console.error('error connecting: ' + err.stack);
    	return;
  	};

});

module.exports = connection;