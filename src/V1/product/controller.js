const { productModel } = require('./model');

getProducts = async (req, res, next) => {
    let allProducts = await productModel.find()
    res.send(allProducts);
}

createProducts = async (req, res, next) => {
    const { name, count } = req.body;

    let newProduct = await productModel.create({ name: name, count: count });
    //let newProduct = await productModel.create({ name, count });

    res.send("createProducts");
}


module.exports = { getProducts, createProducts };