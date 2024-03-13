const Message = require('../models/message');

const messageController = {
  sendMessage: async (req, res) => {
    try {
      const { senderId, receiverId, content } = req.body;
      const newMessage = new Message({ senderId, receiverId, content });
      await newMessage.save();
      res.status(201).json({ message: 'Message envoyé avec succès', message: newMessage });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getMessagesBetweenUsers: async (req, res) => {
    try {
      const { senderId, receiverId } = req.params;
      const messages = await Message.find({ $or: [{ senderId, receiverId }, { senderId: receiverId, receiverId: senderId }] });
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = messageController;
