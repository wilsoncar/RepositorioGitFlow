const dogsApi = require('../routes/dogs.js');
const mailerApi = require('../routes/mailer.js');
const userApi = require('../routes/activate-user.js');

function controllers(app) {
    dogsApi(app);
    mailerApi(app);
    userApi(app);
}

module.exports = controllers;
