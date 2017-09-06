var express = require('express'),
	app = express(),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	port = process.env.PORT || 8080,
	mongoose = require('mongoose');

require('./models/users')

var usersController = require('./controllers/users');

mongoose.connect('mongodb://localhost/lab3-3', { useMongoClient: true });

app.use(morgan('combined')); // logging of requests
app.use(bodyParser.urlencoded({extended: false})); // converts request body to json
app.set('view engine', 'ejs'); // view engine to EJS (default is jade)


app.get('/', usersController.index);
app.post('*', usersController.create);

app.listen(port, (err) => {
	if (err) return console.log(err);

	console.log('listening on %s' , port);
})