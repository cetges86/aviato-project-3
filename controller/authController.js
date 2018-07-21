const passport = require('../config/passport');
const db = require('../models')
const controller = require("../controller/userController")

// Defining methods for the authController
module.exports = {
    checkAuthenticated: function (req, res) {
        if (req.isAuthenticated()) {
            console.log(req.user);
            res.json('authenticated', {
                username: req.user.username
            })
        } else {
            res.redirect('/')
        }
    },

    signUp: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    signOut: function () {
        // Codez goes here
    }

}