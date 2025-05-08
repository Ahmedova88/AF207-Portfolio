import express from "express"
import { createStudent, deleteStudent, getById, getStudents, updateStudent } from "../controllers/studentController.js"

const studentRouter = express.Router()

studentRouter.get("/", getStudents)
studentRouter.post("/", createStudent)
studentRouter.get("/:id", getById)
studentRouter.delete("/:id", deleteStudent)
studentRouter.put("/:id", updateStudent)

export default studentRouter