var express = require('express');
var router = express.Router();
var yelpCtrl = require('../controllers/api/yelp');

// CARLIE START
var passport = require('passport');
var yelp = require('../config/yelp');
// const rootURL = 'https://api.yelp.com/';


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { user: req.user });
});

// Yelp API routes
router.get('/', yelpCtrl.userDetails);
router.post('/', yelpCtrl.search);

// OAuth routes
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router;
