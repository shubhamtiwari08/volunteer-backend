const mongoose = require("mongoose");

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
  },
  availability: {
    type: String,
  },
  contactNumber: {
    type: String,
    required: true,
  },
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;
