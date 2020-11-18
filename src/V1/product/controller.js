const mongoose = require('mongoose');
const { productModel } = require('./model');

//query parameter currentPage , perPage 
//skip, limit 

getProducts = async (req, res, next) => {
    console.log(req.query);
    let allProducts = await productModel.find({})
    res.send(allProducts);
}


getProductByName = async (req, res, next) => {
    let { name } = req.params;

    let products = await productModel.find({ name }).exec();

    res.status(200).send(products);
}

getProductById = async (req, res, next) => {
    const { id } = req.params;

    let prod = await productModel.find({ _id: mongoose.Types.ObjectId(id) }).exec();
    res.status(200).send(prod);
}

createProducts = async (req, res, next) => {
    const { name, count } = req.body;

    let newProduct = await productModel.create({ name: name, count: count });
    //let newProduct = await productModel.create({ name, count });

    res.status(201).send(newProduct.toObject());
}


module.exports = { getProducts, createProducts, getProductByName, getProductById };