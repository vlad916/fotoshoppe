const mongoose = require('mongoose');
const { genreSchema } = require('./genre');

const Product = mongoose.model('Products', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 255
    },
    picture: {
        type: String,
        required: true
    },
    genre: {
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    }, 
    dailyRentalRate:
    {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    price: {
        type: String,
        trim: true,
        minlength: 5,
        maxlength: 255
    }
}));

exports.Product = Product;