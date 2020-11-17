var express = require('express');
const { reset } = require('nodemon');
const productController = require('./controller');


var router = express.Router({ mergeParams: true });


router.get('/', (req, res, next) => { productController.getProducts(req, res, next) });
router.post('/', productController.createProducts)


module.exports = { router };