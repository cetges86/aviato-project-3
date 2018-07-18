const db = require("../models");
const passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
const controller = require("../controller/userController");

passport.use(new LocalStrategy(
    // { usernameField: "email" },
    function (name, password, done) {
      db.User.findOne({ email: name },
        function (err, user) {
          if (err) { return done(err); }
          if (!user) {
            return done(null, false, { message: "Email address not found" });
          }
          if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect Password' });
          }
          return done(null, user);
        });
    }
));

passport.serializeUser(function(user,done){
    done(null, user);
});

passport.deserializeUser(function(user,done){
    done(null, user);
});




module.exports = function(app) {

    app.get('/authenticated', function(req, res){
        if (req.isAuthenticated()) {
            res.json('authenticated', {
                username: req.user.username
            })
        } else {
            res.redirect('/')
        }
    })

    app.post('/signin', passport.authenticate('local', {failureRedirect:'/', failureFlash:"Wrong Username or Password"}), function(req, res){
        res.redirect("/authenticated");
    });


    app.post('/signup', function(req, res) {
        var user = new User(req.body);
        controller.create(user, function(status) {
            if(!status) {
                res.json("ur dum")
                return false
            }
            res.json("success!");
        })
    })
}