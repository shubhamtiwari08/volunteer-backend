const mongoose = require("mongoose")


const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  skill: {
    type: String,
    required: true,
  },
  interest: {
    type: String,
    enum: ["Machine Learning", "Web Development", "Graphic Design", "Digital Art", "UI/UX Design"]
  },
  availability: {
    type: String,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
})


const Volunteer = mongoose.model("Volunteer", volunteerSchema)

module.exports = Volunteer