const express = require('express');
const productRoute = require('./product/route');

var router = express.Router({ mergeParams: true });


router.get('/status', (req, res, next) => { res.send("you are in V1 API") });
router.use('/product', productRoute.router);


//router.use('/product', productRoute.router);

module.exports = { router }

//localhost:3000/api/V1/product/edit