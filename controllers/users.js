var Business = require('../models/business');
var User = require('../models/user');

module.exports = {
  show
}

function show(req, res, next) {
  User.findById(req.user.id).populate('favorites').exec(function(err, user) {
    res.render('user', {user})
  })
}
// function show(req, res, next) {
//   Bar.findById(req.params.id).populate('beers').exec(function(err, bar) {
//     Beer.find({}, function(err, beers) {
//       res.render('bars/show', {bar, beers})
//     });
//   });
// }
