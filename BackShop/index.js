const express = require('express')
const app = express()
const mongoose = require('mongoose')
const env = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
app.use(express.json())

env.config()

mongoose.connect(process.env.DBLINK)
    .then(() => {
        console.log("mongoDB connected")
    })
    .catch((err) => {
        console.log(err)
    })

app.use("/api", authRoute)
app.use("/api/user", userRoute)


const defaultPort = process.env.PORT ? process.env.PORT : 5000
app.listen(defaultPort, () => {
    console.log('server running on: http://localhost:' + defaultPort )
})