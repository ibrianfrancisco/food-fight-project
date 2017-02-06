var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var businessSchema = new.mongoose.Schema({
	name: String,
	url: String,
	categories: Object,
	image_url: String,
	id: String,
	comments: String,
	location: {
		type: String
	}
});

module.exports = mongoose.model('Business', businessSchema);