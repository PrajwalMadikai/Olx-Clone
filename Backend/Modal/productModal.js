const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  userId: {
    type: String
  },
  brand: {
    type: String
  },
  year: {
    type: String
  },
  fuel: {
    type: String
  },
  transmission: {
    type: String
  },
  owners: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  image: {
    type: String
  }
});

module.exports = mongoose.model('products', productSchema);
