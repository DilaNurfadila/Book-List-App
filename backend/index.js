import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import bookRoute from "./routes/bookRoute.js"

const app = express()
mongoose.connect('mongodb://localhost:27017/bookList', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Database connected'))

app.use(cors())
app.use(express.json())
app.use(bookRoute)

app.listen(5000, () => console.log("Server running"))