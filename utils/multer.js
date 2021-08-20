const multer = require('multer');
const storage = multer.memoryStorage()

const imageMimeTypes = [
  'image/png',
  'image/jpg',
  'image/jpeg',
]

const videoMimeTypes = [
  'video/mp4',
  'video/mpeg'
]

const imageFilter = (req, file, cb) => {
  if (imageMimeTypes.includes(file.mimetype)) {
    return cb(null, true)
  } else{
    return cb(null, false)
  }
}

const videoFilter = (req, file, cb) => {
  if (videoMimeTypes.includes(file.mimetype)) {
    return cb(null, true)
  } else{
    return cb(null, false)
  }
}

const imageLimits = { fileSize: 1024 * 1024 * 10 }
const videoLimits = { fileSize: 1024 * 1024 * 100 }

const imageUploader = multer({ storage, imageFilter, imageLimits })
const videoUploader = multer({ storage, videoFilter, videoLimits })

module.exports = {
  imageUploader,
  videoUploader
}