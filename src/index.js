const webServer = require('./config/config.server');
const AppRouter = require('./router');

async function init() {
    const app = webServer.configWebServer();
    AppRouter.Router(app);
    //configDb()
}

init();