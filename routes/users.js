var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');

router.get('/', isLoggedIn, userCtrl.show);

router.get('/user', function(req, res, next) {
  res.render('user', { user: req.user });
});

router.get('/', function(req, res, next) {
  res.render('user', { user: req.user });
})

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;
