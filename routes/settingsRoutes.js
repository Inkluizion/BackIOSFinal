const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settingsController');


router.get('/settings/:userId', settingsController.getSettings);


router.put('/settings/:userId', settingsController.updateSettings);

module.exports = router;
