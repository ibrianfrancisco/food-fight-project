var router = require('express').Router();
var businessCtrl = require('../../controllers/businesses');
var usersApiCtrl = require('../../controllers/api/users_ctrl');


// GET /api/students
// router.get('/students', studentsCtrl.index);
// router.post('/biz', isLoggedIn, businessCtrl.addBiz);

// DELETE /api/facts/:id
// router.delete('/facts/:id', isLoggedIn, businessCtrl.delete);

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}



//API ROUTES
router.get('/', usersApiCtrl.getAllUsers);
router.get('/:id', usersApiCtrl.getOneUser);
router.post('/', usersApiCtrl.createUser);
router.put('/:id', usersApiCtrl.updateUser);
router.delete('/:id', usersApiCtrl.deleteUser);

module.exports = router;

