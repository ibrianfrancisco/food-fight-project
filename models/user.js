var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema ({
  content: String,
  business_id: {type: Schema.Types.ObjectId, ref:"Business"}
});

var userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
  email: String,
	googleId: String,
	profileImage: String,
	favorites: [{type: Schema.Types.ObjectId, ref:"Business"}],
	checkIns: String, //not yelp api
	location: String,
	comments: [commentSchema]
});

module.exports = mongoose.model('User', userSchema);
