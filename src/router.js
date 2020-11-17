const express = require('express');
const V1 = require('./V1/router');

function Router(app) {
    let appRouter = express.Router()
    let v1Router = express.Router({ mergeParams: true });

    app.use('/', appRouter); //locahost:3000
    appRouter.use('/api', v1Router); //localhost:3000/api
    v1Router.use('/V1', V1.router); //localhost:3000/api/V1/


}

module.exports = { Router };