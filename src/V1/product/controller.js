const product = require('./model');
getProducts = (req, res, next) => {
    res.send("getProductsFromCOntroller");
}

createProducts = async (req, res, next) => {

    let newProduct = await product.productModel.create({ name: 'sanitizer', count: 1 });
    res.send("createProducts");
}


module.exports = { getProducts, createProducts };