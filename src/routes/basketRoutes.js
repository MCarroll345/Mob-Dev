const express = require('express');
const router = express.Router();

const basketController = require('../controllers/basketController');


router.get('/get', productController.getBasket);
router.post('/add', productController.addToBasket);
router.delete('/del/:id', productController.removeItem);

module.exports = router;