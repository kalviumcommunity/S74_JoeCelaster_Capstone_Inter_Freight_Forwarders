const Track = require('../models/Trackshipment')

exports.postTrackId = async (req,res) => {
    try {
        const {trackId} = req.body
        const userTrack = await Track.create(req.body)

        if (!trackId){
            res.status(400).send('Track id is required!')
        }

        res.status(200).send('Shipment is currently at America')
    } catch (error) {
        res.status(500).send(error)
    }
}