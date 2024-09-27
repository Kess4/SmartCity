const mongoose =  require('mongoose')
const gps = mongoose.model('accidents', {
  Date: {
    type: String,
    required: true
  }, 
  Heure: {
    type: String,
    required: true
  },
  Latitude: {
    type: String,
    required: true
  },
  Longitude: {
    type: String,
    required: true
  },
  Lumiere: {
    type: String,
    required: true
  },
  Localisation: {
    type: String,
    required: true
  },
  Collision: {
    type: String,
    required: true
  },
  Adresse: {
    type: String,
    required: true
  },
  Surface: {
    type: String,
    required: true
  },
  Gravite: {
    type: String,
    required: true
  },
  Sexe: {
    type: String,
    required: true
  },
  Commune: {
    type: String,
    required: true
  },
  Circulation: {
    type: String,
    required: true
  },
  'Conditions atmospheriques' : String,
  'Surface' : String,
  'Lumiere': String
})

module.exports = gps;