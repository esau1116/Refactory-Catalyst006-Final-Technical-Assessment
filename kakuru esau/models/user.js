// Require mongoose dependency to include mongoose functionality.
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    surname: String,
    given_name: String,
    dob: Date,
    placeofresidence: String,
    occupation: String,
    nationality: String,
    gender: String,
    category: String
});



module.exports = mongoose.model('User', userSchema)