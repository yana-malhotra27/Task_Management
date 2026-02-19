const express = require('express');
const router = express.Router();
const view = require('../controllers/viewController');

router.get('/', view.dashboard);
router.get('/add', view.showAdd);
router.post('/add', view.createTask);
router.get('/edit/:id', view.showEdit);
router.post('/edit/:id', view.updateTask);
router.get('/delete/:id', view.deleteTask);

module.exports = router;
