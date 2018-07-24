const router = require("express").Router();
const userController = require("../../controller/userController");
const authController = require("../../controller/authController");
const passport = require('../../config/passport');
const bodyparser = require('body-parser');
const formidable = require('formidable');
const grid = require("gridfs-stream");
const fs = require("fs");
const mongoose = require("mongoose");
const conn = mongoose.connection;


// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

router
  .route("/authenticated")
  .get(authController.checkAuthenticated);

router
  .route("/logout")
  .get(
    function (req, res) {
      req.logout();
    }
  );

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router  
  .route("/upload")
  .post(function (req, res) {
    var form = new formidable.IncomingForm();
    form.uploadDir = __dirname+"/Uploads";
    form.keepExtensions = true;
    form.parse(req, function (err, fields, files) {
        if (!err) {
            console.log('Files Uploaded: ' + files.file)
            grid.mongo = mongoose.mongo;
            var gfs = grid(conn.db);
            var writestream = gfs.createWriteStream({
                filename: files.name
            });
            fs.createReadStream(files.file.path).pipe(writestream);
        }
    });
    form.on('end', function () {
        res.send('Completed ... go check fs.files & fs.chunks in mongodb');
    });
});

router
  .route("/signUp")
  .post(authController.signUp);

router
  .route("/signIn")
  .post(
    passport.authenticate('local'),
    function (req, res) {
      res.json(req.user)
    }
  );




module.exports = router;


// Register
// router.get('/register',function(req,res){
//   res.render('register');
// });
// // login
// router.get('/login',function(req,res){
//   res.render('register');
// });



// Register users
// router.post('/register', function (req, res) {
//   var name = req.body.name;
//   var email = req.body.email;
//   var username = req.body.username;
//   var password = req.body.password;
//   var password2 = req.body.password2;

//   //Validation 
//   req.checkBody('name', 'Name is required').notEmpty();
//   req.checkBody('email', 'Email is required').notEmpty();
//   req.checkBody('email', 'Email is required').isEmail();
//   req.checkBody('username', 'Username is required').notEmpty();
//   req.checkBody('password', 'Password is required').notEmpty();
//   req.checkBody('password2', 'Password does not match').equals(req.body.password);
//   var errors = req.validationErrors();
//   if (errors) {
//     res.json('register', {
//       errors: errors
//     });
//   } else {
//     var newUser = new User({
//       name: name,
//       email: email,
//       username: username,
//       password: password
//     });
//     User.createUser(newUser, function (err, user) {
//       if (err) throw err;
//       console.log(user);
//     });
//     res.redirect('/users/login');
//   }
// });

