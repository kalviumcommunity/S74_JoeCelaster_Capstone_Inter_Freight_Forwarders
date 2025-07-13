const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: './uploads/',
    filename : (req,file,cb) => {
        cb(null,Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage})

const documents = upload.fields([
    {name : 'letterOfCredit',maxCount:1},
    {name : 'packingList',maxCount:1},
    {name : 'invoice',maxCount:1},
    {name : 'purchaseOrder',maxCount:1},
]);

module.exports = documents