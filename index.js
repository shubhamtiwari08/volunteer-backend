const express = require('express');
const cors = require('cors');
const app = express();

const { initializeDatabase } = require("./db/db.connection");
const volunteerRoutes = require('./Routes/volunteerRoutes')
const eventRoutes = require('./Routes/eventRoutes')


app.use(express.json());
app.use(cors());

initializeDatabase();

app.use('/volunteer', volunteerRoutes)
app.use('/event', eventRoutes)

app.get('/', (req, res) => {
  res.send("hellow")
})






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});