const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8000; 
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); 
const partnershipRoutes = require('./routes/partenershipRoutes'); 
const messageRoutes = require('./routes/messageRoutes'); 
const leaderboardRoutes = require('./routes/leaderboardRoutes'); 
const profileRoutes = require('./routes/profileRoutes'); 
const settingsRoutes = require('./routes/settingsRoutes'); 

const URI ='mongodb://localhost:27017/inkluzion' ;

mongoose.connect("mongodb://localhost:27017/inkluzion", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch(err => console.error('Erreur de connexion à MongoDB', err));

app.use(bodyParser.json());
app.use('/api', authRoutes); 
app.use('/api', partnershipRoutes);
app.use('/api', messageRoutes);
app.use('/api', leaderboardRoutes);
app.use('/api', profileRoutes);
app.use('/api', settingsRoutes);
app.use(cors());

app.listen(8000, () => {
  console.log(`Serveur écoutant sur le port 8000`);
});
