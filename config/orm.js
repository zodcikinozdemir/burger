var connection = require("../config/connection.js");

var orm = {

	selectAll: function(tableInput, cb) {
			var query = 'SELECT * FROM ' + tableInput + ';';
			connection.query(query, function(err, result) {
				if (err) throw err;	
				cb(result);
			});
	},

	insertOne: function(table, cols, vals, cb){
			var query = 'INSERT INTO ' + table 
					+ ' (' + cols.toString() + ') '
					+ 'VALUES (';
			var arr = [];
			for (var i =0; i < vals.length; i++){
				arr.push('?');
			};
			query = query + arr.toString() + ') ';
			
			connection.query(query, vals, function(err, result) {
				if (err) throw err;
				cb(result);
			});
	},

	updateOne: function(table, colVals, condition, cb){
			var arr=[];
			for (var key in colVals) {
				if ( colVals.hasOwnProperty(key)) {
					arr.push(key + '=' + colVals[key]);
				}
			}
			
			var query = 'UPDATE ' + table + ' SET ' 
				   + arr.toString() + ' WHERE ' + condition;
			
			connection.query(query, function(err, result) {
				if (err) throw err;
				cb(result);
			});
	},

	delete: function(table, condition, cb) {
		var query = 'DELETE FROM ' + table + ' WHERE '
					+ condition;

		connection.query(query, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;