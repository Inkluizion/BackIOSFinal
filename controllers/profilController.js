const User = require('../models/user');

const profilController = {
  
  getProfile: async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  
  updateProfile: async (req, res) => {
    try {
      const userId = req.params.userId;
      const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

module.exports = profilController;
