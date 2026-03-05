
const mongoose = require('mongoose');

const Basket = require('../models/Basket');



// CREATE a new product
exports.addToBasket = async (req, res) => {
  try {
    const { uid, iid } = req.body; // include image from client
    const newBasket = await Basket.create({ uid, iid });
    
    //const newProduct = new Product({ name, price, description });
    //await newProduct.save();

    res.status(201).json({
      message: "Added to basket successfully!", // Requirement satisfied
      product: newBasket
    });
  } catch (err) {
    res.status(500).json({ message: "Error adding to basket", error: err.message });
  }
}

// READ all products
exports.getBasket = async (req, res) => {
  try {
    const baskets = await Basket.findById(uid);
    res.json(baskets);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products" });
  }
}

// DELETE a product by ID
exports.removeItem = async (req, res) => {
  try {
    const { iid } = req.params;
    const deleted = await Basket.findByIdAndDelete(iid);
    if (!deleted) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Removed from basket', product: deleted });
  } catch (err) {
    res.status(500).json({ message: 'Error removing item', error: err.message });
  }
}