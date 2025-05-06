import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());
const port = 3000;

let students = JSON.parse(fs.readFileSync("db.json")).students;
console.log(students);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/students", (req, res) => {
  try {
    res.status(200).send({ message: "Success!", data: students });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error!" });
  }
});

app.get("/students/:id", (req, res) => {
  let { id } = req.params;
  try {
    let findUser = students.find((user) => user.id == id);

    if (!findUser) {
      res.status(404).send({ message: "Student not found" });
      return;
    }

    res.status(200).send({ message: "Student found", data: findUser });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error!" });
  }
});

app.post("/students", (req, res) => {
  try {
    let newStudent = req.body;

    if (!newStudent) {
      res.status(400).send({ message: "No data provided" });
      return;
    }

    students.push({ id: Date.now(), ...newStudent});

    fs.writeFileSync("db.json", JSON.stringify({ students }));

    res.status(201).send({
      message: "Student created successfully!",
      data: newStudent,
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error!" });
  }
});

app.delete("/students/:id", (req, res) => {
  let { id } = req.params;
  try {
    let index = students.findIndex((user) => user.id == id);

    if (index === -1) {
      res.status(404).send({ message: "Student not found" });
      return;
    }

    students.splice(index, 1);
    fs.writeFileSync("db.json", JSON.stringify({ students }));

    res.status(200).send({ message: "Student deleted", data: students });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error!" });
  }
});

app.put("/students/:id", (req, res) => {
  let { id } = req.params;
  let updateData = req.body;

  try {
    let index = students.findIndex((user) => user.id == id);
    if (index === -1) {
      res.status(404).send({ message: "Student not found" });
      return;
    }

    students[index] = { ...updateData, id };
    fs.writeFileSync("db.json", JSON.stringify({ students }));

    res.status(200).send({ message: "Student fully updated", data: students[index] });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error!" });
  }
});

app.patch("/students/:id", (req, res) => {
  let { id } = req.params;
  let patchData = req.body;

  try {
    let index = students.findIndex((user) => user.id == id);
    if (index === -1) {
      res.status(404).send({ message: "Student not found" });
      return;
    }

    students[index] = { ...students[index], ...patchData };
    fs.writeFileSync("db.json", JSON.stringify({ students }));

    res.status(200).send({ message: "Student partially updated", data: students[index] });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error!" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
