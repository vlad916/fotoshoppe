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
        type: Number,
        required: true,
        min: 0,
        max: 255
    }
}));

exports.Movie = Movie;