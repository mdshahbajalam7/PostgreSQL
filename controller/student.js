const express = require("express");
const database = require("../database");
const student = express();
// get router here
student.get("/", (req, res) => {
  let getquery = "SELECT * FROM student ORDER BY name ASC";
  database.query(getquery, (error, results) => {
    if (error) {
      throw error;
    }
    res
      .status(201)
      .json({ Message: "Get successfully", results: results.rows });
  });
});

student.post("/create", (req, res) => {
  const { name, email, gender, mobile } = req.body;
//   const recordCount = 0;
  const created_at = new Date();
  const updated_at = new Date();
//   database.query("SELECT COUNT(student.id) FROM student", (error, results) => {
//     if (error) {
//       throw error;
//     }
//     recordCount = Number(results.rows[0].count);
//   });

  const postqueary =
    "INSERT INTO student(name,email gender,mobile,created_at,updated_at) VALUES ($1,$2,$3,$4,45,$6)RETURING *"[
      (name, email, gender, mobile, created_at, updated_at)
    ];
  database.query(postqueary, (error, results) => {
    if (error) {
      throw error;
    }
    // recordCount += 1;
    res.status(201).send({
      message: "Employees created",
      data: results.rows[0],
      recordCount,
    });
  });
});
module.exports = student;
