var router = require('express').Router();
var businessCtrl = require('../controllers/businesses');
var apiCtrl = require('../controllers/api/api');


// GET /api/students
// router.get('/students', studentsCtrl.index);
router.post('/biz', isLoggedIn, businessCtrl.addBiz);

// DELETE /api/facts/:id
// router.delete('/facts/:id', isLoggedIn, businessCtrl.delete);

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}



//API ROUTES
router.get('/', apiCtrl.getAllUsers);
router.get('/:id', apiCtrl.getOneUser);
router.post('/', apiCtrl.createUser);
router.put('/:id', apiCtrl.updateUser);
router.delete('/:id', apiCtrl.deleteUser);

router.get('/businesses', apiCtrl.getAllBusinesses);
router.get('/business/:id', apiCtrl.getOneBusiness);
router.post('/business', apiCtrl.createBusiness);
router.put('/business/:id', apiCtrl.updateBusiness);
router.delete('/business/:id', apiCtrl.deleteBusiness);

module.exports = router;

