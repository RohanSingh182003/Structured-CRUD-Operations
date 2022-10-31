const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
require('dotenv').config()

app.listen(process.env.PORT,()=> console.log(`app is listen on port ${process.env.PORT}`))

mongoose.connect('mongodb://127.0.0.1:27017/members',()=> console.log('db connected!'))

const memberRotes = require('./routes/memberRoutes')

app.use('/api/members',memberRotes)