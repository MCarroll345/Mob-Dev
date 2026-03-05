
const mongoose = require('mongoose');

const Basket = require('../models/Basket');



// CREATE a new product
exports.addToBasket = async (req, res) => {
  try {
    const { uid, iid, quantity } = req.body;
    const existing = await Basket.findOne({ uid, iid });
    
    if (existing) {
      existing.quantity += quantity || 1;
      await existing.save();
      return res.status(200).json({
        message: "Added to basket successfully",
        basket: existing
      });
    }
    
    const newBasket = await Basket.create({ uid, iid, quantity });
    res.status(201).json({
      message: "Added to basket successfully",
      basket: newBasket
    });
  } catch (err) {
    res.status(500).json({ message: "Error adding to basket", error: err.message });
  }
}

exports.getBasket = async (req, res) => {
  try {
    const { uid } = req.params;
    const baskets = await Basket.find({ uid }).populate('iid', 'name price description image');
    res.status(200).json(baskets);
  } catch (err) {
    res.status(500).json({ message: "Error fetching basket", error: err.message });
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