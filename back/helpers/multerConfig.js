const multer = require('multer');

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb) => {
    const filename = `${Date.now()}_${file.originalname}`;
    cb(null, filename);
  }
});

module.exports = multer({ storage });