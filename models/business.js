var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var businessSchema = new.mongoose.Schema({
	name: String,
	url: String,
	categories: Object,
	image_url: String,
	id: String,
	comments: [{type: Schema.Types.ObjectId, ref:"User"}],
	location: Object
});

module.exports = mongoose.model('Business', businessSchema);