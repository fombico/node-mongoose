var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
	name: String,
	email: String
});

mongoose.model('Users', UsersSchema);