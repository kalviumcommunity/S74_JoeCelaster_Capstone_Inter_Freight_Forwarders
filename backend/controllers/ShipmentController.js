const express = require('express');
const router = express.Router();
const Shipment = require('../models/StartShipment')


exports.uploadShipmentDocuments = async (req, res) => {
  try {
    const files = req.files;

    const newDocs = await Shipment.create({
      letterOfCredit: `/uploads/${files.letterOfCredit[0].filename}`,
      packingList: `/uploads/${files.packingList[0].filename}`,
      invoice: `/uploads/${files.invoice[0].filename}`,
      purchaseOrder: `/uploads/${files.po[0].filename}`
    });


    res.json({ message: 'Documents uploaded and saved!', data: newDocs });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Upload failed' });
  }
}
