const express = require("express");
const app = express();
const cors = require("cors");
const Pool = require("pg").Pool;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: "localhost",
  database: "student_details",
  port: 5432,
  user: "postgres",
  password: "password",
});

// Test api
app.get("/test", (req, res) => {
  try {
    res.json("This is api test");
    console.log("api test");
  } catch (err) {
    console.log(err);
  }
});

// create student
app.post("/create", async (req, res) => {
  try {
    const { stud_name, dob, gender, add_1, add_2, city, state_name, pin_code } =
      req.body;
    const insert_query =
      "INSERT INTO student(stud_name, dob, gender, add_1, add_2, city, state_name, pin_code) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)";
    const insert = await pool.query(insert_query, [
      stud_name,
      dob,
      gender,
      add_1,
      add_2,
      city,
      state_name,
      pin_code,
    ]);
    res.json(insert.rows[0]);
    console.log("Student created");
  } catch (err) {
    console.log(err);
  }
});

// get al student details
app.get("/get", async (req, res) => {
  try {
    const get_query = "SELECT * FROM student";
    const get_data = await pool.query(get_query);
    res.json(get_data.rows);
    console.log("Get all students");
  } catch (err) {
    console.log(err);
  }
});

app.listen(8080, () => {
  console.log("Server is listening at port 8080");
});
