const express = require('express');

const ctrl = require('./controller.js');

const router = express.Router();

router.get('/hrsf110', ctrl.get);
router.get('/hrsf111', ctrl.get);
router.post('/hrsf110', ctrl.post);
router.post('/hrsf111', ctrl.post);

module.exports = router;
