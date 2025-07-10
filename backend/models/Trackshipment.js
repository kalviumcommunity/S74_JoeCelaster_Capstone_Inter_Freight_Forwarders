const mongoose = require('mongoose')

const trackSchema = new mongoose.Schema({
    trackId : {type: String, required: true}
})

module.exports = mongoose.model('Track',trackSchema)