const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  productType: {
    type: String,
    required: true
  },
  hsCode: {
    type: String,
    required: true
  },
  declaredValue: {
    type: Number,
    required: true
  },
  dimension: {
    type: String,
    required: true
  },
  transportType: {
    type: String,
    enum: ['Air', 'Sea', 'Road'],
    required: true
  },
  countryOfExport: {
    type: String,
    required: true
  },
  countryOfImport: {
    type: String,
    required: true
  },
  insured: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Shipment', shipmentSchema);
