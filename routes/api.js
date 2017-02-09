var router = require('express').Router();
var businessCtrl = require('../controllers/businesses');


// GET /api/students
// router.get('/students', studentsCtrl.index);
router.post('/businesses', isLoggedIn, businessCtrl.addBiz);

// DELETE /api/facts/:id
// router.delete('/facts/:id', isLoggedIn, businessCtrl.delete);

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;

