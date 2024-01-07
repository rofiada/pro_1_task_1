const express = require('express')
const router = express.Router()
const authControl = require('../controllers/auth.controllers')



router.post("/register",authControl.register)



module.exports = router