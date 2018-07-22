const db = require('../models')

// Defining methods for the authController
module.exports = {
    checkAuthenticated: function (req, res) {
        if (req.isAuthenticated()) {
            console.log("authcontroller" + JSON.stringify(req.user));
            res.status(200).json(req.user)
        } else {
            res.json("Not Logged In")
        }
    },
    signUp: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}

