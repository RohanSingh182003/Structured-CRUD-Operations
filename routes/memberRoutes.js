const express = require('express')
const router = express.Router()
const {getMember,getSingleMember,addMember,updateMember,deleteMember} = require('../controller/memberController')

router.get('/',getMember)

router.get('/:id',getSingleMember)

router.post('/',addMember)

router.put('/:id',updateMember)

router.delete('/:id',deleteMember)

module.exports = router;