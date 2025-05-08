import student from "../models/studentModel.js"

export const getStudents = async (req,res) => {
    try {
        let students = await student.find()

        if (!students) {
            res.status(404).send("Students not found.")
        }

        res.status(200).send(students)
    } catch (error) {
        res.status(500).send("Server error")
    }
}

export const createStudent = async (req, res) => {
    try {
        let newStudent = new student(req.body)

        await newStudent.save()

        res.status(201).send({ message: "Student create success", newStudent})
    } catch (error) {
        res.status(500).send("Server error")
    }
}

export const getById = async (req, res) => {
    const { id } = req.params

    try {
        let findStudent = await student.findById(id)

        if (!findStudent) {
            res.status(404).send("Student not found.")
        }

        res.status(200).send(findStudent)
    } catch (error) {
        res.status(500).send("Server error")
    }
}

export const deleteStudent = async (req, res) => {
    const { id } = req.params

    try {
        let deletedStudent = await student.findByIdAndDelete(id)

        if (!deletedStudent) {
            res.status(404).send("Student not deleted.")
        }

        res.status(200).send("Student deleted successfully")
    } catch (error) {
        res.status(500).send("Server error")
    }
}

export const updateStudent = async (req, res) => {
    const { id } = req.params

    try {
        let newStudent = req.body
        let updatedStudent = await student.findByIdAndUpdate(id, newStudent)

        if (!updatedStudent) {
            res.status(404).send("Student not updated.")
        }

        res.status(200).send("Student updated successfully")
    } catch (error) {
        res.status(500).send("Server error")
    }
}