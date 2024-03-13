const User = require('../models/user');

const leaderboardController = {

  getLeaderboard: async (req, res) => {
    try {
      const leaderboard = await User.find().sort({ score: -1 });
      res.json(leaderboard);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = leaderboardController;
