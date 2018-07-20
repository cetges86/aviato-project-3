const passport = require('../config/passport');
const controller = require('../controller/userController');
const db = require('../models')

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

    signIn: passport.authenticate('local', {
        failureRedirect: '/',
        failureFlash: "Wrong Username or Password"
    }), function(req, res) {
        res.json("authenticated!");
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