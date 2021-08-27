const router = require('express').Router()

const { imageUploader, videoUploader } = require('../utils/multer');

router.post('/upload', [imageUploader.single('file'), videoUploader.single('file')], (req, res, next) => {
  console.log(req.file);

  try {
    if (!req.file) {
      return res.status(500).send('Uploaded file is unknown.')
    }

    res.json('ok')
  } catch (e) {
    next(e)
  }
})

module.exports = router