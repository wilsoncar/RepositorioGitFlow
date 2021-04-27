const express = require('express');
const DogsService = require('../services/dogs');

function dogsApi(app) {
    const router = express.Router();
    app.use("/api/dogs", router);

    const dogsService = new DogsService();

    router.get("/", async function (req, res, next) {
        try {
            const dogs = await dogsService.getBreeds();
            res.status(200).json({
                data: dogs.data,
                message: 'dogs listed'
            });
        } catch (err) {
            next(err);
        }
    });

}

module.exports = dogsApi;