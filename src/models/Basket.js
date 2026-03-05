const mongoose = require('mongoose');

// Mongoose Schema and Model
const basketSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  iid: { type: String, required: true }
});

module.exports = mongoose.model('Basket', basketSchema);