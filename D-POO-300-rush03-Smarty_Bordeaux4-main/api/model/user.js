const mongoose =  require('mongoose')
const user = mongoose.model('users', {
  Username:String,
  Password:String,
  Email:String
})

module.exports = user;