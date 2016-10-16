
// Require Modules

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var csrf = require('csurf');
var passport = require('passport');
var flash = require('connect-flash');

// Init App

var app = express();
var csrfProtection = csrf({ cookie: true });


// Connect With Mongo DB

mongoose.connect('mongodb://localhost/P_U_w_N_L');

// Init Middle-are

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //what is this?


// Serve Static Files

app.use(express.static(path.join(__dirname, 'public'))); // what is __dirname


// View Engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// Setup Sessions

app.use(session({secret: 'Why do we need a secret?'})); // why do we need a secret?
app.use(flash()); // when do we use flash?
app.use(passport.initialize());
app.use(passport.session());
app.use(csrfProtection);


// Setting A Global Variable
app.use(function(req, res, next){
  res.locals.login = req.isAuthenticated();
  next();
})

// Passport Strategy
require('./config/passport')(passport);

// Routes
require('./routes/routes')(app, passport); //does this insert the routes.js file here?
require('./routes/users')(app, passport); //does this insert the routes.js file here?

app.listen(3000, function(){
  console.log("Listening On Port 3000!");
});


// Basics of Express

    // What is Express?
      // ANS:

          // var express = require('express');
          // var app = express();

          // app.get('/', function(req, res){
          //   res.send('hello world');
          // });

          // app.listen(3000, function(){
          //   console.log("listening on port 3000")
          // });