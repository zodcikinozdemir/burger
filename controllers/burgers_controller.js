var express = require('express');
var router = express.Router();
var burgers = require("../models/burger.js");

	router.get('/', function(req, res) {
		res.redirect('/burgers');
	});

	router.get('/burgers', function(req, res) {
		burgers.selectAll(function(data){
			res.render('index', {burgers: data});
		});
	});

	router.post('/burgers/insertOne', function(req, res) {
		burgers.insertOne(['burger_name'], [req.body.burger], function(){
			res.redirect('/burgers');
		});
	});

	router.put('/burgers/updateOne/:id', function(req, res) {

		burgers.updateOne(req.body.devoured, req.params.id, function(){
			res.redirect('/burgers');
		});
	});

	router.delete('/burgers/delete/:id', function (req, res) {
		burgers.delete(req.params.id, function(){
			res.redirect('/burgers');
		});
	});

module.exports = router;