const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Kessia:Efkkas14@cluster0.9d497ob.mongodb.net/?retryWrites=true&w=majority/')
    
  console.log('MongoDB Connected...')
  }
  catch (err) {
    console.log(err.message);
  };
};


module.exports = connectDB