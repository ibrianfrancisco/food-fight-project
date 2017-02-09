var router = require('express').Router();
var businessCtrl = require('../../controllers/businesses');
var businessApiCtrl = require('../../controllers/api/businesses_ctrl');

router.post('/biz', isLoggedIn, businessCtrl.addBiz);
router.delete('/delete/:id', isLoggedIn, businessCtrl.deleteFav);

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}



//API ROUTES
router.get('/', businessApiCtrl.getAllBusinesses);
router.get('/:id', businessApiCtrl.getOneBusiness);
router.post('/', businessApiCtrl.createBusiness);
router.put('/:id', businessApiCtrl.updateBusiness);
router.delete('/:id', businessApiCtrl.deleteBusiness);

module.exports = router;

