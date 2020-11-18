const express = require('express');
const bodyParser = require('body-parser');

const V1 = require('./V1/router');

function DefineRoutes(app) {
    let appRouter = express.Router();
    let v1Router = express.Router({ mergeParams: true });

    //order of definition matters use before binding / to appRouter
    //allows us to accept json payload in the body, only looks at requests where Content-Type is json
    app.use(express.json({ type: 'application/json' })); //uses body-parser

    app.use('/', appRouter); //localhost:3000
    appRouter.use('/api', v1Router); //localhost:3000/api
    v1Router.use('/V1', V1.router); //localhost:3000/api/V1/






}

module.exports = { DefineRoutes };