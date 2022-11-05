const express = require('express')
const router = express.Router()
const {getDashboard,getSingleDashboard,addDashboard,updateDashboard,deleteDashboard} = require('../controller/dashboardController')

router.get('/',getDashboard)

router.get('/:id',getSingleDashboard)

router.post('/',addDashboard)

router.put('/:id',updateDashboard)

router.delete('/:id',deleteDashboard)

module.exports = router;