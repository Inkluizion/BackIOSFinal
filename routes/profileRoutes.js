const express = require('express');
const router = express.Router();
const profilController = require('../controllers/profilController');

router.get('/profile/:userId', profilController.getProfile);


router.put('/profile/:userId', profilController.updateProfile);

module.exports = router;
