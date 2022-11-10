const express = require('express')
const app = express()
const cors = require('cors')

// middlewares
app.use(express.json())
app.use(cors())

const mongoose = require('mongoose')
require('dotenv').config()

const port = process.env.PORT || 5000

app.listen(port,()=> console.log(`app is listen on port ${port}`))

mongoose.connect('mongodb+srv://RohanSingh182003:Rohan2003@cluster0.uappo.mongodb.net/dashboard',()=> console.log('db connected!'))

const dashboardRotes = require('./routes/dashboardRotes')

app.use('/api/dashboard',dashboardRotes)