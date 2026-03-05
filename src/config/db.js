
const mongoose = require('mongoose');
const Product = require('../models/Product');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Successfully connected to MongoDB');

    const count = await Product.countDocuments();
    if (count === 0) {
        const seedProducts = [{ name: 'tshirt', price: 20, description: 'Large green tshirt', image: 'base64string...' }]
        await Product.insertMany(seedProducts);
        console.log('🟢 Seeded initial products');
    }
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;