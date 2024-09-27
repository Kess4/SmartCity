const express = require('express')
const app = express()
const port = 3000


const connectdB = require('./db');
const Gps = require('./model/gps');
const User = require('./model/user');
const Form = require('./model/form');


connectdB();

app.use(express.json({ extended : false}));

// get all coordinates + infos
app.get('/gps', async (req, res) => {

  const coor = await Gps.find({}).limit(100)

  res.json({data : coor})
})

// get all by surface
app.get('/surface', async(req, res) => {

  const coor = await Gps.find({ 'Surface' : req.body.Surface}); // remplacer corps gras par req

  res.json({data : coor})
});

// get all by lighting
app.get('/light', async(req, res) => {

  const coor = await Gps.find({ 'Lumiere' : req.body.Lumiere}); // remplacer plein jour par req

  res.json({data : coor})
});

// get all by meteo
app.get('/weather', async(req, res) => {
  
  const coor = await Gps.find({ 'Conditions atmospheriques' : req.body["Conditions atmospheriques"] }); // remplacer pluie legere par req

  res.json({data : coor})
});

// get all by surface, lighting and meteo
app.get('/filters', async(req, res) => {
  const coor = await Gps.find({ 'Surface' : req.body.Surface, 'Lumiere' : req.body.Lumiere, "Conditions atmospheriques" : req.body["Conditions atmospheriques"]
 }); // remplacer corps gras par req.body.Surface etc...

  res.json({data : coor})
});

// get all users
app.get('/login', async(req, res) => {

  const user = await User.find({});         

  res.json({data : user})
});

// post a user
app.post('/user', async (req, res) => {
  
  const user = new User({
    Username: req.body.Username,
    Password: req.body.Password,
    Email: req.body.Email
  })
  try{
  await user.save();
  }
  catch (err) {
    console.log(err.message);
  };

  res.json({msg : "insertion ok"})
});

// get all forms
app.get('/forms', async(req, res) => {

  const coor = await Form.find({}); 

  res.json({data : coor})
});

// post form
app.post('/forms', async (req, res) => {
  const form = new Form({
    Jour : req.body.Jour,
    Mois : req.body.Mois,
    Annee : req.body.Annee,
    Heure : req.body.Heure,
    Lieu : req.body.Lieu,
    Sexe : req.body.Sexe,
    Gravite : req.body.Gravite,
    Vehicule : req.body.Vehicule,
    Colision : req.body.Colision,
    'Conditions atmospheriques' : req.body.Meteo,
    Surface : req.body.Surface,
    Lumiere : req.body.Lumiere,
    Commentaire : req.body.Commentaire
  })
  try{
  await form.save();
  }
  catch (err) {
    console.log(err.message);
  };

  res.json({msg : "insertion ok"})
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
