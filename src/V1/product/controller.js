getProducts = (req, res, next) => {
    res.send("getProductsFromCOntroller");
}

createProducts = (req, res, next) => {
    res.send("createProducts");
}


module.exports = { getProducts, createProducts };