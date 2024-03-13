const mongoose = require('mongoose');
const URI = 'mongodb+srv://zeinab:<123456789Ze>@application.if47xgk.mongodb.net/';

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch(err => console.error('Erreur de connexion à MongoDB', err));
