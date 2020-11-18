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

//router.parameter id 
//body {name: ''}
//return the new updated product
updateProduct = async (req, res, next) => {
    const { id } = req.params;
    const { name, count } = req.body;

    let { nModified } = await productModel.updateOne(
        { _id: mongoose.Types.ObjectId(id) },
        { name, count }, { new: true, returnOriginal: false }).exec();
    if (nModified > 0) {
        let updatedProduct = await productModel.findById(mongoose.Types.ObjectId(id)).exec();
        res.status(204).send(updatedProduct)
    }
    res.status(200).send("no product was updated");
}

// routerparmaeter id
//find by the id and delete
deleteProduct = async (req, res, next) => {
    let { id } = req.params;

    let { deletedCount } = await productModel.deleteOne({ "_id": mongoose.Types.ObjectId(id) }).exec();

    if (deletedCount > 0)
        res.status(200).send("product deleted");
    else
        res.status(500).send("Error deleting product");

}


module.exports = { getProducts, createProducts, getProductByName, getProductById, updateProduct, deleteProduct };