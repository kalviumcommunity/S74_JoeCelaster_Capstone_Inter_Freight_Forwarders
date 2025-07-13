const express = require('express');
const router = express.Router();
const Shipment = require('../models/StartShipment')
const jwt = require('jsonwebtoken')


exports.uploadShipmentDocuments = async (req, res) => {
  try {
    const token = req.cookies.user_token
    if (!token) return res.status(401).json({ message: 'No token found' });
    
    const userDetails = jwt.verify(token,process.env.JWT_SECRET)

    const files = req.files;

    const newDocs = await Shipment.create({
      userFirstName:userDetails.FirstName,
      userLastName:userDetails.lastName,
      userEmail:userDetails.email,
      letterOfCredit: `/uploads/${files.letterOfCredit[0].filename}`,
      packingList: `/uploads/${files.packingList[0].filename}`,
      invoice: `/uploads/${files.invoice[0].filename}`,
      purchaseOrder: `/uploads/${files.purchaseOrder[0].filename}`
    });


    res.json({ message: 'Documents uploaded and saved!', data: newDocs ,userSaved: userDetails });
    console.log('Done saving')
  } catch (err) {
  // console.error(err); // Now this will log the error
   res.status(500).json({ error: err.message });
}
}

exports.getShipmentUploaded =async (req,res) => {
  try {
    const uploadedDetails = await Shipment.find()
    if(!uploadedDetails){
      return res.status(404).send({message:'No Submissions found!'})
    }
    return res.status(200).send({message: 'Fetched uploaded details!', data : {uploadedDetails}})
  } catch (error) {
    
  }
}