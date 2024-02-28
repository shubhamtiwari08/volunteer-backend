const Volunteer = require("../models/volunteer.model.js");

console.log(Volunteer);

const getVolunteer = async () => {
  try {
    const volunteer = await Volunteer.find();
    console.log(volunteer);
    return volunteer;
  } catch (e) {
    throw e;
  }
};

const addVolunteer = async (volunteer) => {
  try {
    const updatedList = await Volunteer(volunteer);
    const savedList = await updatedList.save();
    console.log(savedList);
    return savedList;
  } catch (e) {
    throw e;
  }
};

// addVolunteer({
//   name: "shubha",
//   skill: "java",
//   interest: "java",
//   availability: "monday",
//   contactNumber: 9876543210,
// });

const updateVolunteer = async (id, updates) => {
  try {
    // Use findByIdAndUpdate directly without saving separately
    const updatedVolunteer = await Volunteer.findByIdAndUpdate(
      id,
      updates,
      { new: true }
    );

    // Log the updated volunteer for debugging
    console.log(updatedVolunteer);

    // Return the updated volunteer
    return updatedVolunteer;
  } catch (e) {
    // Throw the caught error
    throw e;
  }
};

const deleteVolunteer = async (id) => {
  try {
    const volunteerToBeDeleted = await Volunteer.findByIdAndDelete(id);
    const newList = Volunteer.find({});
    console.log(newList);
    return newList;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getVolunteer,
  addVolunteer,
  deleteVolunteer,
  updateVolunteer,
};
