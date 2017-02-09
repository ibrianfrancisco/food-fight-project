var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var businessSchema = new mongoose.Schema({
	name: String,
  yelp_id: String,
	url: String,
  phone: String,
	image_url: String,
  city: String,
  country: String,
  address1: String,
  state: String,
  zip_code: String,
  latitude: Number,
  longitude: Number,
  price: String,
  rating: Number,
  review_count: Number
});

module.exports = mongoose.model('Business', businessSchema);
