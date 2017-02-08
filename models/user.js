var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	userName: {
		type: String,
		required: true,
		unique: true
	},
  email: String,
	googleId: String,
	profileImage: String,
	favorites: [{type: Schema.Types.ObjectId, ref:"Business"}],
});

module.exports = mongoose.model('User', userSchema);
