const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
// const chatRoutes = require("./routes/chatRoutes");
// const messageRoutes = require("./routes/messageRoutes");
const {notFound, errorHandler} = require("./middleware/errorMiddleware")

dotenv.config()

connectDB();

const app = express()

app.get('/', () => {
    res.send("API running successfully")
})

// middleware
app.use(express.json())

app.use('/api/user', userRoutes)

app.use(notFound)
app.use(errorHandler)

// listen
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})




