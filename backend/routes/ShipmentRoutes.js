const express = require('express')
const router = express.Router()

const { uploadShipmentDocuments, getShipmentUploaded } = require('../controllers/ShipmentController')
const documents = require('../middleware/multer')
const { protectUser } = require('../middleware/authMiddleware')

router.post('/uploads',documents,uploadShipmentDocuments)
router.get('/getuploads',getShipmentUploaded)
// router.get('/getuserfiles',protectUser)
module.exports = router