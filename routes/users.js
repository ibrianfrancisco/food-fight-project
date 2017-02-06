var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');

// Brian Start
router.get('/', userCtrl.index);
router.get('/new', userCtrl.new);
router.post('/', userCtrl.create);
router.get('/:id/edit', userCtrl.edit);
router.put('/:id', userCtrl.update);
router.delete('/:id', userCtrl.remove);
// Brian End
module.exports = router;
