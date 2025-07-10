const express = require('express')
const router = express.Router()

const { uploadShipmentDocuments } = require('../controllers/ShipmentController')
const documents = require('../middleware/multer')

router.post('/uploads',documents,uploadShipmentDocuments)

module.exports = router