// route handler
// will export a function from this file, imported by index.js file, then pass app into that function

// to export code in node.js enviornment use module.exports
// define routes that user can visit
module.exports = function(app) {
  // standard syntax for route handlers...
    // expecting an http get request for index of our app, then run this function
      // 3 args: 
        // request -> has a bunch of data about the request (where it's coming from, what route looking for, etc);
        // response -> reprsents the response, so can respond to our users in some function
        // next -> mostly for error handling
  app.get('/', function(req, res, next) {
    // just responding w/ json
      // want to respond w/ an array of strings...
    res.send(['water', 'bottle', 'phone', 'paper']);

  });


}