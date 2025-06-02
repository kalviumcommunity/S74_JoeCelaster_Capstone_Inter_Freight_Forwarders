const express = require('express');
const { postTrackId } = require('../controllers/TrackController');
const router = express.Router();

router.post('/trackshipment',postTrackId)

module.exports = router;