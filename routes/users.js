const Inventory = require('../models/inventory');
const User = require('../models/user');

module.exports = function(app, passport){

// Router Middle Ware
  function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
    res.redirect('/menu')
  };

  function notLoggedIn(req, res, next) {
    if(!req.isAuthenticated()) {
      return next();
    }
    res.redirect('/menu')
  };


// Sign Up
  app.get('/signup', notLoggedIn, function(req, res, next){
    res.render('user/sign_up', {message: req.flash('loginMessage'), csrfToken: req.csrfToken()});
  });

// Sign Up Authentication Using Passport
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile',
    failureRedirect : '/signup',
    failureFlash: true
  }));

// Log In
  app.get('/login', notLoggedIn, function(req, res){
    res.render('user/log_in', {message: req.flash('loginMessage'), csrfToken: req.csrfToken()});
  });

// Login Authentication Using Passport
  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile',
    failureRedirect : '/login',
    failureFlash: true
  }));


//   app.get('/logout', function(req, res){
//     req.logout();
//     res.redirect('/');
//   });

//   //Facebook Login... creates the connection to facebook
//   app.get('/auth/facebook', passport.authenticate('facebook'));

//   app.get('/auth/facebook/callback', passport.authenticate('facebook',{
//     successRedirect : '/menu',
//     failureRedirect : '/',
//     failureFlash: true
//   }));

//   //Twitter Login... creates the connection to twitter
//   app.get('/auth/twitter', passport.authenticate('twitter'));
//   app.get('/auth/twitter/callback', passport.authenticate('twitter',{
//     successRedirect : '/menu',
//     failureRedirect : '/',
//     failureFlash: true
//   }));
  app.get('/logout', notLoggedIn, function(req, res, next){
    req.logout();
    res.redirect('/menu');
  });

  app.get('/profile', isLoggedIn,  function(req, res, next){
    res.render('user/profile');
  });

// Do Not Delete This Curly Bracket.
// It Is The Closing Bracket Of Module.Exports Function
};
////////////////////////////
