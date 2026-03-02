
const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');


router.get('/get', productController.getProducts);
router.post('/add', productController.createProduct);
router.put('/up/:id', productController.updateProduct);
router.delete('/del/:id', productController.deleteProduct);

module.exports = router;