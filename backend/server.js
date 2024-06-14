require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT
const mongoose = require('mongoose')
const router = require('./routes/routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api', router)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((error) => {
    console.log(error)
})