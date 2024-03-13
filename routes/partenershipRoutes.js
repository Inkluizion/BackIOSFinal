const express = require('express');
const router = express.Router();
const propositionController = require('../controllers/partenershipController');

router.post('/propositions', propositionController.createProposition);

router.get('/propositions/:propositionId', propositionController.getPropositionDetails);

router.put('/propositions/:propositionId', propositionController.updatePropositionDetails);

router.delete('/propositions/:propositionId', propositionController.deleteProposition);

module.exports = router;
