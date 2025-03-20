
module.exports = (app) => {
    const requests = require('../controller/requests.js');

    app.post('/api/addrequest', requests.create);
    app.get('/api/myrequests/:telegramId', requests.fingByTelegram);
    app.get('/api/requests', requests.findAll);
}