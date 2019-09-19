import dva from 'dva';
import router from "./router/router"
import './index.css';

const createHashHistory = require("history/createHashHistory")



// 1. Initialize
const app = dva({
    history: createHashHistory()
})

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');