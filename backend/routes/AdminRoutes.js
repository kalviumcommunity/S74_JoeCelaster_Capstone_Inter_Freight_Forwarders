const express = require('express')
const router = express.Router()
const { protectAdmin} = require('../middleware/authMiddleware')
const { loginAdmin, registerAdmin, getAdminProfile } = require('../controllers/UserController')

router.post('/login',loginAdmin)
router.post('/register',registerAdmin)
router.get('/profile',protectAdmin,getAdminProfile)

module.exports = router