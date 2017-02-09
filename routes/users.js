var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/:id', isLoggedIn, userCtrl.show);


router.get('/user', function(req, res, next) {
  res.render('user', { user: req.user });
});

router.get('/', function(req, res, next) {
  res.render('user', { user: req.user });
})

// router.get('/userShow', usersCtrl.show);
// router.get('/user/:id', function(req, res, next) {
//   res.render('userShow', {user: req.user})
// });
// router.post('/favorite', usersCtrl.favorite);

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;
