import mongoose from 'mongoose';

mongoose
  .connect('mongodb://0.0.0.0:27017/login')
  .then(() => console.log('DATABASE CONNECTED!'))
  .catch((er) => console.log(`Error connecting to database: ${er}`));

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model('collections', schema);

// eslint-disable-next-line no-undef
module.exports = collection;
