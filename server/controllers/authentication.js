// ***Authentication Controller - Handling the post request of user signup -> either user already exists or save user to DB**
  // this is where any request is gonna be piped to w/ a post request to signup route

// router defines the route user can visit -> upon hitting signup route and posting -> execute Authentication function, which sends back a json response (res.send)
// logic to process a request

const User = require('../models/user');
// mongoose user model


// ***GOAL: read in a user if one is passed via signup post request, check to see if user w/ that email already exists, then save the record and respond w/ a success response
// THIS IS THE SIGNUP ROUTE
exports.signup = function(req, res, next) {
  // 0. pull out info from request object (which should have email and pw data) of a post request
    // ***to pull out data -> use REQ.BODY (anything contained w/in the body of the post request)*** IMPORTANT
    // so need to send email and pw in the body of the post request
  const email = req.body.email;
  const password = req.body.password;
  console.log('rb - ', req.body);

  // ^ router provides us w/ posted in user (w/ email + pw) -> 

  // 1. See if user w/ given email exists
    // need to check thru db records and see if that email exists (if so -> throw error)
    // need ability to check our db records
    // use mongoose user model ('User' is 'User class') w/ method findOne, which checks for email property then calls callback
    User.findOne( { email: email }, function(err, existingUser) {
      // existingUser will be null if user doesn't exist
      // connection to db failed
      if (err) { return next(err); }

      // 2. if user already exists -> return an error (ERROR HANDLING)
      if (existingUser) {
        // set http code on response to 422
        return res.status(422).send({ error: 'Email is in use' });
      }

      // 3. if user w/ email does NOT exist -> create and save user record (to create new user -> call 'new' keyword on 'User' class)
      // create new user (in memory)
      const user = new User({
        email: email,
        password: password
      });
      // SAVE the user record to DB
      user.save(function(err) {
        if (err) { return next(err); }
        
        // 4. respond to request indicating that the user was created (sending back response success true)
      res.json({ success: true });
      });

    });
    // can now test this in postman ^, if successfully save a record in db, automatically get an id assigned




  
}