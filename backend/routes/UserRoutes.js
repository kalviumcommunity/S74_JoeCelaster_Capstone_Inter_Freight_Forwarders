const express = require('express')
const router = express.Router()
const { protectAdmin, protectUser} = require('../middleware/authMiddleware')
const {  getUserProfile, registerUser, loginUser } = require('../controllers/UserController')

router.post('/login',loginUser)
router.post('/register',registerUser)
router.get('/profile',protectUser,getUserProfile)

module.exports = router