const mongoose = require("mongoose");
 
//Application Schema
const applicationSchema = new mongoose.Schema({

  user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
  },  
  applicationType: {
    type: String,
    required: true
  },
  scores: {
    type: Number,
    min: 1,
    max: 100
  },
  state: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },

  location: {
    address: {
      type: String,
      required: true
    },
    coordinates: [
      {
        type: Number,
        required: true
      }
    ]
  }
});

module.exports = mongoose.model("Application", applicationSchema);
