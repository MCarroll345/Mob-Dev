
const mongoose = require('mongoose');

const Product = require('../models/Product');



// CREATE a new product
exports.createProduct = (req, res) => {
  try {
    const { name, price, description, image } = req.body; // include image from client
    const newProduct = Product.create({ name, price, description, image });
    
    //const newProduct = new Product({ name, price, description });
    //await newProduct.save();

    res.status(201).json({
      message: "Product added successfully!", // Requirement satisfied
      product: newProduct
    });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", error: err.message });
  }
}

// READ all products
exports.getProducts = (req, res) => {
  try {
    const products = Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products" });
  }
}

// UPDATE a product by ID
exports.updateProduct = (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedProduct = Product.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product updated', product: updatedProduct });
  } catch (err) {
    res.status(500).json({ message: 'Error updating product', error: err.message });
  }
}

// DELETE a product by ID
exports.deleteProduct = (req, res) => {
  try {
    const { id } = req.params;
    const deleted = Product.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted', product: deleted });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting product', error: err.message });
  }
}