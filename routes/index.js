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
// router.post('/search', yelpCtrl.search);
router.post('/', function(req, res, next) {
  var term = req.body.term;
  // console.log(term);
  yelp.search({ term: term, location: req.body.location })
  .then(function (data) {
    var jsonBussObj = JSON.parse(data); // Parse JSON string to JSON Object
    // console.log(data);
    // console.log(jsonBussObj);
    res.render('index', {jsonBussObj});
  })
  .catch(function (err) {

    console.error('error', err);
  });
})





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
