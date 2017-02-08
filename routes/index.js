var express = require('express');
var router = express.Router();
var yelpCtrl = require('../controllers/api/yelp');
var passport = require('passport');
var yelp = require('../config/yelp');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { user: req.user });
});

// Yelp API routes
router.post('/search', yelpCtrl.search);

// OAuth routes
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true
  }
));
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/show', function(req, res, next) {
  res.render('show');
})

module.exports = router;
