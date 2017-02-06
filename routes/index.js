var express = require('express');
var router = express.Router();
// CARLIE START
var passport = require('passport');
// CARLIE END
var yelp = require('../config/yelp');
const rootURL = 'https://api.yelp.com/';


/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index');
});

router.get('/', function(req, res, next) {
  yelp.search({term: 'euro cafe', location: 'Irvine, CA', price: '1,2,3', limit: 1})
  .then(function (data) {
    console.log(data);
    res.json(data);
  })
  .catch(function (err) {
      console.error(err);
  });
});

// CARLIE START
//once the UI is in place, we will use this
// router.get('/', function(req, res, next) {
//     res.render('index', { user: req.user });
// });
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email', 'image'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));
// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
// CARLIE END

module.exports = router;
