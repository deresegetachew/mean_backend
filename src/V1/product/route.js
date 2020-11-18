var express = require('express');
const { reset } = require('nodemon');
const { getProductByName, getProductById } = require('./controller');
const productController = require('./controller');


var router = express.Router({ mergeParams: true });


router.get('/', (req, res, next) => { productController.getProducts(req, res, next) });
router.get('/:name', getProductByName)
router.get('/byid/:id', getProductById)
router.post('/', productController.createProducts)


module.exports = { router };