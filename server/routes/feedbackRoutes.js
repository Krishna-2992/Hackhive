const express = require('express');
const feedbackController = require('../controllers/feedbackController')

const router = express.Router();
router
  .route('/feedback')
  .get(feedbackController.getFeedback)
  .post(feedbackController.createFeedback);
module.exports = router;