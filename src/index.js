const webServer = require('./config/config.server');
const dbConfig = require('./config/config.db');
const AppRouter = require('./router');

async function init() {
    const app = webServer.configWebServer();
    AppRouter.DefineRoutes(app);
    dbConfig.connectToDb();
    //configDb()
}

init();