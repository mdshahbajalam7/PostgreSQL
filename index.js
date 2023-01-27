const express = require("express");
const bodyparse = require("body-parser");
const student = require("./controller/student");
const app = express();
require("dotenv").config();

app.use(bodyparse.json());
app.use(bodyparse.urlencoded({ extended: true }));

app.use("/student", student);

app.get("/", (req, res) => {
  res.send("Node.js, Express, and Postgres API");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});  
