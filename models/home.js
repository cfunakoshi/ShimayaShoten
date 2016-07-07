var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	url: {type: String}
});

module.exports = mongoose.model('Home', schema);