const mongoose =  require('mongoose')
const form = mongoose.model('forms', {
  Jour : String,
  Mois : String,
  Annee : String,
  Heure : String,
  Lieu : String,
  Sexe : String,
  Gravite : String,
  Vehicule : String,
  Colision : String,
  'Conditions atmospheriques' : String,
  Surface : String,
  Lumiere : String,
  Commentaire : String
})

module.exports = form;