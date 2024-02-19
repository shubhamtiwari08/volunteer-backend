


const Volunteer = require('../models/volunteer.model.js');

console.log(Volunteer)


const getVolunteer = async () => {
  try {
    const volunteer = await Volunteer.find()
    console.log(volunteer)
    return volunteer;

  } catch (e) {
    throw e
  }
}

const addVolunteer = async (volunteer) => {
  try {
    const updatedList = await Volunteer(volunteer)
    const savedList = await updatedList.save()
    console.log(savedList)
    return savedList

  } catch (e) {
    throw e
  }
}

const updateVolunteer = async (id, updates) => {
  console.log(id)
  try {
    const volunteerToBeUpdated = await Volunteer.findByIdAndUpdate(id, updates, { new: true })
    const savedList = await volunteerToBeUpdated.save()
    console.log(savedList)
    return savedList

  } catch (e) {
    throw e
  }
}

const deleteVolunteer = async (id) => {
  try {
    const volunteerToBeDeleted = await Volunteer.findByIdAndDelete(id)
    const newList = Volunteer.find({});
    console.log(newList)
    return newList

  } catch (e) {
    throw e
  }
}



module.exports = { getVolunteer, addVolunteer, deleteVolunteer,updateVolunteer}