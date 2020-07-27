const { Product } = require('../models/product');
const { Genre } = require('../models/genre');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const products = await Product.find()
        .select("-__v")
        .sort('name');
    res.send(products);
});

module.exports = router;