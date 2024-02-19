const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: Date,
  },
  location: {
    type: String
  },
  description:{
    type:String
  },
  requirement:{
    type:Number
  }
})

const Event = mongoose.model("event", eventSchema)

module.exports = Event