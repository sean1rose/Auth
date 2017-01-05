// Authentication Controller
  // this is where any request is gonna be piped to w/ a post request to signup route

// router defines the route user can visit -> upon hitting signup route and posting -> execute Authentication function, which sends back a json response (res.send)
// logic to process a request

exports.signup = function(req, res, next) {
  // wire up to our router
  // send back json to client
  res.send({ success: 'true' });
  // ^ can test this w/ postman by making a post request to localhost:3090/signup
}