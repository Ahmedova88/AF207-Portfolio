import express from "express"
import "dotenv/config"
import "./src/db/dbConnection.js"
import studentRouter from "./src/routes/studentRouter.js"

const app = express()
app.use(express.json())

const port = process.env.PORT || 8001

app.use("/api/students", studentRouter)

app.listen(port, () => {
    console.log(`Server is run ${`http://localhost:${port}`}`);
})