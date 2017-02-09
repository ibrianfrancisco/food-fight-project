var User = require('../../models/user');
var Business = require('../../models/business');

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser
}

function getAllUsers(req, res, next) {
  User.find({}, function(err, users) {
    res.status(200).json(users);
  });
}

function getOneUser(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    res.status(200).json(user);
  });
}

function createUser(req, res, next) {
  User.create(req.body, function(err, user) {
    if (err) return res.status(404).json({msg: 'Could not create user'});
    res.status(201).json(user);
  });
}

function updateUser(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body,
    {new: true}, function(err, user) {
      if (err) return res.status(404).json({msg: 'Could not update user'});
      res.status(200).json(user);
    });
}

function deleteUser(req, res, next) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if (err) return res.status(404).json({msg: 'Could not delete user'});
    res.status(200).json(user);
  })
}
