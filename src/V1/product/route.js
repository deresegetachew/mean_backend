var express = require('express');
var router = express.Router({ mergeParams: true });


router.get('/', (req, res, next) => { res.send('product route') });

module.exports = { router };