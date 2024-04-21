const express = require('express');
const router = express.Router();
const userController = require('../controllers/authController');


router.post('/login', userController.loginByQR);


router.post('/users', userController.createUser);


router.get('/users/:userId', userController.getUserDetails);


router.get('/users', userController.getAllUsers);

router.put('/users/:userId', userController.updateUserDetails);


router.delete('/users/:userId', userController.deleteUser);

module.exports = router;
