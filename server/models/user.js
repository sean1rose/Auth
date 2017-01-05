// local definition of a user data model - email, password
// instructions for mongoose to handle this data model

const mongoose = require('mongoose');
// schema helps define the particular fields that our model will have
const Schema = mongoose.Schema;

// 1. Define our Model schema
  // create a schema
    // inside of obj constructor of our schema, pass in properties (and their types) that this model will have (email and pw)
    // want to ensure each property entered into our db is unique -> use object for email key value w/ unique property set to true (also convert to lowercase 1st cuz mongo doesn't differentiate)
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});


// 2. Create the model class by using mongoose
  // used to create new users
// loads the schema into mongoose, corresponds w/ collection 'user'
const ModelClass = mongoose.model('user', userSchema);
// ^ represents all users, a class of users

// 3. Export model so other files w/in our app can use it
module.exports = ModelClass;