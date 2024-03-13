const User = require('../models/user');

const settingsController = {
  
  getSettings: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
      res.json(user.settings);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  
  updateSettings: async (req, res) => {
    try {
      const userId = req.params.userId;
      const updatedUser = await User.findByIdAndUpdate(userId, { settings: req.body }, { new: true });
      res.json(updatedUser.settings);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = settingsController;
