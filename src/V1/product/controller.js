const mongoose = require('mongoose');
const { productModel } = require('./model');

//query parameter currentPage , perPage 
//skip, limit 

getProducts = async (req, res, next) => {
    console.log(req.query);

    let pageNumber = +req.query.pageNumber;
    let limit = +req.query.limit;

    let skip = pageNumber > 0 ? ((pageNumber - 1) * limit) : 0;

    let products = await productModel.find({}).skip(skip).limit(limit);
    let totalCount = await productModel.find({}).count();


    res.send({ data: products, totalPage: Math.ceil(totalCount / limit), limit });
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