var express = require('express');
const { reset } = require('nodemon');
var router = express.Router({ mergeParams: true });


router.get('/', (req, res, next) => { res.send('get products') });
router.post('/', (req, res, next) => { res.send("crete product") })


module.exports = { router };