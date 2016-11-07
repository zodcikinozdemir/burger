var orm = require('../config/orm.js');

var burgers = {

	selectAll: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res);
		});
	},

	insertOne: function(cols, vals, cb) {
		orm.insertOne('burgers', cols, vals, function(res) {
			cb(res);
		});
	},

	updateOne: function(colVals, condition, cb) {
		orm.updateOne('burgers', {devoured: colVals}, 
					  'id = ' + condition, function(res) {
			cb(res);
		});
	},

	delete: function(condition, cb) {
		orm.delete('burgers', 'id = ' + condition, function(res){
			cb(res);
		});
	}
};

module.exports = burgers;