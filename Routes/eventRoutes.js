const express = require('express');
const app = express
const Router = app.Router()

const { getEvents, addEvent, deleteEvent, updateEvent } = require("../controllers/eventController")

Router.get('/', async (req, res) => {
  try {
    const events = await getEvents()
    res.json({ events })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

Router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const events = await addEvent(req.body)
    res.json({ events })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }

})

Router.post('/:id', async (req, res) => {
  try {
    const volunteer = await updateEvent(req.params.id, req.body)
    res.json({ volunteer })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }

})


Router.post('/delete/:id', async (req, res) => {
  const id = req.params.id
  try {
    const events = await deleteEvent(id)
    res.json({ events })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }

})

module.exports = Router