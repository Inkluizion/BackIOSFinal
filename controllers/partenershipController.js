const Proposition = require('../models/proposition');

const propositionController = {
  
  createProposition: async (req, res) => {
    try {
      const newProposition = new Proposition(req.body);
      await newProposition.save();
      res.status(201).json({ message: 'Proposition créée avec succès', proposition: newProposition });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getPropositionDetails: async (req, res) => {
    try {
      const proposition = await Proposition.findById(req.params.propositionId);
      if (proposition) {
        res.json(proposition);
      } else {
        res.status(404).json({ message: 'Proposition non trouvée' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updatePropositionDetails: async (req, res) => {
    try {
      const updatedProposition = await Proposition.findByIdAndUpdate(req.params.propositionId, req.body, { new: true });
      res.json(updatedProposition);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteProposition: async (req, res) => {
    try {
      await Proposition.findByIdAndDelete(req.params.propositionId);
      res.json({ message: 'Proposition supprimée avec succès' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = propositionController;
