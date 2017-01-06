/*
NOTES:

// using postman, mongodb and robomongo apps to help test/create the backend


A) ***SIGNUP PROCESS***
1. index.js -> initialize our server

2. router.js -> to handle routes
  1 of those routes is POST signup (not signin)

3. authentication.js -> handles signup post request and returns JWT token upon success
  -checks to see if user in request already exists, if not -> saves user to db 
  -(also encrypt password)
  -if successful -> want to pass back the user a JSON Web Token (JWT), which they can then use in the future to make authenticated requests
    -so need to create a JWT -> encrypt user's id w/ secret string (ss is stored in config.js)
      -use library called 'jwt-simple'
        - use 'sub' and 'iat' properties of jwt
      -use secret string from config.js

    -JWT allows us to make authenticated requests in the future: send JWT, we decrypt w/ our secret string -> should yield a user id (we can then verify that user exists)

4. user.js -> creates user model based on mongoose schema (used in authentication.js to save the user to db)

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
*what passport is doing for us:
- answer question "is user logged in?"" before hitting the controllers (see "auth middleware process diagram")
- don't want to verify in the actual controllers, but do it in a separate layer beforehand (encapsulation)
*Passport Strategies: (strategy == method for authentication a user)
  #1: verify user w/ a JWT
  #2: verify user w/ a username and pw


-----------------------------------

C) *** SIGN IN /LOG IN PROCESS ***
(need ability for user to exchange username + pw for token via signing in)




*/