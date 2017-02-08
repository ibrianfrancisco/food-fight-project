var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var businessSchema = new.mongoose.Schema({
	name: String,
	url: String,
	categories: [],
	image_url: String,
	location: {
    city: String,
    country: String,
    address1: String,
    state: String,
    zipcode: Number
  }
});

module.exports = mongoose.model('Business', businessSchema);
