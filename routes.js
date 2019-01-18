const express = require('express');

const ctrl = require('./controller.js');

const router = express.Router();

router
  .route('/:cohort/greeting')
  .get(ctrl.get)
  .post(ctrl.post);

module.exports = router;
