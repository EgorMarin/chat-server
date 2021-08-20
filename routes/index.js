const router = require('express').Router()

const { getChats, getMessages } = require('../services/localData');
const { imageUploader, videoUploader } = require('../utils/multer');

router.get('/chats', (req, res, next) => {
  const { user } = req.query;

  try {
    const chats = getChats({ user })

    res.json(chats)
  } catch (e) {
    next(e)
  }
})

router.get('/messages', (req, res, next) => {
  const { page, limit } = req.query;

  try {
    const messages = getMessages({ page, limit })

    res.json(messages)
  } catch (e) {
    next(e)
  }
})

router.post('/upload', [imageUploader.single('file'), videoUploader.single('file')], (req, res, next) => {
  console.log(req.file);

  try {
    // const messages = getMessages({ page, limit })

    res.json('ok')
  } catch (e) {
    next(e)
  }
})

module.exports = router