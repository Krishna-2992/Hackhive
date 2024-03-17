const express = require('express');
const breachController = require('../controllers/breachController')

const router = express.Router();
router
    .route('/breach')
    .get(breachController.getBreach)
    .post(breachController.createBreach);
module.exports = router;