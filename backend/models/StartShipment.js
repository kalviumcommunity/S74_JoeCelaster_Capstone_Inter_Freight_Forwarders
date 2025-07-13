const mongoose = require('mongoose')

const ShipmentSchema = new mongoose.Schema({
  userFirstName:{type:String},
  userlastName:{type:String},
  userEmail:{type:String},
  letterOfCredit : {type:String},
  packingList : {type:String},
  invoice : {type:String},
  purchaseOrder : {type:String},
})

module.exports = mongoose.model('Shipment',ShipmentSchema)