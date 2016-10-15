
// Load passport local
var localStrategy = require('passport-local').Strategy;

var facebookStrategy = require('passport-facebook').Strategy;

var twitterStrategy = require('passport-twitter').Strategy;

// Load validator
var validator = require('validator');

// Load user model
var User = require('../models/user');

module.exports = function( passport ) {

  // Serialize user
  passport.serializeUser( function( user, done){
      done(null, user.id);
  });

  // Deserialize user
  passport.deserializeUser(function(id, done){
      User.findById(id, function(err, user){
        done(err, user);
      });
  });

  // Passport signup
  passport.use('local-signup', new localStrategy({
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback: true
    },
    function( req, email, password, done){

        // Check that the email is in the right format
        if( !validator.isEmail(email) ){
          return done(null, false, req.flash('loginMessage','That is not a valid email address'));
        }

        // Check that the password is at least 8 chars
        if( password.length < 8 ){
          return done(null, false, req.flash('loginMessage','The password needs to be 8 chars long'));
        }

        process.nextTick(function(){
          User.findOne( {'local.email' : email }, function(err, user){
            if(err){
              return done(err);
            }
            if(user){
              return done(null, false, req.flash('loginMessage','That email is already in use'));
            }else{
              var newUser = new User();
              newUser.local.email = email;
              newUser.local.password = password;
              newUser.save(function(err){
                if(err){
                  console.log(err);
                }
                return done(null, newUser, req.flash('loginMessage', 'Logged in successfully'));
              });
            }
          });
        });
    }));

  // Passport login
  passport.use('local-login', new localStrategy({
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback: true
    },
    function( req, email, password, done){
        process.nextTick(function(){
          User.findOne( {'local.email' : email }, function(err, user){
            if(err){
              return done(err);
            }

            if(!user){
              return done(null,false, req.flash('loginMessage', 'sorry no one by that email'));
            }

            user.validPassword(password, function(err, isMatch){

              if(isMatch){
                return done(null, user, req.flash('loginMessage', 'Logged in successfully'));
              }

              return done(null,false, req.flash('loginMessage', 'sorry wrong password'));
            })
          });
        });
    }));

  passport.use(new facebookStrategy({
    clientID: "617103318469230",
    clientSecret: "7c695e121af17396bce5668bcfee9505",
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    passReqToCallback: true
    },
    function(req, accessToken, refreshToken, profile, done){
      process.nextTick(function(){
        User.findOne( {'facebook.id' : profile.id }, function(err, user){
          if(err){
            return done(err);
          }
          if(user){
              return done(null, user, req.flash('loginMessage', 'Logged in successfully'));
                }else{
                  var newUser = new User();
                  newUser.facebook.id = profile.id;
                  newUser.facebook.password = accessToken;
                  newUser.facebook.name = profile.displayName;
                  newUser.save(function(err){
                    if(err){
                      console.log(err);
                    }
                      return done(null, newUser, req.flash('loginMessage', 'Logged in successfully'));
                    });
                }
        });
      });
  }));
  passport.use(new twitterStrategy({
    consumerKey: "6a3fukp45Rrf3AkBDdNNGO0Bv",
    consumerSecret: "QcIHMskB0F77Xzi1KmUYMntBVAmjJGNxqCFP8qAZ9bx1sR38yu",
    callbackURL: "http://localhost:3000/auth/twitter/callback",
    passReqToCallback: true
    },
    function(req, token, tokenSecret, profile, done){
      process.nextTick(function(){
        User.findOne( {'twitter.id' : profile.id }, function(err, user){
          if(err){
            return done(err);
          }
          if(user){
              return done(null, user, req.flash('loginMessage', 'Logged in successfully'));
                }else{
                  var newUser = new User();
                  newUser.twitter.id = profile.id;
                  newUser.twitter.token = token;
                  newUser.twitter.secret = tokenSecret;
                  newUser.twitter.name = profile.displayName;
                  newUser.twitter.username = profile.username;
                  newUser.twitter.img = profile.photos[0].value;
                  newUser.save(function(err){
                    if(err){
                      console.log(err);
                    }
                      return done(null, newUser, req.flash('loginMessage', 'Logged in successfully'));
                    });
                }
        });
      });
  }));


//do not delete thiscurly bracket!!!
}
//do not delete this curly bracket!!!