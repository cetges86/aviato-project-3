// **** DEPENDENCIES ****
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const routes = require('./routes');
const flash = require('connect-flash');
const bodyparser = require('body-parser');

const app = express();

//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyparser.json({ limit: '50mb' }))
app.use(bodyparser.urlencoded({ limit: '50mb', extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

//catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error ' + err);
});
//configure session
app.use(session({ secret: 'team aviato', cookie: { maxAge: 600000 }, resave: true, saveUninitialized: true }));
app.use(flash());

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

// set up routing
app.use(routes);

//initialize mongoose db
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/yearbook_users";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// port listener for express server
var port = process.env.PORT || '3001';
app.listen(port, () => {
  console.log("Server started on port: " + port);
});

module.exports = app;
