const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true

    },
    countInStock: {
        type: Number,
        required: true,
    },
    size: {
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true,
    }
    
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;