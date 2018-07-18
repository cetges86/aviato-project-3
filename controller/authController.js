const passport = require('../config/passport');
const controller = require('../controller/userController');

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
        console.log(`Body: ${req.body}`)
        console.log(`Params: ${req.params}`)
        var user = new User(req.body);
        // Update this to use the UserController
        controller.create(user, function (status) {
            if (!status) {
                res.json("ur dum")
                return false
            }
            res.json("success!");
        })
    },

    signOut: function () {
        // Codez goes here
    }

}