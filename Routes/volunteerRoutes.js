const express = require("express");
const app = express();
const Router = express.Router();

const {
  getVolunteer,
  addVolunteer,
  deleteVolunteer,
  updateVolunteer,
} = require("../controllers/volunteerController");

Router.get("/", async (req, res) => {
  try {
    const volunteer = await getVolunteer();
    res.json({ volunteer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.post("/", async (req, res) => {
  try {
    console.log("working");
    const volunteer = await addVolunteer(req.body);
    res.json({ volunteer });
  } catch (error) {
    console.log("working");
    res.status(500).json({ message: error.message });
  }
});

Router.post("/:id", async (req, res) => {
  try {
    const volunteer = await updateVolunteer(req.params.id, req.body);
    res.json({ volunteer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.post("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const volunteer = await deleteVolunteer(id);
    res.json({ volunteer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = Router;
