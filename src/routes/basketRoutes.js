const express = require('express');
const router = express.Router();

const basketController = require('../controllers/basketController');


router.get('/get/:uid', basketController.getBasket);
router.post('/add', basketController.addToBasket);
router.delete('/del', basketController.removeItem);

module.exports = router;