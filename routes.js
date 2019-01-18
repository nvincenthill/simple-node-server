const express = require('express');

const ctrl = require('./controller.js');

const router = express.Router();

router.get('/hrsf110', ctrl.get);
router.get('/hrsf111', ctrl.get);

module.exports = router;
