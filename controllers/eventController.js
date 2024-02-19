


const Event = require('../models/event.model.js');

 


const getEvents = async () => {
  try {
    const Events = await Event.find()
    console.log(Events)
    return Events;

  } catch (e) {
    throw e
  }
}

const addEvent = async (event) => {
  try {
    const updatedList = await Event(event)
    const savedList = await updatedList.save()
    console.log(savedList)
    return savedList

  } catch (e) {
    throw e
  }
}

const updateEvent= async (id, updates) => {
  console.log(id)
  try {
    const EventToBeUpdated = await Event.findByIdAndUpdate(id, updates, { new: true })
    const savedList = await EventToBeUpdated.save()
    console.log(savedList)
    return savedList

  } catch (e) {
    throw e
  }
}

const deleteEvent = async (id) => {
  try {
    const EventToBeDeleted = await Event.findByIdAndDelete(id)
    const newList = Event.find({});
    console.log(newList)
    return newList

  } catch (e) {
    throw e
  }
}



module.exports = { getEvents, addEvent, deleteEvent, updateEvent }