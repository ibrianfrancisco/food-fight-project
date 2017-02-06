var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema ({
  content: String
});

var userSchema = new.mongoose.Schema({
	userName: {
		type: String,
		required: true,
		unique: true
	},
	googleId: String,
	profileImage: String,
	favorites: [{type: Schema.Types.ObjectId, ref:"Business"}],
	checkIns: String, //not yelp api
	location: String,
	comments: [commentSchema]
});

module.exports = mongoose.model('User', userSchema);