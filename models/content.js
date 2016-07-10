var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	item: {type: String, required: true},
	price: {type: String, required: true},
	category: {type: String},
	description: {type: String},
	url: {type: String}
});

module.exports = mongoose.model('Content', schema);