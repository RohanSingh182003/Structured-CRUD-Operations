const express = require('express')
const router = express.Router()
const memberController = require('../controller/memberController')

router.get('/',memberController.get)
router.post('/',memberController.post)
router.put('/',memberController.put)
router.delete('/',memberController.delete)

module.exports = router;