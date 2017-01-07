/*
NOTES:

// using postman, mongodb and robomongo apps to help test/create the backend


A) ***SIGNUP PROCESS***
1. index.js -> initialize our server

2. router.js -> to handle routes
  1 of those routes is POST signup (not signin)

3. user.js -> creates user model based on mongoose schema (used in authentication.js to save the user to db) [SEE STEPS IN USER.JS FILE]

4. authentication.js -> handles SIGNUP post request and returns JWT token upon success [SEE STEPS IN AUTHENTICATION.JS FILE]
  -checks to see if user in request already exists, if not -> saves user to db 
  -(also encrypt password)
  -if successful -> want to pass back the user a JSON Web Token (JWT), which they can then use in the future to make authenticated requests
    -so need to create a JWT -> encrypt user's id w/ secret string (ss is stored in config.js)
      - created using following code in function "tokenForUser(user)"
        jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
    -JWT allows us to make authenticated requests in the future: send JWT, we decrypt w/ our secret string -> should yield a user id (we can then verify that user exists)

5. config.js -> holds app secrets (to help create JWTs) and config
  // make sure to add this file to .gitignore



-----------------------------------

B) *** AUTHENTICATION MIDDLEWARE PROCESS: NEED TO VERIFY THAT A USER IS AUTHENTICATED WHEN VISITNG/ACCESSING A PROTECTED RESOURCE *****
-authentication layer
-(this is the "Logged in?" box in the "auth middleware process diagram"")
-did the user include a valid JWT w/ their request? -> in order to access protected resources (only want to do this on SOME routes)
  -service to determine if user is currently logged in


*use PASSPORT.JS - authentication library (usu cookie based, we're doing a JWT token based implementation) - used for when a user wants to visit a resource that requires authentication
  -new folder/file called 'services/passport.js'
*what passport is doing for us: -> Passport is an ecosystem of STRATEGIES
- answer question "is user logged in?"" before hitting the controllers (see "auth middleware process diagram")
- don't want to verify in the actual controllers, but do it in a separate layer beforehand (encapsulation)
*Passport Strategies: (strategy == method for authentication a user)
  #1: verify user w/ a JWT
  #2: verify user w/ a username and pw

****3 STEP PROCESS in passport.js file***
  1. set up config options for JWT strategy
  2. create a jwt strategy
    // pass it a callback that looks for userId contained w/in the token
  3. tell passport to use this strategy


-----------------------------------

C) *** SIGN IN /LOG IN PROCESS ***
(need ability for user to exchange username + pw for token via signing in)




*/