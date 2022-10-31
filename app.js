const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
require('dotenv').config()

const port = process.env.PORT || 5000

app.listen(port,()=> console.log(`app is listen on port ${port}`))

mongoose.connect('mongodb://127.0.0.1:27017/members',()=> console.log('db connected!'))

const memberRotes = require('./routes/memberRoutes')

app.use('/api/members',memberRotes)