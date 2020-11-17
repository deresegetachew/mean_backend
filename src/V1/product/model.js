const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: 'string',
    count: 'number'
});

const productModel = mongoose.model('Product', schema);

module.exports = { productModel };