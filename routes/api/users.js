const router = require("express").Router();
const userController = require("../../controllers/userController");
const User = require('../models/user');

// Register
router.get('/register',function(req,res){
  res.render('register');
});
// login
router.get('/login',function(req,res){
  res.render('register');
});
// Register users
router.post('/register',function(req,res){
  var name=req.body.name;
  var email=req.body.email;
  var username=req.body.username;
  var password=req.body.password;
  var password2=req.body.password2;

  //Validation 
  req.checkBody('name','Name is required').notEmpty();
  req.checkBody('email','Email is required').notEmpty();
  req.checkBody('email','Email is required').isEmail();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password','Password is required').notEmpty();
  req.checkBody('password2','Password does not match').equals(req.body.password);
  var errors=req.validationErrors();
  if(errors){
    res.render('register',{
      errors:errors
    });
  }else{
    var newUser=new User({
      name:name,
      email:email,
      username:username,
      password:password
    });
    User.createUser(newUser,function(err,user){
      if(err) throw err;
      console.log(user);
    });
    res.redirect('/users/login');
  }
});

// Matches with "/api/books"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
