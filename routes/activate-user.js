const express = require('express');
const UserService = require('../services/activate-user');

function userApi(app) {
    const router = express.Router();
    app.use("/api/user", router);

    const userService = new UserService();

    router.get("/", async function (req, res, next) {
        const { body: user } = req;
        console.log('user', user);
        try {
            const usr = await userService.getUser(user.id);
            res.status(200).json({
                data: usr,
                message: 'user selected'
            });
        } catch (err) {
            next(err);
        }
    });

}

module.exports = userApi;