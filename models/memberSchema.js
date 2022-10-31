const mongoose = require('mongoose')

const MemberSchema = new mongoose.Schema({
    first_name :{
        type: String,
        required : true
    },
    last_name :{
        type: String,
        require: true
    },
    age :{
        type: Number,
        require: true
    }
})

const Members = new mongoose.model('Member',MemberSchema)

module.exports = Members;