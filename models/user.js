const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

//User Schema 
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

module.exports = mongoose.model("User", userSchema);
