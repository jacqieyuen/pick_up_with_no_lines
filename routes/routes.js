const Inventory = require('../models/inventory');
const User = require('../models/user');

module.exports = function(app, passport){

// Router Middle Ware
  function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
    }
    res.redirect('/')
  };

// Menu Data
  function findInventoryDatabase(req, res, next) {
      Inventory.find(function(err, items){
      if(err){
        res.send(err);
      };
      // var itemChunks = [];
      // var chunkSize = 3;
      // for(var i = 0; i < items.length; i += chunkSize){
      //   itemChunks.push(items.slice(i, i + chunkSize));
      // };
      req.inventory = items;
      next();
    });
  };

  function distinctInventoryCategory(req, res, next){
    Inventory.distinct('category', function(err, items){
      if(err){
        res.send(err);
      };
      req.category = items;
      next()
    });
  };

  function renderMenu(req, res){
    res.render('shop/menu', {
        inventory: req.inventory,
        category: req.category
    });
  };

  app.get('/menu', findInventoryDatabase, distinctInventoryCategory, isLoggedIn, renderMenu);

// Sign Up
  app.get('/signup', function(req, res, next){
    res.render('user/sign_up', {message: req.flash('loginMessage'), csrfToken: req.csrfToken()});
  });

// Sign Up Authentication Using Passport
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/menu',
    failureRedirect : '/signup',
    failureFlash: true
  }));

// Log In
  app.get('/login', function(req, res){
    res.render('user/log_in', {message: req.flash('loginMessage'), csrfToken: req.csrfToken()});
  });

// Login Authentication Using Passport
  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/menu',
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

// // POST FUNCTIONS. aka.-----------------------------



// Do Not Delete This Curly Bracket.
// It Is The Closing Bracket Of Module.Exports Function
};
////////////////////////////
