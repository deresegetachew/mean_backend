const express = require('express');

var router = express.Router();

router.get('/status', (req, res, next) => { res.send("you are in V1 API") });

module.exports = { router }