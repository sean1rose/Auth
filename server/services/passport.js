const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
// going to set up this strategy ^ w/ a config obj
const ExtractJwt = require('passport-jwt').ExtractJwt;

// 3 Step Process:

// 1. Set Up options for JWT Strategy
const jwtOptions = {};

// 2. Create JWT strategy
// 1st arg of JwtStrategy is the options obj, 2nd arg is func called whenever we need to auth a user w/ a jwt token
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // payload -> decoded JWT token created in authentication.js' "tokenForUser" function (payload should have 'sub' property [user.id] and 'iat' property)
  // done -> callback called depending on whether or not user is successfully authenticated
  
  // STEPS:
  // ***want to see if user ID in the payload exists in our db... (remember that we ecnoded user id as sub property on token)
    // *if so -> pass valid user to done callback -> user is authenticated and now has access
    // *if not -> call done w/o a user obj -> no auth
    
  // have user model, look thru all users for particular id (findById is a mongoose method), id is on our payload.sub property
  User.findById(payload.sub, function(err, user) {
    // serach failed to occur, so 1st arg is err (use null if search works)
    if (err) { return done(err, false);}
    if (user) {
      // if found user -> call done w/o error + that user
      done(null, user);
    } else {
      // couldnt find user -> call done w/ null + false
      done(null, false);
    }
  });
});

// 3. Tell passport to use this strategy

