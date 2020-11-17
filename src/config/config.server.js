const express = require('express');

const app = express();
const port = 3000;

const configWebServer = () => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });

    return app;
}



module.exports = { configWebServer };