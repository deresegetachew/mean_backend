const { productModel } = require('./model');

getProducts = async (req, res, next) => {
    let allProducts = await productModel.find()
    res.send(allProducts);
}

createProducts = async (req, res, next) => {
    console.log(req.body);

    let newProduct = await productModel.create({ name: 'sanitizer', count: 1 });
    res.send("createProducts");
}


module.exports = { getProducts, createProducts };