const mongoose = require('mongoose');

const shipmentDocumentSchema = new mongoose.Schema({
  letterOfCredit: String,
  packingList: String,
  invoice: String,
  po: String,
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ShipmentDocument', shipmentDocumentSchema);
