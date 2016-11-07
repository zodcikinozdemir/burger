var express = require('express');
var app = express();
var routes = require('./controllers/burgers_controller.js');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', routes);

var PORT = process.env.PORT || 5000;
app.listen(PORT);
  