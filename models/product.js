var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	name: {type: String}
});

module.exports = mongoose.model('Product', schema);