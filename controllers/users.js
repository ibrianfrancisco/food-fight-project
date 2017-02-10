var Business = require('../models/business');
var User = require('../models/user');

module.exports = {
  show,
  remove
}

function show(req, res, next) {
  User.findById(req.user.id).populate('favorites').exec(function(err, user) {
    res.render('user', {user})
  })
}

function remove(req, res, next) {
  User.findByIdAndRemove(req.params.id, function(err) {
    res.redirect('/');
  });
}
