const express = require('express');
const router = express.Router();
const api = require('../controllers/apiController');

router.get('/', api.getAll);
router.get('/:id', api.getOne);
router.post('/', api.create);
router.put('/:id', api.update);
router.delete('/:id', api.remove);

module.exports = router;
