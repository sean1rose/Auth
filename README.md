# Authentication Boilerplate setup using Node/Express, MongoDB and Passport
Can use this baby as a boilerplate for an auth backend setup. Has signup, signin and allows for authenticated requests so can protect resources and ensure that certain routes require authentication...

## Uses Passport Local Strategy for signing in...
'requireSignin' middleware in router.js

## Uses JWT Passport Strategy for authenticated requests (restricting access to protected resources)...
'requireAuth' middleware in router.js

## NOTES (can also be found in notes.js):
###3 possible flows:
1. signing up (a) : verify that email not already in use -> then give user a JWT token (created using user id)
2. sign in (c) : user supplies email/pw to login -> we verify using passport local strategy -> then assign token
3. authorized request (b) : if user tries to make an auth'd request -> verify the token correct using JWT passport strategy -> then provide access to the protected resource

*If ever want to provide a protected route in the future -> just use the 'requireAuth' middleware as the 2nd argument in app.get; 3rd argument is whatever the protected route is

## To get up and running:
1. npm install from "server" directory
2. make sure mongodb is installed
3. run 'mongod' from "server" directory
4. run 'npm run dev' from "server" directory
5. Can use postman to test routes ('signup', 'signin' and '/')...


## POST 'localhost:3090/signup' Route
### Headers:
Content-Type: application/json
### BODY (json format) :
{
  "email": "test@email.com",
  "password": "test1234"
}
### -> If successful, should provide token in response body. Example:
{
  "token": "RANDOM_TOKEN_STRING"
}


## POST 'localhost:3090/signin' Route
### Headers: 
Content-Type: application/json
### BODY (json format) :
{
  "email": "test@email.com",
  "password": "test1234"
}
### -> If successful, should provide token in response body. Example:
{
  "token": "RANDOM_TOKEN_STRING"
}


## GET 'localhost:3090/' Route (PROTECTED ROUTE)
### Headers: 
Content-Type: application/json
auth: RANDOM_TOKEN_STRING
### BODY (json format) :
{
  "email": "test@email.com",
  "password": "test1234"
}
### -> If successful, should provide following boilerplate response in body:
{
  "hi": "there"
}