const User = require('../models/user');

const userController = {
 
  loginByQR: async (req, res) => {
    const { qrCode } = req.body;

    try {
      
      const user = await User.findOne({ qrCode });
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }
      res.json({ message: "Connexion réussie", user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  
  createUser: async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json({ message: 'Utilisateur créé avec succès', user: newUser });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  
  getUserDetails: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  
  updateUserDetails: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.userId);
      res.json({ message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = userController;
