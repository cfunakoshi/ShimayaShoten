var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	item: {type: String, required: true},
	price: {type: Number, required: true},
	contentId: {type: String}
});

module.exports = mongoose.model('Content', schema);