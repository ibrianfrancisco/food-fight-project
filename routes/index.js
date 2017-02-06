var express = require('express');
var router = express.Router();
var yelpCtrl = require('../controllers/yelp');

// CARLIE START
var passport = require('passport');
// CARLIE END
var yelp = require('../config/yelp');
const rootURL = 'https://api.yelp.com/';


// CARLIE START
router.get('/', function(req, res, next) {
    res.render('index', { user: req.user });
});
// CARLIE END

/* GET home page. */
router.get('/', yelpCtrl.userDetails);
router.get('/search', yelpCtrl.search);

// CARLIE START
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
// CARLIE END

module.exports = router;
