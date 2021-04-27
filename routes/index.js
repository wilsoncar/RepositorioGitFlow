const dogsApi = require('../routes/dogs.js');
const mailerApi = require('../routes/mailer.js');

function controllers(app) {
    dogsApi(app);
    mailerApi(app);
}

module.exports = controllers;
