var router = require('express').Router();
var businessCtrl = require('../controllers/businesses');


// GET /api/students
// router.get('/students', studentsCtrl.index);
router.post('/businesses', isLoggedIn, businessCtrl.addBiz);


/*-------------------------------------------------------
ReSTful routes for: facts:

  Despite the fact that we don't have a 'facts' collection,
  we still need routes that map to their creation and
  removal.

  GET: Not needed / facts are fetched with each student
  POST: Creates a new fact for the currently
        authenticated student.
  DELETE: Deletes the fact with the :id param.
  PUT: Not used in this app.
-------------------------------------------------------*/

// DELETE /api/facts/:id
// router.delete('/facts/:id', isLoggedIn, businessCtrl.delete);

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;

