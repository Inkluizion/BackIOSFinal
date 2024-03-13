const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.post('/messages', messageController.sendMessage);

router.get('/messages/:senderId/:receiverId', messageController.getMessagesBetweenUsers);

module.exports = router;
