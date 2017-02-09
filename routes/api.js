var router = require('express').Router();
var businessCtrl = require('../controllers/businesses');
var apiCtrl = require('../controllers/api/api');


router.post('/biz', isLoggedIn, businessCtrl.addBiz);
router.delete('/delete/:id', isLoggedIn, businessCtrl.deleteFav);

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

router.get('/businesses/', apiCtrl.getAllBusinesses);
router.get('/business/:id', apiCtrl.getOneBusiness);
router.post('/business', apiCtrl.createBusiness);
router.put('/business/:id', apiCtrl.updateBusiness);
router.delete('/business/:id', apiCtrl.deleteBusiness);

module.exports = router;

