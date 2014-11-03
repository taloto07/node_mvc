var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = Schema({
	title: String,
	body: String
});

module.exports = mongoose.model('post', postSchema);