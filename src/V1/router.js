const express = require('express');

var router = express.Router({ mergeParams: true });
const productRoute = require('./product/route');

router.get('/status', (req, res, next) => { res.send("you are in V1 API") });
router.use('/product', productRoute.router);

module.exports = { router }