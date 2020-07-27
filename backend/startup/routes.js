const express = require('express');
const genres = require('../routes/genres');
const products = require('../routes/products');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/genres', genres);
    app.use('/api/products', products);
}