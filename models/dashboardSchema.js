const mongoose = require('mongoose')

const DashboardSchema = new mongoose.Schema({
    prod_name :{
        type: String,
        required : true
    },
    ip_address :{
        type: String,
        require: true
    },
    mac_address :{
        type: String,
        require: true
    },
    function :{
        type: String,
        require: true
    },
    version :{
        type: Number,
        require: true
    },
    last_updated :{
        type: Date,
        require: true
    }
})

const Dashboard = new mongoose.model('Dashboard',DashboardSchema)

module.exports = Dashboard;