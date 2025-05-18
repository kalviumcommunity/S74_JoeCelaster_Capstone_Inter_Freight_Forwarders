const mongoose = require('mongoose')

const trackerSchema = new mongoose.Schema({
    trackId : {type: String, required: true}
})

module.exports = mongoose.model('User',trackerSchema)